import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, Button, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core/';
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
}));


const Header = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    menuBtn: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // NOTE: Need to complete "Temporary Drawer" (Material UI)


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
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
				</Toolbar>
			</AppBar>
    </div>
  );
}


export default Header;
