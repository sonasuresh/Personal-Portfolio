import React, { Component } from 'react'
import Spacer from 'react-add-space';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export class contact extends Component {
    render() {
        return (
            <div className="container">
                <center><h2>Contact Me</h2></center>
                <hr/>
                <br/>
                <div class="row">
                   <div class="col-12 col-md-4">
                      <div className="row" style={{width: '100%', }}>
                       <div className='col-2'>
                        <SettingsPhoneIcon style={{fontSize: '3rem'}}/>
                       </div>
                       <div className="col">
                        <dt><b>Mobile</b></dt>
                         <dd style={{marginBottom: '0px'}}>7502529435</dd>
                       </div>
                      </div>
                    </div>
                  <div class="col-12 col-md-4">
                    <div className="row" style={{width: '100%', }}>
                      <div className='col-2'>
                       <RoomIcon style={{fontSize: '3rem'}}/>
                      </div>
                      <div className="col">
                       <dt><b>Location</b></dt>
                        <dd style={{marginBottom: '0px'}}>Bangalore,India</dd>
                      </div>
                    </div>
                  </div> 
                  <div class="col-12 col-md-4">
                    <div className="row" style={{width: '100%', }}>
                      <div className='col-2'>
                       <EmailIcon style={{fontSize: '3rem'}}/>
                      </div>
                      <div className="col">
                       <dt><b>Email</b></dt>
                        <dd style={{marginBottom: '0px'}}>sona.suresh158@gmail.com</dd>
                      </div>
                    </div>
                  </div> 
                </div>     

            </div>
        )
    }
}

 

export default contact

