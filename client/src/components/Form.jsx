import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
