import React, { PureComponent, useCallback } from 'react';

interface IProps { callback (): void }
interface IState { value: string }

class Button extends PureComponent<IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            value: '',
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    
    handleButtonClick () {
        this.props.callback();
    }
    
    render () {
        return (
            <button onClick={this.handleButtonClick}>CALCULATE</button>
        )
    }
}

export default Button;