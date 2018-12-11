"use strict"
import { ReactChild } from "react"

export type Children = null | ReactChild | ReactChild[] | (null | ReactChild | ReactChild[])[]
export type ThemeType = "dark" | "light"
