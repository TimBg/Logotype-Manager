import React from 'react';
import './MainPage.css';
import { LogoFinal } from './../../Components/LogoFinal/LogoFinal';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const setLogoAC = (numOfLogo) => ({
    type: 'SET_LOGO',
    numOfLogo: numOfLogo
});

const saveLogoAC = (data) => ({
    type: 'SAVE_LOGO',
    data: data
});

const mapStateToProps = () => ({});

export const MainPageS = (props) => {
    let LogoData = props.store.getState().MainBranch

    return <div className='mainpage'>
        <div className='mainpage__title'>
            <h1>Logo Manager</h1>
        </div>
        <div className='mainpage__logotypes'>
            <ul>
                <NavLink className='navlink' to='/logo/1'><li>
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[0]} LogoAttr2={LogoData.Logotypes[1]} />
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[1]} LogoAttr2={LogoData.Logotypes[0]} />
                </li></NavLink>
                <NavLink className='navlink' to='/logo/2'><li>
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[2]} LogoAttr2={LogoData.Logotypes[3]} />
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[3]} LogoAttr2={LogoData.Logotypes[2]} />
                </li></NavLink>
                <NavLink className='navlink' to='/logo/3'><li>
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[4]} LogoAttr2={LogoData.Logotypes[5]} />
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[5]} LogoAttr2={LogoData.Logotypes[4]} />
                </li></NavLink>
                <NavLink className='navlink' to='/logo/4'><li>
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[6]} LogoAttr2={LogoData.Logotypes[7]} />
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[7]} LogoAttr2={LogoData.Logotypes[6]} />
                </li></NavLink>
                <NavLink className='navlink' to='/logo/5'><li>
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[8]} LogoAttr2={LogoData.Logotypes[9]} />
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[9]} LogoAttr2={LogoData.Logotypes[8]} />
                </li></NavLink>
                <NavLink className='navlink' to='/logo/6'><li>
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[10]} LogoAttr2={LogoData.Logotypes[11]} />
                    <LogoFinal saveLogoAC={props.saveLogoAC} store={props.store} LogoAttr={LogoData.Logotypes[11]} LogoAttr2={LogoData.Logotypes[10]} />
                </li></NavLink>
            </ul>
        </div>
    </div>
}

export const MainPage = connect(mapStateToProps, { setLogoAC, saveLogoAC })(MainPageS);