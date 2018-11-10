"use strict"
import * as React from "react"
import * as ReactDOM from "react-dom"

import { createElement } from "./utils"
import { App } from "./views/app"

import "./main.css"


ReactDOM.render(
  <App/>,
  createElement("react-plus")
)
