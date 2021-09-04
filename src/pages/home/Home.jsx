import React from "react";
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import slider from '../../images/how-to-trade.jpg'
import './home.css'
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Search from './search/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import awp from '../../images/awp-asiimov.png'
import m4a4 from '../../images/m4a4-space.png'
import redline from '../../images/awp-redline.png'
import knife from '../../images/m9-bayonet-tt.png'
import Swal from 'sweetalert2'


Swal.fire({
  title: '',
  html:
    '<div class="modal">' +
      '<div class="left"><img src="/static/media/awp-asiimov.ebca7f5d.png"><br><div class="title"></div></div>' +
      '<div class="right" style="text-align:left;"><div style="text-align:left;"><span class="weapon stattrak">StatTrak AWP</span><br> <span style="font-size:30px">ASIIMOV</span></div><br>' +
      '<div class="data"><span style="opacity:.8">Sprzedawca</span><span>XYZ</span></div><br>' +
      '<div class="data"><span style="opacity:.8">Cena</span><span>160,00 PLN</span></div><br>' +
      '<div class="data"><span style="opacity:.8">Stan</span><span>Po testach bojowych </span></div><br>' +
      '<div class="data" style="flex-direction: column;"><div style="display: flex;justify-content: space-between;"><span style="opacity:.8">Float</span><span>0.332fv </span></div> <div class="float" style="width:100%;"><div class="pointer"><div class="pointer"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg></div></div> <div class="colors"><div class="fn"></div><div class="mw"></div><div class="ft"></div><div class="ww"></div><div class="bs"></div></div></div></div>' +
      '</div>' +
    '</div>'
    ,
  showCancelButton: false,
  confirmButtonText: 'Kontakt ze sprzedawcą',
  
})


const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home">
      <div>
        <img src={slider} alt="Slider"/>
      </div>
      <div>
        <div className="pagewidth">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <div className="filters">
              <div>
                <h3>Cena</h3>
                <div className="price">
                  <TextField id="standard-basic" label="Min $" />
                  <TextField id="standard-basic" label="Max $" />
                </div>
              </div>
              <div>
                <h3>Type</h3>
                <div>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Noże <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Rękawice <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Pistolety <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> PMy <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Karabiny <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Karabiny snajpierskie <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Strzelba <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Karabin maszynowy <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Klucze <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Inne <br></br>
                </div>
              </div>
              <div>
                <h3>Wygląd</h3>
                <div>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Fabrycznie nowy <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Lekkie zużycie <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Po testach bojowych <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Mocne zużycie <br></br>
                  <Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} /> Po ciężkich walkach <br></br>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className="search_box">
              <Search />
            </div>
            <div className="content">
              
              <div className="row">
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <div className="item">
                      <div className="weapon stattrak">StatTrak AWP</div>
                      <div className="skin">Asiimov</div>
                      <div className="img"><img src={awp} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">160,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon pink">M4A4</div>
                      <div className="skin">Desolate space</div>
                      <div className="img"><img src={m4a4} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">30,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon knife">★ M9 bayonet</div>
                      <div className="skin">Tiger Tooth</div>
                      <div className="img"><img src={knife} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">1600,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon pink">AWP</div>
                      <div className="skin">Redline</div>
                      <div className="img"><img src={redline} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">60,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                </Grid>
              </div>

              <div className="row">
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <div className="item">
                      <div className="weapon stattrak">StatTrak AWP</div>
                      <div className="skin">Asiimov</div>
                      <div className="img"><img src={awp} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">160,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon pink">M4A4</div>
                      <div className="skin">Desolate space</div>
                      <div className="img"><img src={m4a4} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">30,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon knife">★ M9 bayonet</div>
                      <div className="skin">Tiger Tooth</div>
                      <div className="img"><img src={knife} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">1600,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon pink">AWP</div>
                      <div className="skin">Redline</div>
                      <div className="img"><img src={redline} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">60,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                </Grid>
              </div>

              <div className="row">
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <div className="item">
                      <div className="weapon stattrak">StatTrak AWP</div>
                      <div className="skin">Asiimov</div>
                      <div className="img"><img src={awp} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">160,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon pink">M4A4</div>
                      <div className="skin">Desolate space</div>
                      <div className="img"><img src={m4a4} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">30,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon knife">★ M9 bayonet</div>
                      <div className="skin">Tiger Tooth</div>
                      <div className="img"><img src={knife} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">1600,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon pink">AWP</div>
                      <div className="skin">Redline</div>
                      <div className="img"><img src={redline} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">60,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                </Grid>
              </div>

              <div className="row">
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <div className="item">
                      <div className="weapon stattrak">StatTrak AWP</div>
                      <div className="skin">Asiimov</div>
                      <div className="img"><img src={awp} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">160,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon pink">M4A4</div>
                      <div className="skin">Desolate space</div>
                      <div className="img"><img src={m4a4} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">30,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon knife">★ M9 bayonet</div>
                      <div className="skin">Tiger Tooth</div>
                      <div className="img"><img src={knife} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">1600,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                  <Grid item xs={3}>
                  <div className="item">
                      <div className="weapon pink">AWP</div>
                      <div className="skin">Redline</div>
                      <div className="img"><img src={redline} alt="Slider"/></div>
                      <div className="txt-content">     
                        <div className="price">60,00 PLN</div>
                        <div className="float">
                          <span>Field-Tested <span>0.332fv</span></span>
                          <div className="pointer"><ArrowDropDownIcon /></div>
                          <div className="colors">
                            <div className="fn"></div>
                            <div className="mw"></div>
                            <div className="ft"></div>
                            <div className="ww"></div>
                            <div className="bs"></div>
                          </div>
                        </div>
                          <Button variant="contained" color="primary">
                            Add to cart
                          </Button>
                      </div>
                    </div>  
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};







export default Home;



