import React from 'react'
import '../../App.css'
import Photo1 from './Photo1.png'
import Photo2 from './Photo2.png'
import './Advantages.css'
const Content = () => {
  
    return (
      <div className='background'>
        <div className='content'>
        <div id={`advantages`}>
          <h2 className='title'>Key competitive advantages</h2>
          <div className='text'>
            <p>
              The only existing full scale economy of music to include streaming,
              marketplace, news, initial investment in artist creation & careers
              &nbsp;
              <strong>(IRO- Initial Rights Offerings)</strong>, secondary trading
              of IRO’s. <strong>All in one app.</strong>
            </p>
          </div>
  
          <div className='text'>
            <p>
              Creating an ecosystem necessary for the proper interaction between
              &nbsp;
              <strong>
                labels, event organizers, artists & their fans at a global
                level.
              </strong>
            </p>
          </div>
  
          <div className='text'>
            <p>
              Using the latest industry trends: transparent{" "}
              <strong>Blockchain technology</strong>
              allowing creation and traceability of fractional royalties, thus
              creating a <strong>liquid & transparent market</strong> for
              fractional royalties.
            </p>
          </div>
  
          <div className='text'>
  
            <p>
              <strong>Integrating influencers.</strong>
            </p>
          </div>
  
          <div className='text'>

            <p>
              Integrating <strong>established artists</strong> as well as{" "}
              <strong>new artists.</strong>
            </p>
          </div>
  
          <div className='text'>
  
            <p>
              Contact with the <strong>key digital communication channels</strong>{" "}
              and live events venues: social media, websites, 3rd party online
              streaming platforms, movie platforms, & even competing ecosystems,
              as well as{" "}
              <strong>
                worldwide event locations as live events/performances.
              </strong>
            </p>
          </div>
  
          <div>
  
            <img className='bgPhoto' src={Photo1} alt="" />
  
            <div>
              <span className="span">Katastic</span>
              <p className='text'>
                will expand to include and support all{" "}
                <strong>
                  current or future components of the entertainment industry
                </strong>{" "}
                (i.e. gaming, sports, fashion & lifestyle, films, news) into{" "}
                <strong>a fully scaled economy.</strong>
              </p>
            </div>
  
            <img className='bgPhoto' src={Photo2} alt="" />
          </div>
        </div>
        </div>
      </div>
      
    );
  };
  
  export default Content;
  