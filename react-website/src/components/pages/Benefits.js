import React from 'react'
import { Grid } from "@material-ui/core"
import './Benefits.css'
const Benefits = () => {
   
  
    return (
      <Grid container spacing={4}  id={`benefits`}>
        <Grid item lg={12} md={12} xl={12} xs={12}>
          <h2 className='title'>BENEFITS</h2>
        </Grid>
  
        <Grid
          item
          lg={3}
          md={3}
          xl={3}
          xs={12}
          
        >
          <div className='item'>
            <i></i>
            <div className='itemContent'>
              <h3 className='subTitle'>
                <span>1</span>Consumers / Fans
              </h3>
              <p className='text'>
                Being able to invest and trade while streaming. Exclusive content and
                bonus system. Customized streaming. Invest directly in their
                favorite artists. Getting dividends and royalties payments.
              </p>
            </div>
          </div>
  
          <div className='item'>
            <i></i>
            <div className='itemContent'>
              <h3 className='subTitle'>
                <span>2</span>Labels and Event Organizers
              </h3>
              <p className='text'> 
                Lowest streaming charges in the industry. Financing trough fan
                base and the investment banking industry at a lower cost than
                traditional VC financing. Increase scouting base / reach any
                talent even in remote countries. New channel of monetizing
                existing Back Catalogues. Back office work optimization and data
                analytics. Simplified contracts. Tradable Royalties.
              </p>
            </div>
          </div>
        </Grid>
  
        <Grid
          item
          lg={3}
          md={3}
          xl={3}
          xs={12}
          
        >
          <div className='item'>
            <i></i>
            <div className='itemContent'>
              <h3 className='subTitle'>
              <span>3</span> Artists
              </h3>
              <p className='text'>
                Lowest streaming charges in the industry. Higher revenue
                percentage. Instant royalties (online, offline. Tradable
                Copyrights. Easy access to major distribution. Lower cost by
                direct financing from fan base and the investment banking
                industry.
              </p>
            </div>
          </div>
  
          <div className='item'>
            <i></i>
            <div className='itemContent'>
              <h3 className='subTitle'>
              <span>4</span> Providers / Distributors / Other
              </h3>
              <p className='text'>
                Direct participation in higher revenues. Diversity of backlogs.
                Real-time market management. Distribute, sell and collect from
                remote areas. Real-time market management. Tradable Royalties.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  };

    export default Benefits