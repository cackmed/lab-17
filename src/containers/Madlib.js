import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
    words: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult })
    );

  handleSubmit = event => {
    event.preventDefault();
    
    this.setState({
      words:[this.state[1], this.state[2], this.state[3], this.state[4], this.state[4], this.state[5], this.state[6], this.state[7], this.state[8], this.state[9], this.state[10], this.state[11], this.state[12]]
    });

    console.log(this.state);
    console.log(this.state.words);

    this.toggleResult();
  }

  render() {
    const { showResult, words } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />}
        {showResult && <Result words={words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
