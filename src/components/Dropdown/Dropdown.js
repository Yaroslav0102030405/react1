import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
  state = { visible: false };

  //   showMenu = () => {
  //     this.setState({ visible: true });
  //   };

  //   hideMenu = () => {
  //     this.setState({ visible: false });
  //   };

  toggleMenu = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.showMenu}>Показати</button>
        <button onClick={this.hideMenu}>Сховати</button> */}
        <button
          // onClick={this.toggleMenu}
          onMouseOut={this.toggleMenu}
        >
          {this.state.visible ? 'Приховати' : 'Показати'}
        </button>
        {this.state.visible && <div>Випадающе меню</div>}
      </div>
    );
  }
}

export default Dropdown;
