import * as React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import CallToActionWithAnnotation from "./CallToActionWithAnnotation";

ReactDOM.render(
  <ChakraProvider>
    <Navigation />
    <CallToActionWithAnnotation />
    <Footer />
  </ChakraProvider>,
  document.getElementById("root")
);
