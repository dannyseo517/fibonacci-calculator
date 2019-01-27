import React, { Component } from 'react';
import FibonacciInput from 'Components/fibonacci-input';
import FibonacciResult from 'Components/results';
import fibonacciImg from 'Assets/images/fibonacci.svg';

class Main extends Component {
    render () {
        return (
            <div className='main-container'>
                <img className='heading-img' src={fibonacciImg} width={300} height={198.7} />
                <div className='heading-text'>
                    <span>Fibonacci </span>
                    <span>Calculator</span>
                </div>
                <div className='heading-subtext'>by Danny Seo</div>
                <FibonacciInput />
                <FibonacciResult />
            </div>
        );
    }
}

export default Main;