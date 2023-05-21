import React, {Component} from 'react';

export default class Widget extends Component {
    render() {
        const { width, height, name, background } = this.props.options;

        return (
            <div className="grid-stack-item" gs-w="1" gs-h="1">
                <div className="grid-stack-item-content" style={{backgroundColor: background}}>{name}</div>
            </div>
        );
    }
}