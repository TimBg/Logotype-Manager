import React from 'react';
import { Select, MenuItem, TextareaAutosize, Button } from '@material-ui/core';
import { Logotype } from './../../reducers/MainReducer';
import './LogoFinal.css';

export class LogoFinal extends React.Component {
    constructor(props) {
        super(props);
        this.LogoRef = React.createRef();
        debugger;
        this.LogoAttr = props.LogoAttr;
        this.LogoAttr2 = props.LogoAttr2;
        this.isEdit = props.isEdit;
        this.store = props.store;
        this.saveLogoAC = props.saveLogoAC;

        this.logoText = React.createRef();

        if (this.LogoAttr.isFont) {
            this.state = {
                logoText: this.LogoAttr.textOrEmpty,
                figure: this.LogoAttr2.typeOrFontColor,
                textColor: this.LogoAttr.typeOrFontColor,
                figureColor: this.LogoAttr2.colorOrFont,
                font: this.LogoAttr.colorOrFont,
                isFont: this.LogoAttr.isFont,
                num: this.LogoAttr.num,
                numOfLogo: this.LogoAttr.numOfLogo
            }
        } else {
            this.state = {
                logoText: this.LogoAttr2.textOrEmpty,
                figure: this.LogoAttr.typeOrFontColor,
                textColor: this.LogoAttr2.typeOrFontColor,
                figureColor: this.LogoAttr.colorOrFont,
                font: this.LogoAttr2.colorOrFont,
                isFont: this.LogoAttr.isFont,
                num: this.LogoAttr.num,
                numOfLogo: this.LogoAttr.numOfLogo
            }
        }

        this.updateCanvasDidMount = this.updateCanvasDidMount.bind(this);
        this.updateFigure = this.updateFigure.bind(this);
        this.updateFigureColor = this.updateFigureColor.bind(this);
        this.updateFont = this.updateFont.bind(this);
        this.updateFontColor = this.updateFontColor.bind(this);
        this.updateText = this.updateText.bind(this);

        this.textHandler = this.textHandler.bind(this);
        this.textColorHandler = this.textColorHandler.bind(this);
        this.textColorFormHandler = this.textColorFormHandler.bind(this);
        this.figureHandler = this.figureHandler.bind(this);
        this.figureFormHandler = this.figureFormHandler.bind(this);
        this.figureColorHandler = this.figureColorHandler.bind(this);
        this.figureColorFormHandler = this.figureColorFormHandler.bind(this);
        this.fontHandler = this.fontHandler.bind(this);
        this.fontFormHandler = this.fontFormHandler.bind(this);
        this.saveLogotype = this.saveLogotype.bind(this);
    }

    componentDidMount() {
        this.updateCanvasDidMount();
    }

    updateCanvasDidMount() {
        debugger;
        let ctx = this.LogoRef.current.getContext('2d');
        if (!this.LogoAttr.isFont) {
            ctx.fillStyle = this.LogoAttr.colorOrFont;
            ctx.clearRect(0, 0, 100, 200);
            if (this.LogoAttr.typeOrFontColor === 'square') {
                ctx.fillRect(5, 15, 75, 75);
            } else if (this.LogoAttr.typeOrFontColor === 'circle') {
                ctx.arc(40, 45, 40, 0, Math.PI * 2);
                ctx.fill();
            } else if (this.LogoAttr.typeOrFontColor === 'triangle') {
                ctx.strokeStyle = this.LogoAttr.colorOrFont;
                ctx.lineWidth = 44;
                ctx.beginPath();
                ctx.moveTo(41, 48);
                ctx.lineTo(40, 49.5);
                ctx.lineTo(42, 49.5);
                ctx.closePath();
                ctx.stroke();
            }
        } else {
            debugger;
            let newFont = '30px ';
            ctx.fillStyle = this.LogoAttr.typeOrFontColor;
            ctx.clearRect(0, 0, 300, 200);
            if (this.LogoAttr.num === 1) {
                ctx.font = newFont + this.LogoAttr.colorOrFont;
                ctx.fillText(this.state.logoText, 0, 65);
            } else if (this.LogoAttr.num === 2) {
                ctx.font = newFont + this.LogoAttr.colorOrFont;
                ctx.fillText(this.state.logoText, 0, 65);
            } else if (this.LogoAttr.num === 3) {
                ctx.font = newFont + this.LogoAttr.colorOrFont;
                ctx.fillText(this.state.logoText, 0, 65);
            }
        }
    }

