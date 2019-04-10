"use strict"
import * as classNames from "classnames"
import * as React from "react"

import { Children } from "../core"
import { bound0 } from "../core/math"
import { Size } from "../core/size"
import { HorizontalScrollbar } from "./horizontal-scrollbar"
import { VerticalScrollbar } from "./vertical-scrollbar"

// @ts-ignore
import CSS = require("./scroll-container.css")

interface IProps {
  id?: string
  children: Children
  className?: string
  scrollSpeed: number
  style?: React.CSSProperties
}

interface IState {
  childSize: Size,
  rootSize: Size,
  horizontalScroll: number
  verticalScroll: number
}

export class ScrollContainer extends React.PureComponent<IProps, IState> {
  public static displayName = "ScrollContainer"
  public static defaultProps = {
    scrollSpeed: 0.05
  }

  private readonly childRef = React.createRef<HTMLDivElement>()
  private readonly rootRef = React.createRef<HTMLDivElement>()

  constructor(props: IProps) {
    super(props)
    this.state = {
      childSize: new Size(),
      horizontalScroll: 0,
      rootSize: new Size(),
      verticalScroll: 0
    }
  }

  private getChildStyle(): React.CSSProperties {
    const { childSize, rootSize } = this.state
    const style = {
      left: 0,
      top: 0
    }

    if (childSize.width > rootSize.width) {
      style.left = -this.state.horizontalScroll / this.getHorizontalRatio()
    }

    if (childSize.height > rootSize.height) {
      style.top = -this.state.verticalScroll / this.getVerticalRatio()
    }

    return style
  }

  private getHorizontalLength() {
    return this.state.rootSize.width * this.getHorizontalRatio()
  }

  private getHorizontalLimit() {
    return (this.state.childSize.width - this.state.rootSize.width) * this.getHorizontalRatio()
  }

  private getHorizontalRatio() {
    return this.state.rootSize.width / this.state.childSize.width
  }

  private getVerticalLength() {
    return this.state.rootSize.height * this.getVerticalRatio()
  }

  private getVerticalLimit() {
    return (this.state.childSize.height - this.state.rootSize.height) * this.getVerticalRatio()
  }

  private getVerticalRatio() {
    return this.state.rootSize.height / this.state.childSize.height
  }

  private componentDidRender(): void {
    const childSize = new Size(this.childRef.current)
    const rootSize = new Size(this.rootRef.current)

    if (!this.state.childSize.isEqual(childSize) || !this.state.rootSize.isEqual(rootSize)) {
      this.setState({
        childSize,
        rootSize
      })
    }
  }

  private readonly handleHorizontalScroll = (scroll: number) => {
    this.setState({ horizontalScroll: scroll })
  }

  private readonly handleVerticalScroll = (scroll: number) => {
    this.setState({ verticalScroll: scroll })
  }

  private readonly handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const deltaX = event.deltaX
    const deltaY = event.deltaY

    this.setState({
      horizontalScroll: bound0(this.state.horizontalScroll + deltaX * this.props.scrollSpeed, this.getHorizontalLimit()),
      verticalScroll: bound0(this.state.verticalScroll + deltaY * this.props.scrollSpeed, this.getVerticalLimit())
    })
  }

  public componentDidMount(): void {
    this.componentDidRender()
    document.addEventListener("error", () => {console.log("Argh")})
  }

  public componentDidUpdate(): void {
    this.componentDidRender()
  }

  public render() {
    const { id, children, className, style } = this.props

    return (
      <div
        id={id}
        className={classNames(CSS.root, className)}
        ref={this.rootRef}
        style={style}
        onWheel={this.handleWheel}
      >
        <div className={classNames(CSS.container)} ref={this.childRef} style={this.getChildStyle()}>
          {children}
        </div>
        <HorizontalScrollbar
          hasVerticalScroll={true}
          length={this.getHorizontalLength()}
          limit={this.getHorizontalLimit()}
          value={this.state.horizontalScroll}
          onScroll={this.handleHorizontalScroll}
        />
        <VerticalScrollbar
          hasHorizontalScroll={true}
          length={this.getVerticalLength()}
          limit={this.getVerticalLimit()}
          value={this.state.verticalScroll}
          onScroll={this.handleVerticalScroll}
        />
      </div>
    )
  }
}
