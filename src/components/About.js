import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export class About extends Component {

  render() {
    return (
      <>
        <Header />
        <section className="table-toppings">
          <h1 className="table-title">About Parablues</h1>
          <article>
            
          </article>
          <div className="tbl-header">
          </div>
        </section>
        <Footer />
      </>
    )
  }
}


export default connect(null, {})(About)
