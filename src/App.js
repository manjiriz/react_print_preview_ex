import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import ReactToPrint from "react-to-print";
import { Table, DatePicker, Card } from "antd";
import ComponentToPrint from './ComponentToPrint';

/* class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  render() {
    return (
      <div ref={this.componentRef}>
        <table>
          <thead>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      </div >
    );
  }
}
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      stateData: "State Data"
    };
    //this.createPrintPreview = this.createPrintPreview.bind(this);
    /*  */
  }

  createPrintPreview() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>Print me</p>
          {/* <ReactToPrint
            trigger={() => <a className="list-group-item" href="#">
              <i className="fa fa-print fa-3x" aria-hidden="true"></i>
            </a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} /> */}
          {/* <a className="list-group-item" href="#">
            <i className="fa fa-print fa-3x" aria-hidden="true" onClick={this.createPrintPreview()}></i>
          </a> */}

          <Card title="I am New Card"
            /* extra={
              <ReactToPrint
                trigger={() => <a className="list-group-item" href="#">
                  <i className="fa fa-print fa-3x" aria-hidden="true"></i>
                </a>}
                content={() => this.componentRef}
              />
              <ComponentToPrint ref={el => (this.componentRef = el)} />
          } */>
            <ReactToPrint
              trigger={() => <a className="list-group-item" href="#">
                <i className="fa fa-print fa-3x" aria-hidden="true"></i>
              </a>}
              // 
              content={() => this.componentRef}
            />
            <ComponentToPrint ref={el => { console.log("------el-----", el); (this.componentRef = el) }} data={this.state.stateData} />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
