import React, { Component, createContext } from 'react';
import Header from './Header';
import Info from './Info';
import DynamicList from './DynamicList';
import ProjectsList from './ProjectsList';
import { person } from '../data.js';
import '../styles/app.css';

const LanguageContext = createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "en"
    };
  }

  render() {
    return (
      <LanguageContext.Provider value={person[this.state.language]}>
        <div>
          <LanguageContext.Consumer>
            {person => {
              return (
                <div className="App">
                <div className="App__buttons">
                  <button onClick={() => this.setState({ language: "en" })}>
                    {person.btnEnLabel}
                  </button>
                  <button onClick={() => this.setState({ language: "ukr" })}>
                    {person.btnUkrLabel}
                  </button>
                </div>
                <Header 
                  name={person.name}
                  description={person.description}
                  image={person.image}
                />
                <Info person={person}/>
                <main className="App__main">
                  <DynamicList items={person.skills} label={'SKILLS'}/>
                  <ProjectsList projects={person.projects}/>
                </main>
              </div>
              )
            }}
          </LanguageContext.Consumer>
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;
