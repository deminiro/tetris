import React, { Component } from 'react';
import './style.css';

export class Markup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canvasCtx: null,
            time: 0
        }
        this.makeCanvas = this.makeCanvas.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.currentDate = this.currentDate.bind(this);
    }

    handleChange() {
        const canvas = document.getElementById('mainCanvas');
        const ctxOfCanvas = canvas.getContext('2d');
        ctxOfCanvas.fillStyle = 'lightgreen';
        ctxOfCanvas.fillRect(0, 0, 310, 510);
        ctxOfCanvas.fillStyle = '#000';
        ctxOfCanvas.fillRect(0, 0, 310, 20);
        this.setState({ canvasCtx: ctxOfCanvas });
        ctxOfCanvas.fillStyle = '#fff';
        ctxOfCanvas.font = '12px Arial';
        ctxOfCanvas.fillText(this.currentDate(), 280, 14);
        this.currentDate()
    }

    currentDate() {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        return `${hours}:${minutes}`;
    }

    makeCanvas() {
        const canvasTetris = (
            <div className={'block-with-phone-form'}>
                <div className={'parent-of-canvas'}>
                    <div className={'head-of-phone'} />
                    <canvas width={310} height={510} className={'mainCanvas'} id={'mainCanvas'} />
                    <div className={'button-unblock-phone'}>
                        <div
                        className={'unblock-phone-square'}
                        id={'unblock-phone-square'}
                        onClick={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        );
        return canvasTetris;
    }

    render() {
        return (
            <>{this.makeCanvas()}
            </>
        );
    }
}