    updateText(text) {
        if (!text) text = ' ';
        this.LogoRef.current.getContext('2d').clearRect(0, 0, 300, 200);
        this.LogoRef.current.getContext('2d').fillText(text || this.state.logoText, 0, 60);
        this.saveLogotype();
    }

    updateFont(font) {
        this.LogoRef.current.getContext('2d').clearRect(0, 0, 300, 200);
        this.LogoRef.current.getContext('2d').font = '30px ' + font;
        this.updateText();
        this.saveLogotype();
    }

    updateFontColor(fontColor) {
        this.LogoRef.current.getContext('2d').clearRect(0, 0, 300, 200);
        this.LogoRef.current.getContext('2d').fillStyle = fontColor;
        this.updateText();
        this.saveLogotype();
    }

    updateFigure(figure) {
        debugger;
        this.LogoRef.current.getContext('2d').clearRect(0, 0, 100, 200);
        if (figure === 'square') {
            this.LogoRef.current.getContext('2d').fillRect(5, 15, 75, 75);
        } else if (figure === 'circle') {
            this.LogoRef.current.getContext('2d').arc(40, 45, 40, 0, Math.PI * 2);
            this.LogoRef.current.getContext('2d').fill();
        } else if (figure === 'triangle') {
            this.LogoRef.current.getContext('2d').strokeStyle = this.state.figureColor;
            this.LogoRef.current.getContext('2d').lineWidth = 44;
            this.LogoRef.current.getContext('2d').beginPath();
            this.LogoRef.current.getContext('2d').moveTo(41, 48);
            this.LogoRef.current.getContext('2d').lineTo(40, 49.5);
            this.LogoRef.current.getContext('2d').lineTo(42, 49.5);
            this.LogoRef.current.getContext('2d').closePath();
            this.LogoRef.current.getContext('2d').stroke();
        }
        this.saveLogotype();
    }

    updateFigureColor(figureColor) {
        this.LogoRef.current.getContext('2d').clearRect(0, 0, 100, 200);
        if (this.state.figure === 'square') {
            this.LogoRef.current.getContext('2d').fillStyle = figureColor;
            this.LogoRef.current.getContext('2d').fillRect(5, 15, 75, 75);
        } else if (this.state.figure === 'circle') {
            this.LogoRef.current.getContext('2d').fillStyle = figureColor;
            this.LogoRef.current.getContext('2d').arc(40, 45, 40, 0, Math.PI * 2);
            this.LogoRef.current.getContext('2d').fill();
        } else if (this.state.figure === 'triangle') {
            this.LogoRef.current.getContext('2d').strokeStyle = figureColor;
            this.LogoRef.current.getContext('2d').strokeStyle = this.state.figureColor;
            this.LogoRef.current.getContext('2d').lineWidth = 44;
            this.LogoRef.current.getContext('2d').beginPath();
            this.LogoRef.current.getContext('2d').moveTo(41, 48);
            this.LogoRef.current.getContext('2d').lineTo(40, 49.5);
            this.LogoRef.current.getContext('2d').lineTo(42, 49.5);
            this.LogoRef.current.getContext('2d').closePath();
            this.LogoRef.current.getContext('2d').stroke();
        }
        this.saveLogotype();
    }

    textHandler() {
        this.setState({ logoText: this.logoText.current.value });
        this.updateText(this.logoText.current.value);
    }

    textColorHandler(event) {
        this.setState({ textColor: event.target.value });
        this.textColorFormHandler();
    }

    textColorFormHandler() {
        this.updateFontColor(this.state.textColor);
        this.render();
    }

    figureHandler(event) {
        this.setState({ figure: event.target.value, isFont: false });
    }

