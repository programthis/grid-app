import React, {Component} from 'react';

export default class Widget extends Component {
    render() {
        const { width, height, name, background, x_pos, y_pos } = this.props.options;

        return (
            <div className="grid-stack-item" gs-w={width} gs-h={height} gs-x={x_pos} gs-y={y_pos}>
                <div className="grid-stack-item-content" style={{backgroundColor: background}}>{name}</div>
            </div>
        );
    }
}