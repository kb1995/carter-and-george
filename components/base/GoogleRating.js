import cn from "classnames";

const RATING = "4.8";

const GoogleRating = ({ center = false }) => {
  return (
    <div className={cn("flex items-center gap-[7px]", { "justify-center": center })}>
      <span className="text-gray-tertiary text-[12px] font-medium">Rated {RATING} on</span>

      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.55824 6.26283C3.92945 3.53931 6.74758 1.67188 10.0052 1.67188C12.2514 1.67188 14.1377 2.49767 15.581 3.84233L13.1908 6.23249C12.3272 5.40675 11.2286 4.98627 10.0052 4.98627C7.83473 4.98627 5.99758 6.45218 5.34233 8.42188C5.17563 8.92188 5.08092 9.45596 5.08092 10.0052C5.08092 10.5545 5.17563 11.0885 5.34233 11.5885C5.99758 13.5582 7.83473 15.0241 10.0052 15.0241C11.1264 15.0241 12.081 14.7287 12.8272 14.2287C13.7097 13.6378 14.2969 12.7552 14.49 11.7135H10.0052V8.49004H17.8536C17.9522 9.03546 18.0052 9.60371 18.0052 10.1946C18.0052 12.7325 17.0961 14.8688 15.5203 16.3196C14.1415 17.5924 12.2552 18.3385 10.0052 18.3385C6.74758 18.3385 3.92945 16.4711 2.55824 13.7476C1.99386 12.6226 1.67188 11.3499 1.67188 10.0052C1.67188 8.66054 1.99386 7.3878 2.55824 6.26283Z"
          fill="#A5A5A5"
        />
      </svg>
      <svg
        width="72"
        height="14"
        viewBox="0 0 72 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_532_36269)">
          <path
            d="M6.67864 10.4894C6.59587 10.443 6.49498 10.443 6.41221 10.4894L3.21403 12.2796C3.01095 12.3932 2.76797 12.2167 2.81332 11.9884L3.52761 8.39358C3.54609 8.30055 3.51492 8.2046 3.44528 8.1402L0.754418 5.65178C0.583553 5.49377 0.676366 5.20812 0.907474 5.18072L4.5471 4.74918C4.64129 4.73802 4.72291 4.67871 4.76264 4.59258L6.29777 1.26445C6.39525 1.05312 6.6956 1.05312 6.79308 1.26445L8.32818 4.59258C8.3679 4.67871 8.44953 4.73802 8.54372 4.74918L12.1833 5.18072C12.4144 5.20812 12.5072 5.49377 12.3364 5.65178L9.64556 8.1402C9.57592 8.2046 9.54475 8.30055 9.56323 8.39358L10.2775 11.9884C10.3229 12.2167 10.0799 12.3932 9.8768 12.2796L6.67864 10.4894Z"
            fill="#A5A5A5"
          />
          <g clip-path="url(#clip1_532_36269)">
            <path
              d="M21.4052 10.4894C21.3224 10.443 21.2215 10.443 21.1388 10.4894L17.9406 12.2796C17.7375 12.3932 17.4945 12.2167 17.5399 11.9884L18.2542 8.39358C18.2727 8.30055 18.2415 8.2046 18.1718 8.1402L15.481 5.65178C15.3101 5.49377 15.4029 5.20812 15.634 5.18072L19.2737 4.74918C19.3679 4.73802 19.4495 4.67871 19.4892 4.59258L21.0243 1.26445C21.1218 1.05312 21.4222 1.05312 21.5196 1.26445L23.0547 4.59258C23.0945 4.67871 23.1761 4.73802 23.2703 4.74918L26.9099 5.18072C27.141 5.20812 27.2338 5.49377 27.0629 5.65178L24.3721 8.1402C24.3025 8.2046 24.2713 8.30055 24.2898 8.39358L25.0041 11.9884C25.0494 12.2167 24.8064 12.3932 24.6034 12.2796L21.4052 10.4894Z"
              fill="#A5A5A5"
            />
          </g>
          <path
            d="M36.1415 10.4894C36.0588 10.443 35.9579 10.443 35.8751 10.4894L32.6769 12.2796C32.4738 12.3932 32.2309 12.2167 32.2762 11.9884L32.9905 8.39358C33.009 8.30055 32.9778 8.2046 32.9082 8.1402L30.2173 5.65178C30.0464 5.49377 30.1393 5.20812 30.3704 5.18072L34.01 4.74918C34.1042 4.73802 34.1858 4.67871 34.2255 4.59258L35.7607 1.26445C35.8581 1.05312 36.1585 1.05312 36.256 1.26445L37.7911 4.59258C37.8308 4.67871 37.9124 4.73802 38.0066 4.74918L41.6462 5.18072C41.8773 5.20812 41.9701 5.49377 41.7993 5.65178L39.1085 8.1402C39.0388 8.2046 39.0076 8.30055 39.0261 8.39358L39.7404 11.9884C39.7858 12.2167 39.5428 12.3932 39.3397 12.2796L36.1415 10.4894Z"
            fill="#A5A5A5"
          />
          <g clip-path="url(#clip2_532_36269)">
            <path
              d="M50.8603 10.4894C50.7775 10.443 50.6766 10.443 50.5939 10.4894L47.3957 12.2796C47.1926 12.3932 46.9496 12.2167 46.995 11.9884L47.7092 8.39358C47.7277 8.30055 47.6966 8.2046 47.6269 8.1402L44.9361 5.65178C44.7652 5.49377 44.858 5.20812 45.0891 5.18072L48.7287 4.74918C48.8229 4.73802 48.9046 4.67871 48.9443 4.59258L50.4794 1.26445C50.5769 1.05312 50.8772 1.05312 50.9747 1.26445L52.5098 4.59258C52.5495 4.67871 52.6312 4.73802 52.7254 4.74918L56.365 5.18072C56.5961 5.20812 56.6889 5.49377 56.518 5.65178L53.8272 8.1402C53.7576 8.2046 53.7264 8.30055 53.7449 8.39358L54.4591 11.9884C54.5045 12.2167 54.2615 12.3932 54.0584 12.2796L50.8603 10.4894Z"
              fill="#A5A5A5"
            />
          </g>
          <g clip-path="url(#clip3_532_36269)">
            <path
              d="M65.5868 10.4894C65.5041 10.443 65.4032 10.443 65.3204 10.4894L62.1222 12.2796C61.9192 12.3932 61.6762 12.2167 61.7215 11.9884L62.4358 8.39358C62.4543 8.30055 62.4231 8.2046 62.3535 8.1402L59.6626 5.65178C59.4918 5.49377 59.5846 5.20812 59.8157 5.18072L63.4553 4.74918C63.5495 4.73802 63.6311 4.67871 63.6708 4.59258L65.206 1.26445C65.3035 1.05312 65.6038 1.05312 65.7013 1.26445L67.2364 4.59258C67.2761 4.67871 67.3577 4.73802 67.4519 4.74918L71.0915 5.18072C71.3226 5.20812 71.4154 5.49377 71.2446 5.65178L68.5538 8.1402C68.4841 8.2046 68.453 8.30055 68.4714 8.39358L69.1857 11.9884C69.2311 12.2167 68.9881 12.3932 68.785 12.2796L65.5868 10.4894Z"
              fill="#A5A5A5"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_532_36269">
            <rect width="72" height="13.0909" fill="white" transform="translate(0 0.454102)" />
          </clipPath>
          <clipPath id="clip1_532_36269">
            <rect
              width="13.0909"
              height="13.0909"
              fill="white"
              transform="translate(14.7266 0.454102)"
            />
          </clipPath>
          <clipPath id="clip2_532_36269">
            <rect
              width="13.0909"
              height="13.0909"
              fill="white"
              transform="translate(44.1816 0.454102)"
            />
          </clipPath>
          <clipPath id="clip3_532_36269">
            <rect
              width="13.0909"
              height="13.0909"
              fill="white"
              transform="translate(58.9082 0.454102)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default GoogleRating;
