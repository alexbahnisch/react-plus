"use strict"
import * as classNames from "classnames"
import * as React from "react"

// @ts-ignore
import CSS = require("./mask-image.css")

interface IProps {
  id?: string
  className?: string
  fitContainer: boolean
  inline: boolean
  style?: React.CSSProperties
  src: string
}

export class MaskImage extends React.PureComponent<IProps> {
  public static defaultProps = {
    fitContainer: false,
    inline: false
  }

  public render() {
    const { id, className, fitContainer, inline, src, style } = this.props

    return (
      <div
        id={id}
        className={classNames(
          CSS.root,
          fitContainer ? CSS.fitContainer : undefined,
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
