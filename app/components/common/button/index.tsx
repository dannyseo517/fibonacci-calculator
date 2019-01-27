import React, { PureComponent, useCallback } from 'react';

interface IProps { buttonText: string; callback (event: any): void; }
interface IState { value: string }

class Button extends PureComponent<IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            value: '',
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    
    handleButtonClick (event: any) {
        this.props.callback(event);
    }
    
    render () {
        return (
            <button onClick={this.handleButtonClick}>{this.props.buttonText}</button>
        )
    }
}

export default Button;