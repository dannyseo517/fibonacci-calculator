import React, { Component } from 'react';
import Input from 'Common/input';
import Button from 'Common/button';
import { requestFibonacci } from 'Actions/index';
import { connect } from 'react-redux';

interface IProps { dispatch: any; }
interface IState { inputVal: string; }

class FibonacciInput extends Component<IProps, IState> {
    constructor (props: any) {
        super(props);

        this.state = {
            inputVal: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleInputChange (val: string) {
        this.setState({ inputVal: val });
    }
    handleButtonClick () {
        // dispatch redux to calculate fibonacci numbers in the results component
        const valueNum = Number(this.state.inputVal);
        if (Number.isInteger(valueNum)) {
            this.props.dispatch(requestFibonacci(valueNum));
        }
    }
    render () {
        return (
            <div>
                <Input callback={this.handleInputChange} placeholder={'Enter any whole number (0, 1, 2 ...)'} />
                <Button callback={this.handleButtonClick} buttonText={'Calculate'} />
            </div>
        )
    }
}

export default connect()(FibonacciInput);