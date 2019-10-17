import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  const { onSignOut, profile } = props;

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/uploads">Uploads</NavLink>
      </li>
      <li>
        <a
          role="button"
          tabIndex={0}
          onKeyPress={onSignOut}
          onClick={onSignOut}
        >
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  onSignOut: () => {
    dispatch(signOut());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);

SignedInLinks.propTypes = {
  onSignOut: PropTypes.func,
  profile: PropTypes.object,
};
