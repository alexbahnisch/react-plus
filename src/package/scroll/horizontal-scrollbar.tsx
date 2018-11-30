"use strict"
import * as React from "react"

import { bound, bound0 } from "../core/math"
import { polygon } from "../core/svg"

// @ts-ignore
import CSS = require("./horizontal-scrollbar.css")


const barWidth = 10
const gap = 2


interface IProps {
  hasVerticalScroll: boolean
  length: number
  limit: number
  value: number

  onScroll(scroll: number): void
}


export class HorizontalScrollbar extends React.PureComponent<IProps> {
  public static defaultProps = {
    hasHorizontalScroll: false,
    scrollSpeed: 0.05
  }

  private initialPosition: number | null = null

  private getStyle() {
    const {value, length, limit} = this.props
    let clipPath: string | undefined

    if (this.props.hasVerticalScroll) {
      clipPath = polygon(
        "0 0", "0 100%", "100% 100%",
        `100% ${bound0(value - limit + barWidth, barWidth)}px`,
        `calc(100% - ${bound0(value - limit + barWidth, barWidth)}px) 0`
      )
    }

    return {
      WebkitClipPath: clipPath,
      clipPath,
      left: value + gap,
      width: length - gap - gap - 1
    }
  }

  private handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    document.addEventListener("mouseup", this.handleMouseUp)
    document.addEventListener("mousemove", this.handleMouseMove)
    this.initialPosition = event.clientX - this.props.value
  }

  private handleMouseMove = (event: MouseEvent) => {
    event.stopPropagation()
    this.props.onScroll(bound(event.clientX - this.initialPosition!, 0, this.props.limit))
  }

  private handleMouseUp = (event: MouseEvent) => {
    event.stopPropagation()
    document.removeEventListener("mouseup", this.handleMouseUp)
    document.removeEventListener("mousemove", this.handleMouseMove)
    this.initialPosition = null
  }

  private handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  private handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    this.props.onScroll(bound(event.clientX, 0, this.props.limit))
  }

  public render() {
    if (this.props.limit > 0) {
      return (
        <div
          className={CSS.root}
          onClick={this.handleContainerClick}
        >
          <div
            className={CSS.child}
            style={this.getStyle()}
            onClick={this.handleClick}
            onMouseDown={this.handleMouseDown}
          />
        </div>
      )
    } else {
      return null
    }
  }
}
