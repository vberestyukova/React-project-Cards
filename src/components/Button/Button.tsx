import React, {Component} from 'react';
import styles from './Button.module.css';


class Button extends Component<any, any> {
    render() {
        return (
                <button
                    className={styles.button}
                    type={this.props.type}
                    onClick={this.props.onClick}>
                    {this.props.children}
                </button>
        );
    }
}

export default Button;
