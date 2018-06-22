import React, { Component } from 'react';

class Project extends Component {
  render() {
    const {project} = this.props;
    return (
      <article className="Project">
        <h4>{project.name}, {project.role}</h4>
        <time>{project.date}</time>
        <p>{project.description}</p>
      </article>
    );
  }
}

export default Project;
