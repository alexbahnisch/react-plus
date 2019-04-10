"use strict"
import * as classNames from "classnames"
import * as React from "react"

import { Children, ThemeType } from "../core"

// @ts-ignore
import CSS = require("./top-bar.css")

interface IProps {
  children?: Children
  themeType: ThemeType
}

export class TopBar extends React.PureComponent<IProps> {
  public static defaultProps = {
    themeType: "light"
  }

  public render() {
    const { children, themeType } = this.props
    return (
      <header className={classNames(CSS.root, themeType === "dark" ? CSS.dark : CSS.light)}>
        {children}
      </header>
    )
  }
}
