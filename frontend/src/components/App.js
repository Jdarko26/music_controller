import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';



export default class App extends Component {
    constructor(props) {
        super(props);
      
    }
    render() {
        return (
            <div className="center">
                <HomePage />
            </div>
        );
        
    }
}

ReactDOM.render(<App />, document.getElementById('app'));