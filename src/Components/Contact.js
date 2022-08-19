import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import ButtonMailto from "./ButtonMailto";


class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    const email = this.props.data.email;
    return (
      <section id="contact" >
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <h4 className="lead">{message}</h4>
              <a href="mailto:malikbouaoud1@icloud.com?">Write me an email</a>
        
              </div>
          </div>
        </Fade>

        <div className="row">

        
        </div>
      </section>
    );
  }
}

export default Contact;
