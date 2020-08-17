import React from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Inbox from '../components/Inbox';
  import Sent from '../components/Sent';
  import Deleted from '../components/Deleted'
  import Header from '../components/Header'
  import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
  const drawerWidth = 240;

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex"
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0
      },
      drawerPaper: {
        width: drawerWidth
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
      }
    })
  );

const Content = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar}>
            <Header/> 
            <Switch>
                <Route exact path="/home">
                    <Inbox />
                </Route>
                <Route path="/sent">
                    <Sent />
                </Route>
                <Route path="/deleted">
                    <Deleted />
                </Route>
            </Switch>
        </div>
    </main>
    )
}
export default Content