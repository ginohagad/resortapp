import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, Button, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


const Header = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    drawerIsOpen: false,
  });


  // NOTE: Need to complete "Temporary Drawer" (Material UI)

  // https://stackoverflow.com/questions/48780908/combine-an-appbar-with-a-drawer-in-material-ui


  return (
    <div className="header">
      <AppBar position="static" color="primary">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
					  Resort App	
					</Typography>
          <Hidden xsDown>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/services">Services</Button>
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setState({ drawerIsOpen: true })} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
				</Toolbar>
			</AppBar>
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={}
      >
        <div className={classes.drawerInner}>
          <p>drawer content</p>
        </div>
      </Drawer>
    </div>
  );
}


export default Header;
