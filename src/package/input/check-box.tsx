"use strict"
import * as classNames from "classnames"
import * as React from "react"

import { SpacingTypes, ThemedComponentProps, withTheme } from "../theme"

// @ts-ignore
import * as CSS from "./check-box.css"

interface IBaseProps {
  id?: string
  label?: string
  name?: string
  className?: string
  checked: boolean
  disable?: boolean
  spacing?: SpacingTypes
  style?: React.CSSProperties

  onChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void
}

type IProps = IBaseProps & ThemedComponentProps

// noinspection TsLint
class BaseCheckBox extends React.PureComponent<IProps> {
  public static displayName = "CheckBox"
  public static defaultProps = {
    disable: false
  }

  private readonly handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event, event.target.checked)
  }

  public renderLabel() {
    const { label, spacing, theme } = this.props
    if (label === undefined) {
      return null
    }

    return (
      <label className={classNames(CSS.label, theme.getSpacingClassName(spacing))}>
        {label}
      </label>
    )
  }

  public render() {
    const { id, name, className, checked, disable, spacing, style, theme } = this.props

    return (
      <>
        <input
          id={id}
          name={name}
          className={classNames(CSS.root, className, theme.getSpacingClassName(spacing))}
          checked={checked}
          disabled={disable}
          style={style}
          type="checkbox"
          onChange={this.handleChange}
        />
        {this.renderLabel()}
      </>
    )
  }
}

export const CheckBox = withTheme<IBaseProps>(BaseCheckBox)
