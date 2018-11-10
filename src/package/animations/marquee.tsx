"use strict"
import * as classNames from "classnames"
import * as React from "react"

import { Wrapper, WrapperChild } from "../common/wrapper"

// @ts-ignore
import CSS = require("./marquee.css")


interface IProps {
  id?: string
  className?: string
  inline: boolean
  style?: React.CSSProperties
  children: WrapperChild
}


export class Marquee extends React.PureComponent<IProps> {
  public static defaultProps = {
    inline: false
  }

  public render() {
    const {id, className, inline, style, children} = this.props

    return (
      <div
        id={id}
        className={classNames(
          CSS.root,
          inline ? CSS.inline : CSS.block,
          className
        )}
        style={style}
      >
        <Wrapper className={CSS.child1}>
          {children}
        </Wrapper>
        <Wrapper className={CSS.child2}>
          {children}
        </Wrapper>
      </div>
    )
  }
}
