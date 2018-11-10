"use strict"
import * as classNames from "classnames"
import * as React from "react"


interface IChildProps {
  className?: string
  style?: React.CSSProperties
}


interface IProps {
  children: React.ReactElement<IChildProps>
  className?: string
  style?: React.CSSProperties
}


export type WrapperChild = React.ReactElement<IChildProps>


export class Wrapper extends React.PureComponent<IProps> {

  private getStyles() {
    return {
      ...this.props.style,
      ...this.props.children.props.style
    }
  }

  public render() {
    const {className, style, ...other} = this.props.children.props

    return React.cloneElement(React.Children.only(this.props.children),
      {
        className: classNames(this.props.className, className),
        style: this.getStyles(),
        ...other
      }
    )
  }
}