    figureFormHandler(event) {
        this.updateFigure(this.state.figure);
        this.render();
    }

    figureColorHandler(event) {
        this.setState({ figureColor: event.target.value });
    }

    figureColorFormHandler(event) {
        this.updateFigureColor(this.state.figureColor);
        this.render();
    }

    fontHandler(event) {
        this.setState({ font: event.target.value });
    }

    fontFormHandler() {
        this.updateFont(this.state.font);
        this.render();
    }

    saveLogotype() {
        let data = !this.state.isFont ?
            new Logotype(this.state.figureColor, this.state.figure, this.state.isFont, this.state.num, this.state.numOfLogo, null) :
            new Logotype(this.state.font, this.state.textColor, this.state.isFont, this.state.num, this.state.numOfLogo, this.state.logoText);
        this.store.dispatch(this.saveLogoAC(data));
    }

    render() {
        return (<>
            <canvas ref={this.LogoRef} width={this.LogoAttr && this.LogoAttr.isFont ? 300 : 100} height={200} />
            {
                this.isEdit && this.LogoAttr && !this.LogoAttr.isFont &&
                <div>
                    <div>
                        <form>
                            <label>
                                <Select onChange={this.figureHandler}>
                                    <MenuItem selected value='square'>Square</MenuItem>
                                    <MenuItem value='circle'>Circle</MenuItem>
                                    <MenuItem value='triangle'>Triangle</MenuItem>
                                </Select>
                            </label>
                            <Button variant="contained" color="secondary" onClick={this.figureFormHandler}>{this.state.figure}</Button>
                        </form>
                    </div>
                    <div>
                        <form>
                            <label>
                                <Select onChange={this.figureColorHandler}>
                                    <MenuItem selected value='black'>Black</MenuItem>
                                    <MenuItem value='white'>White</MenuItem>
                                    <MenuItem value='yellow'>Yellow</MenuItem>
                                    <MenuItem value='red'>Red</MenuItem>
                                    <MenuItem value='pink'>Pink</MenuItem>
                                    <MenuItem value='green'>Green</MenuItem>
                                    <MenuItem value='brown'>Brown</MenuItem>
                                    <MenuItem value='grey'>Grey</MenuItem>
                                    <MenuItem value='orange'>Orange</MenuItem>
                                </Select>
                            </label>
                            <Button variant="contained" color="secondary" onClick={this.figureColorFormHandler}>{this.state.figureColor}</Button>
                        </form>
                    </div>
                </div>
            }
            { this.isEdit && this.LogoAttr && this.LogoAttr.isFont &&
                <div>
                    <div className='block-1'>
                        <TextareaAutosize ref={this.logoText} value={this.state.logoText} onChange={this.textHandler}></TextareaAutosize>
                    </div>
                    <div className='block-2'>
                        <form>
                            <label>
                                <Select onChange={this.textColorHandler}>
                                    <MenuItem selected value='black'>Black</MenuItem>
                                    <MenuItem value='white'>White</MenuItem>
                                    <MenuItem value='yellow'>Yellow</MenuItem>
                                    <MenuItem value='red'>Red</MenuItem>
                                    <MenuItem value='pink'>Pink</MenuItem>
                                    <MenuItem value='green'>Green</MenuItem>
                                    <MenuItem value='brown'>Brown</MenuItem>
                                    <MenuItem value='grey'>Grey</MenuItem>
                                    <MenuItem value='orange'>Orange</MenuItem>
                                </Select>
                            </label>
                            <Button variant="contained" color="secondary" onClick={this.textColorFormHandler}>{this.state.textColor}</Button>
                        </form>
                    </div>
                    <div className='block-3'>
                        <form>
                            <label>
                                <Select onChange={this.fontHandler}>
                                    <MenuItem value='Arial'>Arial</MenuItem>
                                    <MenuItem value='Georgia'>Georgia</MenuItem>
                                </Select>
                            </label>
                            <Button variant="contained" color="secondary" onClick={this.fontFormHandler}>{this.state.font}</Button>
                        </form>
                    </div>
                </div>
            }
        </>
        );
    }
}