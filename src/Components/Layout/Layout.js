import React from "react";
import classes from "./Layout.module.css";
import Aux from '../../Containers/HOC/Aux';
const Layout= function(props){
  return(
      <Aux>
            <div className={classes.Content}> ToolBar SIdeDrawer </div>
            <main> {props.children}</main>
      </Aux>
        )

    
}

export default Layout;