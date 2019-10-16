/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUp } from '../../store/actions/authActions';

class SignUpAuth extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { handleSignUp } = this.props;
    e.preventDefault();
    handleSignUp(this.state);
  };

  renderComponent = () => {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Sign Up
            </button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return this.renderComponent();
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignUp: user => {
    dispatch(signUp(user));
  },
});

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  authError: state.auth.authError,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpAuth);

SignUpAuth.propTypes = {
  auth: PropTypes.object,
  handleSignUp: PropTypes.func,
  authError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
