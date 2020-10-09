import React from 'react';
import { LogoFinal } from './../../Components/LogoFinal/LogoFinal';
import { Button } from '@material-ui/core';
import './LogoPage.css';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

const setLogoAC = (numOfPage) => ({
    type: 'SET_LOGO',
    numOfPage: numOfPage
});

const saveLogoAC = (data) => ({
    type: 'SAVE_LOGO',
    data: data
});

const mapStateToProps = () => ({});

class LogoPageS extends React.Component {
    constructor(props) {
        super(props);
        this.store = props.store;
        this.numOfPage = window.location.href[window.location.href.length - 1] * 2;
        this.setLogo = this.setLogo.bind(this);
        this.props = props;
        debugger;
        console.log(props);
    }

    setLogo() {
        debugger;
        this.props.setLogoAC(this.numOfPage);
        debugger;
    }

    render() {
        return (<div className='logo-page'>
            <div className='logo-page__title'><h1>Edit Logo</h1></div>
            <div className='logo-page__logotypes'>
                <div>
                    <LogoFinal saveLogoAC={this.props.saveLogoAC} className='logo-page__logo' LogoAttr={this.store.getState().MainBranch.Logotypes[this.numOfPage - 2]}
                        LogoAttr2={this.store.getState().MainBranch.Logotypes[this.numOfPage - 1]} isEdit={true} store={this.store} />
                </div>
                <div>
                    <LogoFinal saveLogoAC={this.props.saveLogoAC} className='logo-page__logo' LogoAttr={this.store.getState().MainBranch.Logotypes[this.numOfPage - 1]}
                        LogoAttr2={this.store.getState().MainBranch.Logotypes[this.numOfPage - 2]} isEdit={true} store={this.store} />
                </div>
            </div>
            <div className='logo-page__buttons'>
                <NavLink className='button-1' to=''>
                    <Button variant="contained" color="secondary" onClick={this.setLogo}>Save Logo</Button>
                </NavLink>
                <NavLink className='button-2' to=''>
                    <Button variant="contained" color="secondary">Cancel</Button>
                </NavLink>
            </div>
        </div>)
    }
}

export const LogoPage = connect(mapStateToProps, { setLogoAC, saveLogoAC })(LogoPageS);