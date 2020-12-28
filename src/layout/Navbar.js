import { fade, makeStyles, InputBase, AppBar, Toolbar, IconButton, Typography, Button, Select } from '@material-ui/core';
import { Apps, Menu, Today, Timeline, ViewColumn, Search, PostAdd } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSelect from '../components/LanguageSelect';
import Logout from 'lib/auth/Logout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  brand: {
    marginRight: theme.spacing(3),
  },
  iconButton: {
    marginRight: theme.spacing(2),
  },
  seperator: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  }
}));

export default function Navbar() {
  const classes = useStyles()
  const { t, i18n } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" className={classes.brand} component={NavLink} to="/">
          {t('brand')}
        </Button>
        <IconButton edge="start" className={classes.iconButton} color="inherit" aria-label="Home" component={NavLink} to="/">
          <Apps />
        </IconButton>
        <IconButton edge="start" className={classes.iconButton} color="inherit" aria-label="Calendar" component={NavLink} to="/calendar">
          <Today />
        </IconButton>
        <IconButton edge="start" className={classes.iconButton} color="inherit" aria-label="Timeline" component={NavLink} to="/timeline">
          <Timeline />
        </IconButton>
        <IconButton edge="start" className={classes.iconButton} color="inherit" aria-label="Seasons" component={NavLink} to="/seasons">
          <ViewColumn />
        </IconButton>
        <IconButton edge="start" className={classes.iconButton} color="inherit" aria-label="Post" component={NavLink} to="/post">
          <PostAdd />
        </IconButton>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Search Prophecies…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>

        <div className={classes.seperator}></div>

        <LanguageSelect />

        <div className={classes.authButtons}>
          <Button color="inherit" component={NavLink} to="/login">Login</Button>

          <Logout />
        </div>
      </Toolbar>
    </AppBar>
  )
}
