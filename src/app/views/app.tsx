"use strict"
import * as React from "react"

import { Container, Marquee, MaskImage } from "../../package"
import { AccountLogin } from "../../package/icon/icon-base"
import { CheckBox } from "../../package/input/check-box"

// @ts-ignore
import CSS = require("./app.css")


interface IProps {
}


export class App extends React.Component<IProps> {

  public render(): React.ReactNode {
    return (
      <div className={CSS.root} style={{background: "black"}}>
        <Container>
          <Marquee inline style={{margin: 12, height: 100, width: 100}}>
            <MaskImage src="img/laptop.png" style={{background: "red", height: 100, width: 100}}/>
          </Marquee>
          <Marquee inline style={{margin: 12, height: 100, width: 100}}>
            <MaskImage fitContainer src="img/laptop.png" style={{background: "red", height: 100, width: 100}}/>
          </Marquee>
        </Container>
        <Container>
          <MaskImage inline src="img/laptop.png" style={{background: "red", margin: 12, height: 100, width: 100}}/>
          <MaskImage fitContainer inline src="img/laptop.png" style={{background: "red", margin: 12, height: 100, width: 100}}/>
        </Container>
        <div>
          <CheckBox checked={true} onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
            console.log(event, checked)
          }}/>
          <CheckBox label={"Whoop"} checked={false} onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
            console.log(event, checked)
          }}/>
        </div>
        <div>
          <AccountLogin size={28}/>
        </div>
      </div>
    )
  }
}
