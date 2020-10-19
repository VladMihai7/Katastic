import React from 'react'
import '../App.css'
import './HeroSection.css'
import {Grid} from '@material-ui/core'
function HeroSection() {
  return (
    <div>
    <div className='hero-container'>
      <h1>A GLOBAL MUSIC INDUSTRY FULL SCALE ECONOMY</h1>
      <p>Organize a decentralized industry.</p>
    </div>
    <div className='contact-info'>
    <h2 className='title'>GET IN TOUCH</h2>
    <Grid container justify="center" spacing={8} >
          <Grid item lg={4} md={4} xl={4} xs={12}>
            <div className='pinkBox'>
              <h3>Or write directly to us here</h3>
              <ul>
                <li>Dragos Stanescu – C.E.O.</li>
                <li>Phone: +40722.500.307</li>
                <li className='ct1'>
                  E-mail: dragos.Stanescu@katastic-music.com
                </li>

                <li>Keith Fletcher – Director</li>
                <li>Phone: +1 (912) 328-9440</li>
                <li>E-mail: kfletcher@katastic-music.com</li>
              </ul>
            </div>
          </Grid>
          </Grid>
    </div>
    </div>
  );
}

export default HeroSection;
