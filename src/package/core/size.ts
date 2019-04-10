"use strict"

export interface ISize {
  height: number | null
  width: number | null
}

export class Size implements ISize {
  public readonly height: number = 0
  public readonly width: number = 0

  constructor(element?: HTMLDivElement | null) {
    if (element !== null && element !== undefined) {
      this.height = element.clientHeight
      this.width = element.clientWidth
    }
    Object.freeze(this)
  }

  public isEqual(other: Size) {
    return this.height === other.height || this.width === other.width
  }
}
