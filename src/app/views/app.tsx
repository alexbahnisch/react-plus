"use strict"
import * as React from "react"

import { Link, Redirect, Route, RouteComponentProps, withRouter } from "react-router-dom"
import { MainContainer } from "../../package/widgets/main-container"
import { SideBar } from "../../package/widgets/side-bar"
import { TopBar } from "../../package/widgets/top-bar"
import { ScrollContainerView } from "./scroll-container-view"

// @ts-ignore
import CSS = require("./app.css")

interface IProps extends RouteComponentProps {
}

class BaseApp extends React.PureComponent<IProps> {

  public render(): React.ReactNode {
    const {location} = this.props

    let redirect = null
    if (location.pathname === "/") {
      redirect = <Redirect from={"/"} to={"/scroll"}/>
    }

    return (
      <div className={CSS.root}>
        <TopBar/>
        <SideBar>
          <Link to="/scroll">
            Scroll Container
          </Link>
        </SideBar>
        <MainContainer>
          {redirect}
          <Route path="/scroll" component={ScrollContainerView}/>
        </MainContainer>
      </div>
    )
  }
}

export const App = withRouter(BaseApp)
