"use strict"


export interface ISize {
  height: number | null
  width: number | null
}


export class Size implements ISize {
  public readonly height: number
  public readonly width: number

  constructor(element?: HTMLDivElement | null) {
    this.height = !!element ? element.clientHeight : 0
    this.width = !!element ? element.clientWidth : 0
    Object.freeze(this)
  }

  public isEqual(other: Size) {
    return this.height === other.height || this.width === other.width
  }
}
