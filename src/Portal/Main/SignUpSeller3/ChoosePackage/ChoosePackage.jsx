import React from 'react';
import PropTypes from 'prop-types';

const ChoosePackage = ({ onSelect }) => (
  <div>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">SignUp Seller</h1>
      <p className="lead">Quickly build an effective pricing table for your potential
        buyers with this Bootstrap example. It&apos;s built with default Bootstrap
        components and utilities with little customization.
      </p>
    </div>

    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$97 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button onClick={onSelect(97)} type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$197 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button onClick={onSelect(197)} type="button" className="btn btn-lg btn-block btn-outline-primary">Get started</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$297 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button onClick={onSelect(297)} type="button" className="btn btn-lg btn-block btn-outline-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ChoosePackage.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default ChoosePackage;
