import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFibonacciArr } from 'Helpers/selectors';

interface IProps { fibonacciArr: number[]; }

class Results extends Component<IProps> {
    fibResults: any;

    constructor (props: IProps) {
        super (props);

        this.fibResults = React.createRef();
    }
    renderFibonacciArr (fibonacciArr: number[]) {
        const timestamp = Date.now();
        if (fibonacciArr && fibonacciArr.length > 0) {
            return fibonacciArr.map((item, index) => {
                if (fibonacciArr.length === index + 1) {
                    return (<span key={index + timestamp}>{item}</span>);
                }
                return (<span key={index + timestamp}>{item}, </span>);
            });
        }
        return null;
    }

    componentDidUpdate () {
        const fibResultChildren = this.fibResults && this.fibResults.current.children;
        const childrenLength = fibResultChildren && fibResultChildren.length || 0;
        let index = 0;
        if (childrenLength > 0) {
            for (let i = 0; i < childrenLength; i++ ){
                fibResultChildren[i].style.opacity = 0;
            }
            const timer = setInterval(() => {
                const child = fibResultChildren[index];
                if (index === childrenLength - 1 || !child) clearInterval(timer);
                if (child) {
                    child.style.opacity = 1;
                    index++;
                }
            }, 10);
        }
    }

    render () {
        const { fibonacciArr } = this.props;
        const renderFibonacciArr = this.renderFibonacciArr(fibonacciArr);
        const sum = fibonacciArr ? fibonacciArr.reduce((a,b) => a + b, 0) : 0;
        return (
            <div className='results-container'>
                <div className='results-heading-text'>Result (sum: {sum})</div>
                <div className='results-fibonacci' ref={this.fibResults}>
                    {renderFibonacciArr}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        fibonacciArr: getFibonacciArr(state.fibonacciReducer),
    };
};

export default connect(mapStateToProps)(Results);
