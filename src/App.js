import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const data = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5
];

const sortedData = data.concat().sort();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linearResult: null,
      binaryResult: null
    };
  }

  linearSubmit(value) {
    for (let i = 0; i < data.length; i++) {
      if (value === data[i]) {
        this.setState({
          linearResult: `Search took ${i + 1} tries!`
        });
        return;
      }
    }
    this.setState({
      linearResult: `Search Failed after ${data.length} tries!`
    });
    return;
  }

  binarySubmit(arr, value, start = 0, end = arr.length, counter = 0) {
    if (start > end) {
      this.setState({
        binaryResult: `Search Failed after ${counter} tries!`
      });
    }
    const index = Math.floor((start + end) / 2);
    const item = arr[index];
    if (item == value) {
      return this.setState({
        binaryResult: `Search took ${counter + 1} tries!`
      });
    } else if (item < value) {
      return this.binarySubmit(arr, value, index + 1, end, counter + 1);
    } else if (item > value) {
      return this.binarySubmit(arr, value, start, index - 1, counter + 1);
    }
  }

  render() {
    return (
      <main>
        <div className="linear-div">
          <h3>Linear</h3>
          <input type="number" name="target" id="target" ref="linearInput" />
          <button
            type="button"
            onClick={() =>
              this.linearSubmit(Number(this.refs.linearInput.value))
            }
          >
            Search!
          </button>
          <p>{this.state.linearResult}</p>
        </div>

        <div className="binary-div">
          <h3>Binary</h3>
          <input type="number" name="target" id="target" ref="binaryInput" />
          <button
            type="button"
            onClick={() =>
              this.binarySubmit(sortedData, Number(this.refs.binaryInput.value))
            }
          >
            Search!
          </button>
          <p>{this.state.binaryResult}</p>
        </div>

        <div className="book-div">
<h3> Dewey Decimal Index:</h3>
<ol>
<li>Have the Dewey Decimal Indexes sorted</li>
<li>Check the midpoint. If it matches, return that index</li>
<li>If the input index is greater than the midpoint, check the array from the midpoint+1 to the end,
  if the input is less than the midpoint, check the array from the start to the midpoint-1</li>
<li>Recursively run the function until you find it or you check all the values and don't find it</li>
</ol>
        </div>
      </main>
    );
  }
}

export default App;
