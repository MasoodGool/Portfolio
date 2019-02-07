import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../images/Avatar.JPG";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={avatar} alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1 style={{ width: "100%", margin: "auto", marginBottom:"50px" ,height:"100px" }}>Full Stack Web Developer </h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>
              <Grid className="social-links" >
              <Cell col={4}>
                              <a
                  href="https://www.linkedin.com/in/masood-gool-75017790/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </Cell>
              <Cell col={4}>
                {/* GitHub */}
                <a
                  href="https://github.com/masoodgool"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
</Cell>
<Cell col={4}>

                {/* freeCodeCamp */}
                <a
                  href="https://www.freecodecamp.org/masoodgool"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
</Cell>




                </Grid>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
