import React, { Component } from 'react';
import Project from './Project';

class ProjectsList extends Component {
  render() {
    return (
      <section className="ProjectsList">
        <h3>PROJECTS</h3>
        {this.props.projects.map((project) => <Project project={project}/>)}
      </section>
    );
  }
}

export default ProjectsList;
