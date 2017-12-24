import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state={value:false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.onChange) this.props.onChange(!this.state.value);
        this.setState((prevState, props)=>({
            value: !prevState.value, 
        }));
    }

    render() {
        let icon= this.state.value
            ? <span> &#9745;</span>
            :<span> &#x2610;</span>

            let cssClass= (this.props.className)
            ?this.props.className
            :'';

        return (
            <div className={cssClass}>
                <span className='icon' onClick={this.handleClick}>{icon}</span> {this.props.children}
            </div>
        );
    }
}

export default Checkbox;