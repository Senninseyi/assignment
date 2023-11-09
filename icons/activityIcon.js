import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ActivityIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.344}
      d="M16.906 8.62v7.501h5.627M5.653 4.868a3.75 3.75 0 0 0-3.75 3.751v18.755a3.75 3.75 0 0 0 3.75 3.751h15.004a3.75 3.75 0 0 0 3.751-3.751"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.758}
      d="M29.097 22.1V9.79L20.306 1h-8.791a3.516 3.516 0 0 0-3.517 3.517v17.582a3.517 3.517 0 0 0 3.517 3.517H25.58a3.516 3.516 0 0 0 3.516-3.517Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#2E2F2E"
      strokeWidth={2.251}
      d="M14.698 3.93v12.191c0 1.036.84 1.876 1.876 1.876h9.573"
    />
  </Svg>
);
export default ActivityIcon;
