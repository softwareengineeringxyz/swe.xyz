import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import ArticleList from "./ArticleList"

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ArticleList />
  </React.StrictMode>,
  document.getElementById("root"),
)