import React from 'react';

const List = ({ messages }) => {
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
