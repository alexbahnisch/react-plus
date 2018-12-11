"use strict"
import * as React from "react"
import * as ReactDOM from "react-dom"

import { Theme, ThemeProvider } from "../package/theme"
import { createElement } from "./utils"
import { App } from "./views/app"


import "./main.css"


ReactDOM.render(
  <ThemeProvider value={new Theme({})}>
    <App/>
  </ThemeProvider>,
  createElement("react-plus")
)
