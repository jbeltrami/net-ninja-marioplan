import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// components
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  const buildProjects = items => {
    if (items)
      return items.map(project => (
        <Link to={`/project/${project.id}`} key={project.id}>
          <ProjectSummary project={project} />
        </Link>
      ));
  };

  return <div className="project-list section">{buildProjects(projects)}</div>;
};

export default ProjectList;
ProjectList.propTypes = {
  projects: PropTypes.array,
};
