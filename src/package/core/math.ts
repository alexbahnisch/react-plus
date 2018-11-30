"use strict"

export function bound(value: number, lowerBound: number, upperBound: number) {
  if (lowerBound > upperBound) {
    throw new Error("'lowerBound' needs to be less that 'upperBound'")
  }

  if (value > upperBound) {
    value = upperBound
  }

  if (value < lowerBound) {
    value = lowerBound
  }

  return value
}


export function bound0(value: number, upperBound: number) {
  return bound(value, 0, upperBound)
}


export function bound01(value: number) {
  return bound(value, 0, 1)
}
