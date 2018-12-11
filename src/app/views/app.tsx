"use strict"
import * as React from "react"

import { TopBar } from "../../package/widgets/top-bar"

// @ts-ignore
import CSS = require("./app.css")
import { MainContainer } from "../../package/widgets/main-container"


interface IProps {
}

export class App extends React.Component<IProps> {

  public render(): React.ReactNode {
    return (
      <div className={CSS.root}>
        <TopBar/>
        <MainContainer>

        </MainContainer>
      </div>
    )
  }
}
