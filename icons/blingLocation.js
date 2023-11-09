import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const BlingLocation = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={36} height={36} fill="#FFEBE1" rx={18} />
    <Path
      fill="#EF5600"
      stroke="#EF5600"
      strokeWidth={2.306}
      d="M9.71 14.702c2.02-8.877 15.17-8.867 17.18.01 1.178 5.207-2.06 9.614-4.9 12.341a5.323 5.323 0 0 1-7.39 0c-2.829-2.727-6.068-7.144-4.89-12.351Z"
    />
    <Path
      fill="#fff"
      d="M18.3 19.765a3.198 3.198 0 1 0 0-6.397 3.198 3.198 0 0 0 0 6.397Z"
    />
  </Svg>
);
export default BlingLocation;
