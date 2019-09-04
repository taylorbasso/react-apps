// Import React libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = 'Click Me!';

  return (
    <div>
      <label className="label" htmlFor="name">Enter Name:</label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};

// Show the react component
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
