"use strict"
import * as classNames from "classnames"
import * as React from "react"

import { SpacingTypes, ThemedComponentProps, withTheme } from "../theme"

// @ts-ignore
import * as CSS from "./check-box.css"


// noinspection TsLint
interface _IProps {
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


type IProps = _IProps & ThemedComponentProps


// noinspection TsLint
class _CheckBox extends React.PureComponent<IProps> {
  public static displayName = "CheckBox"
  public static defaultProps = {
    disable: false
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event, event.target.checked)
  }

  public renderLabel() {
    const {label, spacing, theme} = this.props
    if (!label) {
      return null
    }

    return (
      <label className={classNames(CSS.label, theme.getSpacingClassName(spacing))}>
        {label}
      </label>
    )
  }

  public render() {
    const {id, name, className, checked, disable, spacing, style, theme} = this.props

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export const CheckBox = withTheme<_IProps>(_CheckBox)
