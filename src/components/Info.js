import React, { Component } from 'react';
import Contact from './Contact';
import DynamicList from './DynamicList';
import '../styles/info.css';

class Info extends Component {
  render() { 
    const { person } = this.props;  
    return (
      <aside className="Info">
        <section>
          <h3 className="Info__heading">SUMMARY</h3>
          <p>{person.summary}</p>   
        </section>
        <Contact contacts={person.contact}/>
        <section>
          <h3 className="Info__heading">EDUCATION</h3>
          <p>{person.education.university}</p>
          <time>{person.education.year}</time>
        </section>
        <DynamicList items={person.internship} label={'INTERNSHIP'}/>
      </aside>
    );
  }
}

export default Info;
