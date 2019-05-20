/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actions} from "../redux/actions/Actions";
import {bindActionCreators} from 'redux';
import LoyaltyComponent from './component';

const mapStateToProps = (state) => {
    return {
        appScreen: state.apps.appScreens,
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class Loyalty extends Component {
    render() {
        return (
            <LoyaltyComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loyalty)