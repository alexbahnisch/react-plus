"use strict"
import * as classNames from "classnames"
import * as React from "react"

import { Children, ThemeType } from "../core"

// @ts-ignore
import CSS = require("./side-bar.css")


interface IProps {
  children?: Children
  themeType: ThemeType
}


export class SideBar extends React.PureComponent<IProps> {
  public static defaultProps = {
    themeType: "light"
  }

  public render() {
    const {children, themeType} = this.props
    return (
      <div className={classNames(CSS.root, themeType === "dark" ? CSS.dark : CSS.light)}>
        {children}
      </div>
    )
  }
}
