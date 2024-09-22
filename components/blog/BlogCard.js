import { CaretRight } from "@phosphor-icons/react";
import cn from "classnames";

import Badge from "components/common/Badge";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const BlogCard = ({ layout = "vertical", className = "", hideImage = false, data }) => {
  return (
    <StoryblokLink
      link={data}
      className={cn(className, "grid gap-6 hover:brightness-95", {
        "grid-cols-2": layout === "horizontal",
        "grid-cols-1": layout === "vertical",
      })}
    >
      {!hideImage ? (
        <StoryblokImage
          className={cn("h-full object-cover", {
            "aspect-square": layout === "horizontal",
            "aspect-[16/9]": layout === "vertical",
          })}
          image={data.content.image}
        />
      ) : null}

      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-4 flex items-center gap-4">
            {data.content.category?.content?.name ? (
              <Badge>{data.content.category?.content?.name}</Badge>
            ) : null}

            <span className="text-smaller font-semibold">{data.content.read_time} min read</span>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium">{data.content.title}</h3>
            {layout === "vertical" ? (
              <p className="mt-2 text-small text-gray-secondary">{data.content.subtitle}</p>
            ) : null}
          </div>
        </div>
        <p className="flex items-center gap-2.5 text-button font-medium uppercase">
          <span>Read More</span> <CaretRight className="h-4 w-4" />
        </p>
      </div>
    </StoryblokLink>
  );
};

export default BlogCard;
