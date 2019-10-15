import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = props => {
  const { isEmpty } = props;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {isEmpty ? <SignedOutLinks /> : <SignedInLinks />}
      </div>
    </nav>
  );
};

const mapStateToProps = state => state.firebase.auth;

export default connect(mapStateToProps)(Navbar);

Navbar.propTypes = {
  isEmpty: PropTypes.bool,
};
