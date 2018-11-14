"use strict"
// @ts-ignore
import CSS = require("./spacing.css")

export enum SpacingTypes {
  none,
  xSmall,
  small,
  regular,
  large,
  xLarge
}

export function getSpacingClassName(spacingType: SpacingTypes): string {
  switch (spacingType) {
    case SpacingTypes.xSmall:
      return CSS.xSmall

    case SpacingTypes.small:
      return CSS.small

    case SpacingTypes.regular:
      return CSS.regular

    case SpacingTypes.large:
      return CSS.large

    case SpacingTypes.xLarge:
      return CSS.xLarge

    case SpacingTypes.none:
    default:
      return ""
  }
}
