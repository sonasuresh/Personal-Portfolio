import React, { Component } from 'react'

export class experiences extends Component {
  render() {
    return (

      <div className="container">
        <br />
        <br />
        <center><h2>My Experiences</h2></center>
        <hr />
        <br />
        <div class="row mt-3">
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3 text-center text-white">
            <div className="card">
              <img
                src={"https://www.tricog.com/images/logo.png"}
                className="card-img-top mt-3"
                alt="tricog"
                style={{
                  width: '80%',
                  alignSelf: 'center',
                  maxHeight: '700px',
                  maxWidth: '200px'
                }}
              />
              <div className="card-body">
                <h3 className="card-title">{"Tricog Health Services, Bangalore"}</h3>
                <h6 className="card-text text-dark">{"Full Stack Web Developer"}</h6>
                <p className="card-text text-dark text-align-justify">
                  "Worked on Tricog's In-House Software,
						<b className="text-dark">
                    TRIMP - Tricog Inventory Management Portal
						</b>{' '}
                  &nbsp; for Managing hardware devices produced by the
                  etc."
				</p>
                <p className="align-items-center mt-5 w-100">
                  <span className="ml-2 text-dark">
                    <b className="text-dark">From </b> {"June 2019"}{' '}
                    <b className="text-dark">To </b> {"July 2019"}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3 text-center text-white">
            <div className="card">
              <img
                src={"http://sqenta.com/wp-content/uploads/2018/12/Website.png"}
                className="card-img-top mt-3"
                alt="tricog"
                style={{
                  width: '80%',
                  alignSelf: 'center',
                  maxHeight: '550px',
                  maxWidth: '200px'
                }}
              />
              <div className="card-body">
                <h3 className="card-title">{"Sqenta Technologies, Coimbatore"}</h3>
                <h6 className="card-text text-dark">{"Full Stack Web Developer"}</h6>
                <p className="card-text text-dark text-align-justify">
                  Worked on Sqenta Technologies' new product{' '}
                  <b className="text-dark">Sloqe</b>. An Single Page Web
                  application designed using the MEAN Stack, (Specifically
                  Angular 7). This was aimed at colleges to provide a
                  quality assesment tool for their students.
				</p>
                <p className="align-items-center mt-4 w-100">
                  <span className="ml-2 text-dark">
                    <b className="text-dark">From </b> {"May 2019"}{' '}
                    <b className="text-dark">To </b> {"June 2019"}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-3 text-center text-white">
          <div className="card">
              <img
                src={"https://upload.wikimedia.org/wikipedia/en/8/87/Mepco_Schlenk_Engineering_College_logo.png"}
                className="card-img-top mt-3"
                alt="tricog"
                style={{
                  width: '50%',
                  alignSelf: 'center',
                  maxHeight: '90px',
                  maxWidth: '90px'
                }}
              />
              <div className="card-body">
                <h3 className="card-title">{"Mepco Schlenk Engineering College, Sivakasi"}</h3>
                <h6 className="card-text text-dark">{"Computer Science & Engineering Graduate"}</h6>
                <p className="card-text text-dark text-align-justify">
                  Got	immense experience on computer
                  programming.Worked on many projects as a full stack Developer.
				</p>
                <p className="align-items-center mt-1 w-100">
                  <span className="ml-2 text-dark">
                    <b className="text-dark">From </b> {"July 2016"}{' '}
                    <b className="text-dark">To </b> {"Present"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default experiences
