import React from "react";


import {Header,Footer} from '../../component/common'



class MainLayout extends React.Component {

  state = {}

  render() {
    let { } = this.state
    let { children } = this.props

    return (
      <>
        <Header />
        <body id="page-top">
        {children}
        </body>
        <Footer />
      </>
    )
  }
};

export default MainLayout
