import * as React from "react";
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
const CardImage2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={392} height={155} fill="#000" rx={8} />
      <Path
        fill="url(#b)"
        d="M0 0h424.594v284H0z"
        transform="matrix(-1 0 0 1 392 -67)"
      />
      <Path fill="url(#c)" d="M-45 0h437v156H-45z" />
      <Path
        fill="#fff"
        d="M18.106 60.597V57.34h12.982v3.258H18.106Zm10.683-9.9h3.612v17.679h-3.612V50.697Zm-11.87 0h3.612v17.679h-3.612V50.697Zm21.308 14.067c0 .337.084.632.252.884.169.236.396.421.682.556.303.118.631.177.985.177.505 0 .96-.101 1.364-.303.404-.22.732-.522.985-.91.252-.404.379-.883.379-1.439l.404 1.515c0 .741-.21 1.364-.632 1.87-.404.504-.934.883-1.59 1.136a5.452 5.452 0 0 1-2.021.379 4.781 4.781 0 0 1-2.02-.43 3.766 3.766 0 0 1-1.516-1.237c-.37-.556-.556-1.23-.556-2.02 0-1.129.396-2.021 1.187-2.678.792-.656 1.911-.985 3.36-.985.74 0 1.388.076 1.944.227.573.152 1.052.337 1.44.556.387.219.665.43.833.632v1.515a4.876 4.876 0 0 0-1.54-.758 6.063 6.063 0 0 0-1.768-.252c-.505 0-.918.067-1.238.202-.32.117-.556.294-.707.53-.152.219-.227.497-.227.834Zm-1.263-4.722-1.212-2.223c.606-.32 1.346-.623 2.222-.909.876-.303 1.852-.454 2.93-.454.993 0 1.877.143 2.651.429.775.286 1.381.707 1.819 1.263.438.538.657 1.203.657 1.995v8.233h-3.157v-7.551c0-.32-.05-.59-.152-.809a1.336 1.336 0 0 0-.48-.58 1.948 1.948 0 0 0-.732-.329 4.195 4.195 0 0 0-.96-.1c-.539 0-1.052.058-1.54.176a6.492 6.492 0 0 0-2.046.859Zm10.32-3.284h3.51l2.854 6.996L56.5 56.76h3.51l-6.364 12.83-6.364-12.83Zm19.404 11.87c-1.263 0-2.365-.252-3.308-.757a5.492 5.492 0 0 1-2.198-2.096c-.505-.91-.757-1.979-.757-3.208 0-1.246.252-2.315.758-3.207a5.276 5.276 0 0 1 2.197-2.096c.943-.506 2.054-.758 3.333-.758 1.28 0 2.366.236 3.258.707.91.455 1.6 1.128 2.071 2.02.472.876.707 1.937.707 3.183 0 .151-.008.311-.025.48 0 .168-.008.303-.025.404H62.294v-2.02h7.551l-.884 1.161a1.52 1.52 0 0 0 .177-.404c.067-.185.1-.337.1-.455 0-.572-.109-1.06-.327-1.465a2.314 2.314 0 0 0-.884-.96c-.388-.235-.842-.353-1.364-.353-.64 0-1.179.143-1.616.43-.421.269-.75.681-.985 1.237-.22.539-.337 1.212-.354 2.02 0 .775.11 1.432.328 1.97.236.54.581.952 1.036 1.238.454.286 1.002.43 1.641.43.724 0 1.339-.135 1.844-.405a3.428 3.428 0 0 0 1.288-1.263l2.854.884c-.606 1.095-1.414 1.92-2.425 2.475-.993.54-2.188.809-3.586.809Zm16.1-19.951h3.283v19.699h-3.283v-19.7Zm5.728 13.89c0-1.212.278-2.273.834-3.182a5.932 5.932 0 0 1 2.298-2.121c.977-.506 2.08-.758 3.309-.758s2.323.252 3.283.758a5.707 5.707 0 0 1 2.298 2.121c.572.91.859 1.97.859 3.182 0 1.196-.287 2.256-.859 3.182a5.707 5.707 0 0 1-2.298 2.122c-.96.505-2.054.758-3.283.758-1.23 0-2.332-.253-3.309-.758a5.932 5.932 0 0 1-2.298-2.122c-.556-.926-.834-1.986-.834-3.182Zm3.334 0c0 .657.135 1.238.404 1.743a3.27 3.27 0 0 0 1.137 1.162 3.1 3.1 0 0 0 1.566.404 3.1 3.1 0 0 0 1.565-.404 3.07 3.07 0 0 0 1.112-1.162c.286-.505.429-1.086.429-1.743 0-.656-.143-1.237-.43-1.742a2.846 2.846 0 0 0-1.11-1.162 3.1 3.1 0 0 0-1.566-.404 3.1 3.1 0 0 0-1.566.404c-.472.27-.85.657-1.137 1.162-.27.505-.404 1.086-.404 1.742Zm20.764-13.89h3.284v19.699h-3.284v-19.7Zm-9.546 13.89c0-1.296.261-2.39.783-3.283.522-.91 1.212-1.6 2.071-2.07a5.583 5.583 0 0 1 2.727-.708c.977 0 1.835.244 2.576.732.758.489 1.347 1.187 1.768 2.097.438.892.657 1.97.657 3.232 0 1.246-.219 2.324-.657 3.233-.421.91-1.01 1.608-1.768 2.096-.741.488-1.599.733-2.576.733a5.583 5.583 0 0 1-2.727-.708c-.859-.471-1.549-1.161-2.071-2.07-.522-.91-.783-2.004-.783-3.284Zm3.384 0c0 .69.143 1.288.429 1.793.287.505.674.893 1.162 1.162a3.19 3.19 0 0 0 1.566.404c.488 0 .96-.126 1.414-.379.472-.269.851-.656 1.137-1.161.303-.505.454-1.112.454-1.819 0-.707-.151-1.313-.454-1.818a2.834 2.834 0 0 0-1.137-1.137 2.735 2.735 0 0 0-1.414-.404 3.19 3.19 0 0 0-1.566.404c-.488.27-.875.657-1.162 1.162-.286.505-.429 1.103-.429 1.793Zm14.915 2.197c0 .337.084.632.252.884.169.236.396.421.682.556.303.118.632.177.985.177.505 0 .96-.101 1.364-.303a2.69 2.69 0 0 0 .985-.91c.253-.404.379-.883.379-1.439l.404 1.515c0 .741-.21 1.364-.631 1.87-.405.504-.935.883-1.592 1.136a5.447 5.447 0 0 1-2.02.379 4.78 4.78 0 0 1-2.02-.43 3.772 3.772 0 0 1-1.516-1.237c-.37-.556-.555-1.23-.555-2.02 0-1.129.395-2.021 1.187-2.678.791-.656 1.911-.985 3.359-.985.74 0 1.389.076 1.944.227.573.152 1.053.337 1.44.556.387.219.665.43.833.632v1.515a4.871 4.871 0 0 0-1.54-.758 6.066 6.066 0 0 0-1.768-.252c-.505 0-.918.067-1.238.202-.32.117-.555.294-.707.53-.151.219-.227.497-.227.834Zm-1.263-4.722-1.212-2.223c.606-.32 1.347-.623 2.222-.909.876-.303 1.852-.454 2.93-.454.993 0 1.877.143 2.652.429.774.286 1.38.707 1.818 1.263.438.538.657 1.203.657 1.995v8.233h-3.157v-7.551c0-.32-.051-.59-.152-.809a1.336 1.336 0 0 0-.48-.58 1.947 1.947 0 0 0-.732-.329 4.194 4.194 0 0 0-.96-.1c-.538 0-1.052.058-1.54.176a6.514 6.514 0 0 0-2.046.859Zm22.005 4.722c0 .337.084.632.252.884.169.236.396.421.682.556.303.118.632.177.985.177.505 0 .96-.101 1.364-.303a2.69 2.69 0 0 0 .985-.91c.253-.404.379-.883.379-1.439l.404 1.515c0 .741-.211 1.364-.632 1.87-.404.504-.934.883-1.591 1.136a5.447 5.447 0 0 1-2.02.379 4.78 4.78 0 0 1-2.02-.43 3.765 3.765 0 0 1-1.516-1.237c-.37-.556-.555-1.23-.555-2.02 0-1.129.395-2.021 1.187-2.678.791-.656 1.911-.985 3.359-.985.74 0 1.389.076 1.944.227.573.152 1.053.337 1.44.556.387.219.665.43.833.632v1.515a4.871 4.871 0 0 0-1.54-.758 6.066 6.066 0 0 0-1.768-.252c-.505 0-.918.067-1.238.202-.32.117-.555.294-.707.53-.151.219-.227.497-.227.834Zm-1.263-4.722-1.212-2.223c.606-.32 1.347-.623 2.222-.909.876-.303 1.852-.454 2.93-.454.993 0 1.877.143 2.652.429.774.286 1.38.707 1.818 1.263.438.538.657 1.203.657 1.995v8.233h-3.157v-7.551c0-.32-.051-.59-.152-.809a1.336 1.336 0 0 0-.48-.58 1.947 1.947 0 0 0-.732-.329 4.194 4.194 0 0 0-.96-.1c-.538 0-1.052.058-1.54.176a6.491 6.491 0 0 0-2.046.859Zm10.62-3.284h7.172v2.753h-7.172v-2.753Zm1.995-4.04h3.157v15.658h-3.157V52.718Zm25.552 4.04-7.577 17.174h-3.359l2.93-6.718-4.824-10.456h3.637l3.738 9.244-1.617-.05 3.662-9.194h3.41Zm.314 5.81c0-1.213.278-2.274.833-3.183a5.936 5.936 0 0 1 2.299-2.121c.976-.506 2.079-.758 3.308-.758 1.229 0 2.324.252 3.283.758a5.71 5.71 0 0 1 2.299 2.121c.572.91.858 1.97.858 3.182 0 1.196-.286 2.256-.858 3.182a5.71 5.71 0 0 1-2.299 2.122c-.959.505-2.054.758-3.283.758s-2.332-.253-3.308-.758a5.936 5.936 0 0 1-2.299-2.122c-.555-.926-.833-1.986-.833-3.182Zm3.334 0c0 .656.134 1.237.404 1.742.286.488.665.875 1.136 1.162.472.269.994.404 1.566.404.573 0 1.095-.135 1.566-.404a3.07 3.07 0 0 0 1.111-1.162c.286-.505.43-1.086.43-1.743 0-.656-.144-1.237-.43-1.742a2.846 2.846 0 0 0-1.111-1.162 3.098 3.098 0 0 0-1.566-.404c-.572 0-1.094.135-1.566.404-.471.27-.85.657-1.136 1.162-.27.505-.404 1.086-.404 1.742Zm15.385 1.262c0 .758.151 1.347.454 1.768.303.404.792.606 1.465.606.471 0 .876-.093 1.212-.278.354-.202.623-.48.808-.833.202-.354.303-.775.303-1.263v-7.072h3.258v11.618h-3.258v-1.768c-.37.657-.841 1.162-1.414 1.515-.572.337-1.271.505-2.096.505-1.381 0-2.416-.395-3.106-1.186-.674-.792-1.011-1.878-1.011-3.258v-7.425h3.385v7.071Zm13.93-7.072v11.618h-3.207V56.758h3.207Zm3.41 3.41a2.41 2.41 0 0 0-.682-.455c-.219-.117-.497-.176-.834-.176-.404 0-.749.11-1.035.328-.286.219-.505.53-.657.934-.134.388-.202.86-.202 1.415l-.909-.91c0-.925.177-1.742.53-2.45.354-.723.817-1.296 1.389-1.717.573-.437 1.162-.656 1.768-.656.421 0 .817.075 1.187.227.388.152.699.379.935.682l-1.49 2.778Z"
      />
      <Path
        fill="#FF661B"
        d="M15.455 89.758h7.93v3.157h-7.93v-3.157Zm7.5-4.42a1.631 1.631 0 0 0-.555-.479 1.245 1.245 0 0 0-.606-.151c-.253 0-.472.058-.657.176-.168.118-.303.303-.404.556-.101.252-.152.58-.152.985v14.951H16.92v-15.91c0-.876.16-1.626.48-2.249a3.452 3.452 0 0 1 1.465-1.44c.657-.336 1.465-.504 2.425-.504.589 0 1.086.076 1.49.227.404.135.749.303 1.035.505.286.185.514.362.682.53l-1.54 2.804Zm1.99.051c0-.606.218-1.094.656-1.464.438-.388.96-.581 1.566-.581.623 0 1.145.193 1.566.58.437.371.656.86.656 1.465 0 .607-.219 1.103-.656 1.49-.421.388-.943.581-1.566.581a2.284 2.284 0 0 1-1.566-.58c-.438-.388-.657-.884-.657-1.49Zm.378 4.37h3.687v11.617h-3.687V89.758Zm14.38 4.546c0-.69-.135-1.221-.404-1.592-.253-.37-.682-.555-1.288-.555a2.15 2.15 0 0 0-1.061.252 1.747 1.747 0 0 0-.707.733c-.169.32-.253.707-.253 1.162v7.071h-3.839V89.758h3.84v1.743a3.773 3.773 0 0 1 1.363-1.49c.59-.353 1.313-.53 2.172-.53 1.448 0 2.5.387 3.157 1.162.656.774.985 1.86.985 3.257v7.476h-3.965v-7.072Zm6.546 7.904h3.687c.05.472.185.868.404 1.187.236.32.547.556.934.708a3.27 3.27 0 0 0 1.314.252c.539 0 1.027-.126 1.465-.379.437-.235.783-.597 1.035-1.086.27-.471.404-1.06.404-1.768V89.758h3.662v11.365c0 1.482-.295 2.686-.884 3.612-.572.926-1.338 1.599-2.298 2.02-.96.438-2.037.657-3.233.657-1.43 0-2.618-.219-3.56-.657-.927-.437-1.625-1.052-2.097-1.843-.471-.775-.75-1.676-.833-2.703Zm-.253-6.793c0-1.314.261-2.408.783-3.284.539-.875 1.23-1.532 2.071-1.97a5.723 5.723 0 0 1 2.677-.656c.977 0 1.835.236 2.576.707.758.455 1.355 1.12 1.793 1.995.438.876.657 1.945.657 3.208 0 1.246-.219 2.315-.657 3.207-.438.876-1.035 1.549-1.793 2.021-.74.454-1.6.681-2.576.681a5.719 5.719 0 0 1-2.677-.656c-.842-.455-1.532-1.12-2.07-1.995-.523-.876-.784-1.962-.784-3.258Zm4.016 0c0 .589.126 1.103.379 1.54.252.421.589.741 1.01.96.42.219.884.328 1.389.328a2.79 2.79 0 0 0 1.263-.303c.42-.219.766-.538 1.035-.96.27-.42.404-.942.404-1.565 0-.472-.084-.884-.252-1.238a2.421 2.421 0 0 0-.632-.884 2.529 2.529 0 0 0-.858-.53 2.761 2.761 0 0 0-.96-.177c-.505 0-.968.11-1.39.328-.42.22-.757.54-1.01.96-.252.421-.378.935-.378 1.54Zm17.99 6.213c-1.346 0-2.517-.245-3.51-.733-.977-.505-1.734-1.212-2.273-2.121-.539-.91-.808-1.979-.808-3.208 0-1.246.26-2.323.783-3.232.522-.91 1.27-1.608 2.247-2.097.994-.488 2.164-.732 3.51-.732 1.348 0 2.484.236 3.41.707a4.774 4.774 0 0 1 2.122 1.995c.488.876.732 1.936.732 3.183v.555c0 .169-.017.312-.05.43H63.557v-2.122h7.173l-.91 1.162c.085-.118.152-.261.203-.43a1.4 1.4 0 0 0 .1-.454c0-.505-.092-.943-.277-1.313a2.039 2.039 0 0 0-.783-.86c-.337-.201-.732-.302-1.187-.302-.572 0-1.052.126-1.44.379-.387.252-.681.64-.883 1.161-.186.505-.287 1.145-.303 1.92 0 .707.1 1.313.303 1.818.202.505.505.893.909 1.162.404.252.9.379 1.49.379.673 0 1.246-.127 1.717-.38a2.796 2.796 0 0 0 1.162-1.136l3.41.834c-.607 1.145-1.432 2.003-2.475 2.576-1.028.572-2.282.859-3.764.859Zm12.331-11.87v11.617H76.57V89.758h3.763Zm3.36 3.94a2.525 2.525 0 0 0-.658-.48c-.218-.118-.496-.177-.833-.177-.37 0-.699.1-.985.303-.286.202-.505.496-.657.884-.151.387-.227.858-.227 1.414l-.91-1.338c0-.927.178-1.752.531-2.476.37-.723.85-1.296 1.44-1.717.59-.42 1.204-.631 1.843-.631.421 0 .826.084 1.213.252.387.169.682.404.884.707l-1.642 3.258Zm9.468-3.94h7.779v3.156h-7.779v-3.157Zm2.046-4.041h3.662v15.658h-3.662V85.718Zm7.131-.329c0-.606.219-1.094.657-1.464a2.28 2.28 0 0 1 1.565-.581c.623 0 1.145.193 1.566.58.438.371.657.86.657 1.465 0 .607-.219 1.103-.657 1.49-.421.388-.943.581-1.566.581a2.28 2.28 0 0 1-1.565-.58c-.438-.388-.657-.884-.657-1.49Zm.379 4.37h3.687v11.617h-3.687V89.758Zm10.616 17.173h-3.813V89.758h3.813v17.174Zm9.496-11.365c0 1.347-.269 2.484-.808 3.41-.522.926-1.204 1.624-2.046 2.096a5.308 5.308 0 0 1-2.677.707c-1.01 0-1.885-.252-2.626-.758-.724-.522-1.28-1.246-1.667-2.172-.387-.942-.581-2.037-.581-3.283 0-1.262.194-2.357.581-3.283.387-.926.943-1.642 1.667-2.147.741-.522 1.616-.783 2.626-.783.96 0 1.852.236 2.677.708.842.471 1.524 1.17 2.046 2.096.539.909.808 2.046.808 3.41Zm-4.015 0c0-.606-.127-1.12-.379-1.54a2.517 2.517 0 0 0-1.01-.96 2.965 2.965 0 0 0-1.389-.328c-.438 0-.867.11-1.288.328a2.555 2.555 0 0 0-1.011.934c-.269.421-.404.943-.404 1.566 0 .623.135 1.145.404 1.566.27.421.607.74 1.011.96.421.202.85.303 1.288.303.505 0 .968-.11 1.389-.329a2.516 2.516 0 0 0 1.01-.96c.252-.42.379-.934.379-1.54Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={-338.191}
        x2={475.861}
        y1={104}
        y2={141.327}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.502} stopColor="#172332" />
        <Stop offset={0.968} stopColor="#0D1E31" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="a">
        <Rect width={392} height={155} fill="#fff" rx={8} />
      </ClipPath>
      <Pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#d" transform="matrix(.00049 0 0 .00073 -.001 0)" />
      </Pattern>
      <Image
        id="d"
      />
    </Defs>
  </Svg>
);
export default CardImage2;