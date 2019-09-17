import React from 'react';
import NationalPark from './NationalPark'

class App extends React.Component {

  componentDidMount() {
    console.log("Component Mounted")
  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }

  render() {
    return (
      <div className="ui three column grid">
        <div className="ui cards national-parks">
          <NationalPark name="one"/>
          <NationalPark name="two"/>
                    <NationalPark name="two"/>
                              <NationalPark name="two"/>
        </div>
      </div>
    )
  }
}

export default App;
