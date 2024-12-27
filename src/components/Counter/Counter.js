import React from 'react';
import Value from './Value';
import Controls from './Controls';

export class Counter extends React.Component {
  static defaultPops = { initialValue: 0 };

  state = {
    // value: 0,
    value: this.props.initialValue,
  };

  onIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  onDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div>
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
        />
      </div>
    );
  }
}
