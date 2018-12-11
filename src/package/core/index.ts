"use strict"
import { ReactChild } from "react"

export type Children = ReactChild | ReactChild[] | (ReactChild | ReactChild[])[]
export type ThemeType = "dark" | "light"
