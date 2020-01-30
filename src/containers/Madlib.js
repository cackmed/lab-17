import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    enteredword: {},
    words: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
    ;
    console.log(target.value);
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />}
        {showResult && <Result words={[]} closeResult={this.toggleResult} />}
      </>
    );
  }
}
