"use strict"
import * as classNames from "classnames"
import * as React from "react"

// @ts-ignore
import CSS = require("./mask-image.css")


interface IProps {
  id?: string
  className?: string
  inline: boolean
  style?: React.CSSProperties
  src: string
}


export class MaskImage extends React.PureComponent<IProps> {
  public static defaultProps = {
    inline: false,
    marquee: false
  }

  public render() {
    const {id, className, inline, src, style} = this.props

    return (
      <div
        id={id}
        className={classNames(
          CSS.root,
          inline ? CSS.inline : CSS.block,
          className
        )}
        style={{...style,
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`
        }}
      />
    )
  }
}
