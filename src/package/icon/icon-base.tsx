"use strict"
import classNames from "classnames"
import * as React from "react"

// @ts-ignore
import * as CSS from "./icon-base.css"


type Children = JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[]
type Omit<Type, Key extends keyof Type> = Pick<Type, Exclude<keyof Type, Key>>


interface IProps {
  id?: string
  className?: string
  size: number
  style?: React.CSSProperties
  children: Children
}


export type IconProps = Omit<IProps, "children">


class IconBase extends React.PureComponent<IProps> {
  public static displayName = "IconBase"
  public static defaultProps = {
    size: 28
  }

  public render() {
    const {children, id, className, size} = this.props
    return (
      <svg
        id={id}
        className={classNames(CSS.root, className)}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 8 8">
        {children}
      </svg>
    )
  }
}


export function createSvgIcon(children: Children): (props: IconProps) => JSX.Element {
  return (props: IconProps) => (
    <IconBase {...props}>
      {children}
    </IconBase>
  )
}


export const AccountLogin = createSvgIcon(
  <path d="M3 0v1h4v5h-4v1h5v-7h-5zm1 2v1h-4v1h4v1l2-1.5-2-1.5z"/>
)
