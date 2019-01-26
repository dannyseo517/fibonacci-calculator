import React, { Component } from 'react';
import { fibonacci } from 'Helpers/fibonacci';

class Main extends Component {
    render () {
        const fuck = fibonacci(5);
        return (
            <div>
                Danny Seo's Fibonacci Tool Thingy
                {fuck}
            </div>
        )
    }
}

export default Main;