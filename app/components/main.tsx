import React, { Component } from 'react';
import { fibonacci } from 'Helpers/fibonacci';
import FibonacciInput from 'Components/fibonacci-input';

class Main extends Component {
    render () {
        // const fib = fibonacci(5);
        return (
            <div>
                Danny Seo's Fibonacci Tool Thingy
                {/* {fib} */}
                <FibonacciInput />
            </div>
        )
    }
}

export default Main;