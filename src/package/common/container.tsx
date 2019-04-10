"use strict"
import * as classNames from "classnames"
import * as React from "react"

// @ts-ignore
import CSS = require("./container.css")

interface IProps {
  id?: string
  children: React.ReactNode | React.ReactNode[]
  className?: string
  inline: boolean
  style?: React.CSSProperties
}

export class Container extends React.PureComponent<IProps> {
  public static defaultProps = {
    inline: false
  }

  public render(): React.ReactNode {
    const { id, children, className, inline, style } = this.props

    return (
      <div id={id} style={style} className={classNames(
        inline ? CSS.inline : CSS.block,
        className
      )}>
        {children}
      </div>
    )
  }
}
