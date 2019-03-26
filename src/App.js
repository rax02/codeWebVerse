import React, { Component } from 'react';
import './App.css';
import Top from './Top/Top';
import Mid from './Mid/Mid';
import Bottom from './Bottom/Bottom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ['Home', 'Learn', 'Assets', 'Guiders', 'Tools', 'Articles', 'Community', 'Search', 'SignInPage', 'Dashboard'],
      currentPage: 'Learn',
      signedIn: 'false'

    };



  }

  togglePage = (x) => {
    this.setState({ currentPage: x })
  }




  render() {

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <div className="App">

        <Top togglePage={this.togglePage} currentPage={this.state.currentPage} signedIn={this.state.signedIn} />
        <Mid currentPage={this.state.currentPage} />


        <Bottom />
      </div>

    );

    // return React.createElement('div',null,'hi i\'m here');
  }
}

export default App;
