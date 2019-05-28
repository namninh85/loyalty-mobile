import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';
import { HEADER_TYPE } from '../../../commons/Constants';

export default class SearchDetailComponent extends Component {
  
  render() {
    const baseProps = {
      typeHeader: HEADER_TYPE.SEARCH
    }
    return (
      <BaseScreen {...baseProps}>
        <View style={style.view}>
          <Text>Search Detail Screen</Text>
        </View>
      </BaseScreen>
    )
  }

}