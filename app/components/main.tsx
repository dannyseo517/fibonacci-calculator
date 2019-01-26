import React, { Component } from 'react';
import FibonacciInput from 'Components/fibonacci-input';
import FibonacciResult from 'Components/results';

class Main extends Component {
    render () {
        return (
            <div>
                Danny Seo's Fibonacci Tool Thingy
                <FibonacciInput />
                <FibonacciResult />
            </div>
        )
    }
}

export default Main;