import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class ArtPortfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.arts.map(function (project) {
      let projectImage = "images/portfolio/" + project.image;

      return (
        <div key={id++} className="columns artPortfolio-item">
          <div className="item-wrap">
            <Zmage alt={project.title} src={projectImage} />
            <div style={{ textAlign: "center"}}> <strong>{project.title}</strong></div>
          </div>
        </div>
      );
    });

    return (
      <section id="artPortfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>I'am also a self-taught Artist.</h1>

              <div
                id="artPortfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default ArtPortfolio;
