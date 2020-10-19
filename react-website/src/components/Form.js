import React from 'react'
import {Button,TextField} from '@material-ui/core'
import './Form.css'


function Form() {
    return (
      
        <div>
  
            <section className="contact-form">
            <div>
            <TextField
            id="username"
            label="Username"
            variant="outlined"
            />
            </div>
            <div className="email-input">
            <TextField
            id="email"
            label="Email"
            variant="outlined"
            />
            </div>
            <div className="message-input"> 
            <TextField
            id="message"
            label="Message"
            variant="outlined"
            />
            </div>
            <div>
              <Button
                className="contactButton"
                color="primary"
                size="large"
                type="submit"
                variant="contained"
                
              >
                Send
              </Button>
              </div>
            </section>
            
        </div>
        
    )
}

export default Form
