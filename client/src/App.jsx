import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
   
    fetch('http://localhost:5000/messages')
      .then((res) => res.json())
      .then((data) => {setMessages(data)
        console.log(data)
      })
      .catch((error) => console.error('Error fetching messages:', error));
  }, []);

  const handleMessageSubmit = (newMessage) => {

    fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    })
      .then((res) => res.json())
      .then((data) => setMessages([...messages, data]))
      .catch((error) => console.error('Error submitting message:', error));
  };

  return (
    <div>
      <Form onSubmit={handleMessageSubmit} />
      <List messages={messages} />
    </div>
  );
}

export default App;
