import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange, onClick }) => (
  <>
    <form onSubmit={onSubmit}>
      <input type="text" name="1" placeholder="adjective" onChange={onChange} />
      <input type="text" name="2" placeholder="noun" onChange={onChange} />
      <input type="text" name="3" placeholder="verb, past tense" onChange={onChange} />
      <input type="text" name="4" placeholder="adverb" onChange={onChange} />
      <input type="text" name="5" placeholder="adjective" onChange={onChange} />
      <input type="text" name="6" placeholder="noun" onChange={onChange} />
      <input type="text" name="7" placeholder="noun" onChange={onChange} />
      <input type="text" name="8" placeholder="adjective" onChange={onChange} />
      <input type="text" name="9" placeholder="verb" onChange={onChange} />
      <input type="text" name="10" placeholder="adverb" onChange={onChange} />
      <input type="text" name="11" placeholder="verb, past tense" onChange={onChange} />
      <input type="text" name="12" placeholder="adjective" onChange={onChange} />
      <button>Create Madlib</button>
      <button onClick={onClick}>Clear Inputs</button>
    </form>
  </>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Form;
