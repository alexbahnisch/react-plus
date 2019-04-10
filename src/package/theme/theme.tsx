"use strict"
import * as React from "react"

import { getSpacingClassName, SpacingTypes } from "./spacing"
import { Types } from "./type"

interface ITheme {
  spacing?: SpacingTypes
  type?: Types
}

export class Theme implements ITheme {
  public readonly spacing: SpacingTypes
  public readonly type: Types

  constructor(theme: ITheme) {
    this.spacing = theme.spacing !== undefined ? theme.spacing : SpacingTypes.regular
    this.type = theme.type !== undefined ? theme.type : Types.light
    Object.freeze(this)
  }

  public getSpacingClassName(override?: SpacingTypes): string {
    if (override !== undefined) {
      return getSpacingClassName(override)
    } else {
      return getSpacingClassName(this.spacing)
    }
  }
}

interface IProps {
  theme: Theme
}

const context: React.Context<Theme> = React.createContext<Theme>(new Theme({}))
export const ThemeConsumer: React.Consumer<Theme> = context.Consumer
export const ThemeProvider: React.Provider<Theme> = context.Provider
export type ThemedComponentProps = IProps

export function withTheme<Props>(
  Component: React.ComponentClass<Props & IProps> | React.FunctionComponent<Props & IProps>
): React.FunctionComponent<Props> {
  return (props: Props) => (
    <ThemeConsumer>
      {(theme: Theme) => {
        return <Component theme={theme} {...props}/>
      }}
    </ThemeConsumer>
  )
}
