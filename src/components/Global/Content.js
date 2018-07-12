// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Content.css';

class Content extends Component {

/*
  constructor(){
    super();
    this.state = { 
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    };
    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInpuntChanged = this.handleInpuntChanged.bind(this);

  };

  componentDidMount(){
    // funcion que verifica si el component ya cargo
    this.setState({ count: 1});
  }

  handleCountClick(e){
    if (e.target.id === 'add'){
      this.setState( {count: this.state.count + 1});
    }
    else if (e.target.id === 'substract' && this.state.count > 0){
      this.setState( {count: this.state.count - 1});
    }
    else if (e.target.id === 'reset'){
      this.setState( {count: 0});
    };
  }

  handleResultClick(e){
    this.setState({
      result: this.state.number1 + this.state.number2
    })

  }

  handleInpuntChanged(e){
    if (e.target.id === 'number1'){
      this.setState({
        number1: Number(e.target.value)
      });
    }
    else if (e.target.id == 'number2'){
      this.setState({
        number2: Number(e.target.value)
      })
    }
    else {
      this.setState({
        result: Number
      })
    }

  }

  render() {
    return (
      <div className="Content">
        <h2> Counter: { this.state.count }</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="substract" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>
        <h2> Calculadora </h2>

        <p>
          <input id="number1" type="number" value={this.state.number1} onChange={this.handleInpuntChanged}/> +
          <input id="number2" type="number" value={this.state.number2} onChange={this.handleInpuntChanged}/> =
          {this.state.result}
          <button id="resultado" onClick={this.handleResultClick}>Result</button>
        </p>
      </div>
    );
  }
  */

  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render (){
    const { body } = this.props;
    return(
      <div className="Content">
      {body}
      </div>
    );
  }
}

export default Content;
