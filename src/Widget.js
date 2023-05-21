import React, {Component} from 'react';

export default class Widget extends Component {
    render() {
        const { width, height, name } = this.props.options;

        return (
            <div className="grid-stack-item" gs-w="2" gs-h="2">
                <div className="grid-stack-item-content">{name}</div>
            </div>
        );
    }
}