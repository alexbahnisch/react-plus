"use strict"
import * as React from "react"

import { ScrollContainer } from "../../package/scroll/scroll-container"

// @ts-ignore
import CSS = require("./scroll-container-view.css")


const GRID_SIZE = 20


export class ScrollContainerView extends React.Component {

  public renderRow() {
    const children = []

    for (let rowIndex = 0; rowIndex < GRID_SIZE; rowIndex++) {
      children.push(this.renderCol(rowIndex))
    }

    return children
  }

  public renderCol(key: number) {
    const children: JSX.Element[] = []

    for (let colIndex = 0; colIndex < GRID_SIZE; colIndex++) {
      children.push(
        <div key={colIndex}
             style={{margin: 0, width: 50, height: 50, border: "1px solid black", boxSizing: "border-box", display: "inline-block", verticalAlign: "bottom"}}/>
      )
    }

    return (
      <div key={key} style={{margin: 0, display: "block", width: 1000, height: 50, verticalAlign: "bottom"}}>
        {children}
      </div>
    )
  }

  public render(): React.ReactNode {
    return (
      <div className={CSS.root}>
        <ScrollContainer style={{height: 500, width: 500, border: "1px solid black"}}>
          {this.renderRow()}
        </ScrollContainer>
      </div>
    )
  }
}
