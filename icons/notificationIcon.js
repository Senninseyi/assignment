import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NotificationsIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#323332"
      strokeWidth={1.714}
      d="m11.156 4.542.71-.21-.104-.734a2.054 2.054 0 0 1 2.03-2.343h.001a2.052 2.052 0 0 1 2.032 2.343l-.106.734.711.21a9.33 9.33 0 0 1 6.688 8.947V25.982h2.311c.159 0 .31.063.423.175l.606-.606-.606.606a.597.597 0 0 1 0 .845l.606.606-.606-.606a.597.597 0 0 1-.423.175H2.157a.597.597 0 1 1 0-1.195h2.311V13.49a9.33 9.33 0 0 1 6.688-8.947Zm4.689 26.402a.597.597 0 0 1-.597.597h-2.91a.598.598 0 0 1 0-1.195h2.91a.597.597 0 0 1 .597.598Z"
    />
  </Svg>
);
export default NotificationsIcon;
