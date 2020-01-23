import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import globals from '../globals';
import Footer from './layouts/Footer';
import { activateAccount, resendToken } from '../actions/auth';

export class ActivateAccount extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
    }
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  };

  resendToken = () => {
    globals.createToast('Please wait', 1200, 'bottom-right');
    let payload = {
      email: localStorage.getItem('userEmail')
    }
    this.props.resendToken(payload);
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.state.code === '') {
       return globals.createToast('Enter activation code to continue', 3000, 'top');
    }
    globals.createToast('Please wait', 1200, 'bottom-right');
    let payload = {
      code: this.state.code,
      email: localStorage.getItem('userEmail')
    }
    this.props.activateAccount(this.props, payload);
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        <div className="coverr">
          <div className="container-fluid height-100 auth-bg">
            <div className="auth-logo">
              <Link to='/'>
                <img src={require('../assets/images/logo-white.png')} alt="logo" />
              </Link>
            </div>
            <div className="flex-itemss">
              <div className="col-lg-4 col-md-7 mx-auto">
                <h2 className="text-center auth-title">Activate Account</h2>
                <p className="mb-5 auth-subtitle">Enter activation code to continue</p>
                <form onSubmit={this.submitForm}>
                  <div className="row">
                    <div className="col-12 mr-auto mt-3">
                      <input type="text" name="code" placeholder="Enter activation code"
                        onChange={e => this.handleChange("code", e.target.value)} />
                      <button type="submit" onClick={this.submitForm} className="btn btn--primary type--uppercase mt-4">Submit</button>
                    </div>
                  </div>
                </form>
                <div className="auth-meta mt-4">Don't have the code? <Link to='/activate-account' onClick={this.resendToken}>Resend code</Link></div>
                <div className="auth-meta">Forgotten your password? <Link to="/forgot-password-init">Recover account</Link></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}


export default connect(null, { activateAccount, resendToken })(ActivateAccount)
