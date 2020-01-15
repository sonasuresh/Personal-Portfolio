import React, { Component } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';



export class about extends Component {
    render() {
        return (
  <div className="margin-down">
  <div className="container">
    <div className="row">
      <div className=" col-12 col-md-7">
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-12 pt-5">
          <h3>Hi There!</h3>
          <p className="font">
            I am a web developer.I create professional websites using best
            practice accessibility.Had experience in structuring,developing and
            implementing interactive websites.
          </p>
          <br/><br/>
          <div class="row">
            <div class="col">
              <dt>
                <AccountCircleIcon />
                &nbsp;Name
              </dt>
              <dd>Sona S</dd>
              <dt>
                <GitHubIcon />
                &nbsp;GitHub
              </dt>
              <dd><a href="https://github.com/sonasuresh" style={{color: "rgb(0,0,0)"}}>@sonasuresh</a></dd>
            </div>
            <div class="col">
              <dt>
                <FavoriteIcon />
                &nbsp;Proficiency
              </dt>
              <dd>Full Stack Developer</dd>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5 margin-down">
        <br />
        HTML,CSS
        <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            class="progress-bar bg-dark"
            style={{ width: `${98}%`, height: "10px" }}
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div><br/>
        MEAN Stack
         <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            class="progress-bar bg-dark"
            style={{ width: `${90}%`, height: "10px" }}
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div><br/>
        MERN Stack
        <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            class="progress-bar bg-dark"
            style={{ width: `${90}%`, height: "10px" }}
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div><br/>
        MySQL
        <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            class="progress-bar bg-dark"
            style={{ width: `${85}%`, height: "10px" }}
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div><br/>
        JavaScript
        <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            class="progress-bar bg-dark"
            style={{ width: `${80}%`, height: "10px" }}
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div><br/>
         C# .NET
        <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            class="progress-bar bg-dark"
            style={{ width: `${50}%`, height: "10px" }}
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div><br/>
         Python
        <div className="progress" style={{ height: "6px" }}>
          <div
            className="progress-bar"
            class="progress-bar bg-dark"
            style={{ width: `${60}%`, height: "10px" }}
            role="progressbar"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

      </div>

    </div>
  </div>
</div>
           
           
        )
    }
}

export default about
