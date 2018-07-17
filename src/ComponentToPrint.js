import React, { Component } from 'react';
class ComponentToPrint extends React.Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
        console.log("------PROP DATA-----", props)
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

export default ComponentToPrint;