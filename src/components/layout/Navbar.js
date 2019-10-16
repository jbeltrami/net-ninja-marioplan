import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = props => {
  const { auth, profile } = props;

  const renderLinks = () => {
    if (!auth.uid) return <SignedOutLinks />;
    return <SignedInLinks profile={profile} />;
  };

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {renderLinks()}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};

export default connect(mapStateToProps)(Navbar);

Navbar.propTypes = {
  auth: PropTypes.object,
  profile: PropTypes.object,
};
