"use strict";
import * as React from "react"
import {Component} from "react"

// @ts-ignore
import CSS = require("./app.css");


export interface AppProps {
  children: string;
}

export class App extends Component<AppProps, undefined> {

  render(): JSX.Element {
    const {children} = this.props;

    return (
      <div className={CSS.app}>
        {children}
      </div>
    )
  }
}
