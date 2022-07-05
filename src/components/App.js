import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component {
  state = {
    navClosed: false,
  };
  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };
  render() {
    return (
      <div className={`container ${this.state.navClosed && 'nav-closed'}`}>
        <div className='main'>
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}
export default App;
