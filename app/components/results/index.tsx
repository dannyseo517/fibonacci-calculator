import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFibonacciArr } from 'Helpers/selectors';

interface IProps { fibonacciArr: number[]; }

class Results extends Component<IProps> {
    constructor (props: IProps) {
        super (props);
    }

    renderFibonacciArr (fibonacciArr: number[]) {
        if (fibonacciArr && fibonacciArr.length > 0) {
            return fibonacciArr.map((item, index) => {
                if (fibonacciArr.length === index + 1) {
                    return `${item}`;
                }
                return `${item}, `
            });
        }
        return null;
    }

    render () {
        const { fibonacciArr } = this.props;
        const renderFibonacciArr = this.renderFibonacciArr(fibonacciArr);
        const sum = fibonacciArr ? fibonacciArr.reduce((a,b) => a + b, 0) : 0;
        return (
            <div className='results-container'>
                <div className='results-heading-text'>Result (sum: {sum})</div>
                {renderFibonacciArr}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        fibonacciArr: getFibonacciArr(state.fibonacciReducer),
    }
}

export default connect(mapStateToProps)(Results);