import React from 'react';
import PropTypes from 'prop-types';

function ProjectDetails(props) {
  const { match } = props;
  const { id } = match.params;

  return (
    <div className="container project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            atque est, iste tenetur repellendus officiis eos expedita fugit,
            sequi aut ab quidem esse, perspiciatis iure quod. Vero eveniet ipsa
            officia.
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>2nd of September, 2AM</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

ProjectDetails.propTypes = {
  match: PropTypes.object,
};
