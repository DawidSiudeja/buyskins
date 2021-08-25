import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './navbar.css'
import logo from './buyskins-white.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div class="panel1">
      <div className={classes.root}>
        <div class="pagewidth">
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <div class="small-container">
                <div class="logo_container">
                  <Link to='/'><img src={logo} alt="Logo"/></Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div class="small-container">
                <div class="navbar-container">
                  <nav class="navbar">
                    <ul>
                      <div>
                        <li><Link to='/'>Strona główna</Link><div class="line"></div></li>
                      </div>
                      <div>
                        <li><Link to='/contact'>Kontakt</Link><div class="line"></div></li>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div class="small-container">
                <div class="btn-container">
                  <div class="account">
                  <div class="main-btn sign-in">
                    <Button variant="contained" color="primary" >
                      Logowanie
                    </Button>
                  </div>
                    <div class="main-btn sign-up">
                      <Button variant="contained" color="primary">
                        Rejestracja
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

