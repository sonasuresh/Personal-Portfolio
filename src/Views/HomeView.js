import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import Typist from 'react-typist';


export default function HomeView() {
   
        return (
                <div className="intro route full-width" style={{ background: 'black' }}>
                  <div style={{width:"100%",display:"flex",justifyContent:"center"}} >
                      <Image src={require("../images/6.png")} roundedCircle className="intro-img-shadow" style={{marginTop: '5%'}} alt="Profile" width="180px" height="200px"/>
                    </div>
                    <br/>
                    <div className="no-space" style={{marginTop: '3%'}}>
                      <center><h2 className="lead font-size-20 display-4 text-white mb-4">Hi, I'm Sona</h2></center>
                        <Typist cursor={{element: ''}}>
                          <Typist.Delay ms={500} style={{display: 'none'}} cursor={{element: ''}} />
                          <center><b className="lead font-size-20 display-5 text-white mb-4">
                                I'M A FULL STACK DEVELOPER
                            </b></center><br/>
                          <Typist count={24} delay={200} style={{display: 'none'}} cursor={{element: ''}}/>
                          <b className="lead font-size-20 display-5 text-white mb-4">
                            <center>I CREATE AWESOME STUFF</center>
                        </b>
                        </Typist>
                    

            </div>

            </div>

        )
}


