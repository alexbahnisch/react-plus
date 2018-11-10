"use strict"
import * as React from "react"

import { Marquee, MaskImage } from "../../package"

// @ts-ignore
import CSS = require("./app.css")


interface IProps {
}


export class App extends React.Component<IProps> {

  public render(): JSX.Element {
    return (
      <div className={CSS.root} style={{background: "black"}}>
        <Marquee style={{margin: 12, height: 100, width: 100}}>
          <MaskImage marquee src="img/laptop.png" style={{background: "red", height: 100, width: 100}}/>
        </Marquee>
        <MaskImage inline marquee src="img/laptop.png" style={{background: "red", margin: 12, height: 100, width: 100}}/>
        <MaskImage inline src="img/laptop.png" style={{background: "red", margin: 12, height: 100, width: 100}}/>
      </div>
    )
  }
}
