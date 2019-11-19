import React from "react";
import classes from "./Layout.module.css";
import Aux from '../../Containers/HOC/Aux';
import Toolbar from '../Navigation/ToolBar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const Layout= function(props){
  return(
      <Aux>

          <Toolbar/>
          <SideDrawer/>
            <main className= {classes.content}> {props.children}</main>
      </Aux>
        )

    
}

export default Layout;