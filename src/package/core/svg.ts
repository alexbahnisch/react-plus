"use strict"


export function polygon(...points: string[]): string {
  return `polygon(${points.join(", ")})`
}
