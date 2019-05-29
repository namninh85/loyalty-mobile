/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import RewardMembershipComponent from './component';
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
        //map state from store to component props
        user: state.users.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class RewardMembershipScreen extends Component {
    render() {
        return (
            <RewardMembershipComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardMembershipScreen)