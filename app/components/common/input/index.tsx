import React, { PureComponent } from 'react';

interface IProps { callback (val: any): void }
interface IState { value: string }

class Input extends PureComponent<IProps, IState> {
    constructor (props: IProps) {
        super (props);
        this.state = {
            value: '',
        }
    }
    render () {
        return (
            <div>
                <input />
            </div>
        )
    }
}

export default Input;