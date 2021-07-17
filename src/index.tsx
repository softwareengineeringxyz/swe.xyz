import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import WithSubnavigation from "./WithSubnavigation";
import LargeWithAppLinksAndSocial from "./LargeWithAppLinksAndSocial";
import CallToActionWithAnnotation from "./CallToActionWithAnnotation";

ReactDOM.render(
  <ChakraProvider>
    <WithSubnavigation />
    <CallToActionWithAnnotation />
    <LargeWithAppLinksAndSocial />
  </ChakraProvider>,
  document.getElementById("root")
);
