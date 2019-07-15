import { Component } from 'react';

export class CanvasLogic extends Component  {
    constructor(props) {
        super(props);
        this.drawOnCanvas = this.drawOnCanvas.bind(this);
    }

    drawOnCanvas() {
        const ctxOfCanvas = document.getElementById('main-canvas').getContext('2d');
        ctxOfCanvas.fillRect(10, 20, 270, 540);
    }

    render() {
        return this.drawOnCanvas();
    }
};

// w270 h540