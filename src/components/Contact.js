import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className="Contact">
         <h3>CONTACT</h3>
         {this.props.contacts.map((contact) => <div>
                <h4>{contact.name}</h4>
                <p>{contact.value}</p>
            </div>)}  
      </section>
    );
  }
}

export default Contact;
