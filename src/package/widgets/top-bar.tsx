"use strict"
import * as classNames from "classnames"
import * as React from "react"

import { ThemeType } from "../core"

// @ts-ignore
import CSS = require("./top-bar.css")


interface IProps {
  themeType: ThemeType
}


export class TopBar extends React.PureComponent<IProps> {
  public static defaultProps = {
    themeType: "light"
  }

  public render() {
    return (
      <header className={classNames(CSS.root, this.props.themeType === "dark" ? CSS.dark : CSS.light)}/>
    )
  }
}
