import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Markup } from './markup';

class RenderClass extends Component {
    render() {
        return (
        <Markup />
        );
    }
}

ReactDOM.render(
    <RenderClass />,
    document.getElementsByTagName('body')[0]
);