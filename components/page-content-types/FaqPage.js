import { useEffect, useState } from "react";

import { Disclosure } from "@headlessui/react";
import { Minus, Plus } from "@phosphor-icons/react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import cn from "classnames";
import { AnimatePresence, m } from "framer-motion";
import { debounce } from "lodash";
import { render } from "storyblok-rich-text-react-renderer";

import { stringParameterize } from "utils/stringParameterize";

import Container from "components/common/Container";

const FaqItem = ({ data }) => {
  return (
    <Disclosure {...storyblokEditable(data)} as="div" className="pt-6">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left">
              <span className="text-medium font-semibold">{data.question}</span>
              <span className="text-stroke-dark ml-6 flex h-7 items-center">
                {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </Disclosure.Button>
          </dt>
          <AnimatePresence initial={false}>
            {open ? (
              <m.dd
                className="mt-2 pr-12"
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", visibility: "visible", marginTop: "24px" },
                  collapsed: { opacity: 0, height: 0, visibility: "hidden", marginTop: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="text-gray-secondary prose max-w-none">{render(data.answer)}</div>
              </m.dd>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

const FaqPage = ({ blok }) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let scrolledHeadings = [];
      const headings = document
        .getElementById("faq-content")
        ?.querySelectorAll(".js-faq-section-title");

      headings.forEach(function (element) {
        let element_position = element.offsetTop - 200;
        if (element_position <= window.scrollY) {
          scrolledHeadings.push(element.id);
        }
      });

      let latestHeading = scrolledHeadings.slice(-1)[0];
      setActive(latestHeading);
    };

    const debounceFn = debounce(onScroll, 20);

    window.addEventListener("scroll", debounceFn);

    return () => window.removeEventListener("scroll", debounceFn);
  }, []);

  return (
    <div className="" {...storyblokEditable(blok)} key={blok._uid}>
      <Container className="my-2xl">
        <div className="mb-20">
          <h1 className="mb-2 text-3xl">{blok.title}</h1>
          <p className="text-normal max-w-2xl">{blok.subtitle}</p>
        </div>
        <div className="flex items-start gap-20">
          <aside className="relative top-8 mb-20 hidden max-md:w-full md:sticky md:block md:min-w-[304px]">
            <nav className="flex flex-col space-y-4 border-l-2 border-[#E9F0F2]">
              <ul className="flex flex-col space-y-3">
                {blok.faq_sections?.map((item) => {
                  const text = item.title;
                  const id = stringParameterize(text);
                  const href = `#${id}`;
                  const isActive = active === id;

                  const handleSmoothScroll = (e) => {
                    e.preventDefault();
                    const element = document.getElementById(id);

                    const yOffset = -30;
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

                    window.scrollTo({ top: y, behavior: "smooth" });
                    setActive(id);
                  };

                  return (
                    <li key={id} className="relative">
                      <div
                        className={cn(
                          "bg-blue absolute -left-0.5 h-full w-0.5 transition-all duration-150",
                          {
                            "opacity-0": !isActive,
                            "opacity-100": isActive,
                          }
                        )}
                      />
                      <a
                        onClick={(e) => handleSmoothScroll(e)}
                        href={href}
                        className={cn("block w-full px-5 py-0.5 duration-150", {
                          "text-medium font-semibold": isActive,
                          "text-normal": !isActive,
                        })}
                      >
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
          <div className="w-full flex-1">
            <div className="grid grid-cols-1 gap-20" id="faq-content">
              {blok.faq_sections.map((section) => {
                return (
                  <div {...storyblokEditable(section)} key={section._uid}>
                    <h2
                      id={stringParameterize(section.title)}
                      className="js-faq-section-title border-stroke-light border-b pb-6 text-xl font-semibold"
                    >
                      {section.title}
                    </h2>
                    <div>
                      <dl className="divide-stroke-light space-y-6 divide-y">
                        {section.faqs.map((faq) => {
                          return <FaqItem key={faq._uid} data={faq} />;
                        })}
                      </dl>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      {blok.bottom_sections?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default FaqPage;
