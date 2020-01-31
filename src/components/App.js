import React, { Component } from 'react';
import Madlib from '../containers/Madlib';

class Header extends Component {
  render() {
    return (
      <header>
        <section>
          <h1>Madlibs</h1>
          <h2>Fill out the fields below and click the button to load the madlib</h2>
        </section>
      </header>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <p>All writing is contributed by Alchemy Code School</p>
        </section>
      </footer>
    );
  }
}

export default function App() {
  return (  
    <>
      <Header />
      <Madlib />
      <Footer />
    </>
  );
}
