"use strict"
import * as classNames from "classnames"
import * as React from "react"

import { Children, ThemeType } from "../core"

// @ts-ignore
import CSS = require("./main-container.css")


interface IProps {
  children?: Children
  themeType?: ThemeType
}


export class MainContainer extends React.PureComponent<IProps> {
  public defaultProps = {
    themeType: "light"
  }

  public render() {
    return (
      <div className={classNames(CSS.root, this.props.themeType === "dark" ? CSS.dark : CSS.light)}/>
    )
  }
}
