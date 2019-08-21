import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {

  // Checkbox Initial State
  state = {
    isApple: false,
    isOrange: false,
    isBanana: false,
    isCherry: false,
    isAvocado: false
  };

  // React Checkboxes onChange Methods
  onChangeApple = () => {
    this.setState(initialState => ({
      isApple: !initialState.isAvocado,
    }));
  }

  onChangeOrange = () => {
    this.setState(initialState => ({
      isOrange: !initialState.isOrange,
    }));
  }

  onChangeBanana = () => {
    this.setState(initialState => ({
      isBanana: !initialState.isBanana,
    }));
  }

  onChangeCherry = () => {
    this.setState(initialState => ({
      isCherry: !initialState.isCherry,
    }));
  }

  onChangeAvocado = () => {
    this.setState(initialState => ({
      isAvocado: !initialState.isAvocado,
    }));
  }

  // Submit
  onSubmit = (e) => {
    e.preventDefault();

    let checkArray = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        checkArray.push(key);
      }
    }

    let checkData = {
      checkbox: checkArray.toString()
    };

    axios.post('http://localhost:4000/api/checkbox-save', checkData)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="App">
        <h2>Store Multiple Checkboxes Values in React</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isApple}
                onChange={this.onChangeApple}
                className="form-check-input"
              />
              Apple
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isAvocado}
                onChange={this.onChangeAvocado}
                className="form-check-input"
              />
              Avocado
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isBanana}
                onChange={this.onChangeBanana}
                className="form-check-input"
              />
              Banana
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isCherry}
                onChange={this.onChangeCherry}
                className="form-check-input"
              />
              Cherry
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isOrange}
                onChange={this.onChangeOrange}
                className="form-check-input"
              />
              Orange
            </label>
          </div>

          <div className="form-group">
            <button className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;