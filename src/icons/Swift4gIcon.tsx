import SvgIcon, { SvgIconProps } from "./SvgIcons";

const Swift4gIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} fillColor="none">
    <rect width="30" height="13" fill="url(#swift4gpattern0)" />
    <defs>
      <pattern id="swift4gpattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#swift4g" transform="translate(0 -0.615385) scale(0.00444444 0.0102564)" />
      </pattern>
      <image id="swift4g" width="225" height="225" xlinkHref="data:image/png;base64,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IWzWNTasFwUMYS+e9jibVcAQNusaG9aLAoawF097nM0qYAibdY0N60UBQ9iLpz3OZhUwhM26xob1ooAh7MXTHmezChjCZl1jw3pRwBD24mmPs1kFDGGzrrFhvShgCHvxtMfZrAKGsFnX2LBeFDCEvXja42xWAUPYrGtsWC8KGMJePO1xNquAIWzWNTasFwUMYS+e9jibVcAQNusaG9aLAoawF097nM0qYAibdY0N60UBQ9iLpz3OZhUwhM26xob1ooAh7MXTHmezChjCZl1jw3pRwBD24mmPs1kFDGGzrrFhvShgCHvxtMfZrAKGsFnX2LBeFDCEvXja42xWAUPYrGtsWC8KGMJePO1xNquAIWzWNTasFwUMYS+e9jibVcAQNusaG9aLAoawF097nM0qYAibdY0N60UBQ9iLpz3OZhUwhM26xob1ooAh7MXTHmezChjCZl1jw3pRwBD24mmPs1kFDGGzrrFhvShgCHvxtMfZrAKGsFnX2LBeFDCEvXja42xWAUPYrGtsWC8KGMJePO1xNquAIWzWNTasFwUMYS+e9jibVcAQNusaG9aLAoawF097nM0qYAibdY0N60UBQ9iLpz3OZhUwhM26xob1ooAh7MXTHmezChjCZl1jw3pRwBD24mmPs1kFDGGzrrFhvSjwP+BRJgs9ABBzAAAAAElFTkSuQmCC" />
    </defs>
  </SvgIcon>
);

Swift4gIcon.default = {
  width: "30",
  height: "13",
  viewBox: "0 0 30 13",
};

export default Swift4gIcon;
