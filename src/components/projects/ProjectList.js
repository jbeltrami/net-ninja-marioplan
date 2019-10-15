import React from 'react';
import PropTypes from 'prop-types';
// components
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  const buildProjects = items => {
    if (items)
      return items.map(project => (
        <ProjectSummary project={project} key={project.id} />
      ));
  };

  return <div className="project-list section">{buildProjects(projects)}</div>;
};

export default ProjectList;
ProjectList.propTypes = {
  projects: PropTypes.array,
};
