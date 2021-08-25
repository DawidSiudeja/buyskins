import React from "react";
import logo from '../../images/buyskins-white.png'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div class="footer">
      <div class="pagewidth">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div class="imgfooter"><Link to='/'><img src={logo} alt="Logo"/></Link></div>
          </Grid>
          <Grid item xs={3}>
            <div class="linksfooter">
              <h3>Title</h3>
              <ul>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={3}>
          <div class="linksfooter">
              <h3>Title</h3>
              <ul>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">teststst</a></li>
                <li><a href="">test</a></li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={3}>
          <div class="linksfooter">
              <h3>Title</h3>
              <ul>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
                <li><a href="">test</a></li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;