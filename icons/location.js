import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Location = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#EF5600"
      stroke="#EF5600"
      strokeWidth={2.906}
      d="M2.318 7.99C4.124-.67 15.885-.66 17.682 8c1.054 5.08-1.843 9.38-4.382 12.04-.887.933-2.072 1.455-3.305 1.455-1.232 0-2.417-.522-3.304-1.456-2.53-2.66-5.427-6.97-4.373-12.05Z"
    />
  </Svg>
);
export default Location;
