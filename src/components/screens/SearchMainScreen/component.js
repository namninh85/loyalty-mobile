import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from './style';
import BaseScreen from '../../BaseScreen';
import { HEADER_TYPE } from '../../../commons/Constants';
import {addNavigationHelpers, StackNavigator} from 'react-navigation'


export default class SearchMainComponent extends Component {
  
  // render() {
  //   const baseProps = {
  //     typeHeader: HEADER_TYPE.SEARCH
  //   }
  //   return (
  //     <BaseScreen {...baseProps}>
  //       <View style={style.view}>
  //         <Text>Search Main Screen</Text>
  //       </View>
  //     </BaseScreen>
  //   )
  // }
  state = {
    itemCount: '(2)',
    name: 'Nestea'
  }
  
  render() {
    const baseProps = {
      typeHeader: HEADER_TYPE.SEARCH
    },
          touchProps={
            style: styles.touch,
            
          }
          searchInfoProps ={
            style: styles.searchText,
            text: this.state.itemCount + 'Search Result For ' +': ' + this.state.name
          }
          header1Props ={
            style: styles.header,
            text: 'STRAWBERRY TEA'

    },
          header2Props ={
            style: styles.header,
            text: 'TEA CHANH'

    },
          footerProps ={
            style: styles.description,
            text: '(Only Available at some stores)'
    },
          description1Props = {
            style: styles.description ,
            text: 'At Circle K, the familiar products from Nestlé brand are formulated according to their own formula to bring a refreshing and fresh feeling.Currently there are 3 popular product lines: Tra Chanh, Tra Dau and Milo.'
    },
          description2Props = {
            style: styles.description ,
            text: 'At Circle K, the familiar products from Nestlé brand are formulated according to their own formula to bring a refreshing and fresh feeling.Currently there are 2 popular product lines: Tra Chanh and Milo.'
},
          image1Props = {
            source: require('../../../../res/image19.3.png'),
            style: styles.image1
          },
          image2Props = {
            source: require('../../../../res/image19.2.png'),
            style: styles.image2
          },
          heartImgProps = {
            source: require('../../../../res/icon-love.png'),
            style: styles.heart
          },
          direction1Props = {
            source: require('../../../../res/_new-locate.png'),
            style: styles.icon2,
            
          },
          direction2Props = {
            source: require('../../../../res/_new-locate.png'),
            style: styles.icon4,
          },

          conditionProps ={
            source: require('../../../../res/image20.png'),
            style: styles.icon3,
          }
    return (
      <ScrollView>
<BaseScreen {...baseProps}>
    <View style={styles.view}>
      <View style={styles.searchInfo}>
        <EText {...searchInfoProps} />
      </View>
        <View style={styles.item1}>
          <EImage {...heartImgProps} />
          <TouchableOpacity  {...touchProps}>
            <EImage {...direction1Props} />
          </TouchableOpacity>
            <EImage {...conditionProps} /> 
          <EImage {...image1Props} />
          </View>
          <View style={styles.text1}>
            <EText {...header1Props} />
            <EText {...description1Props} />
            <EText {...footerProps} />
          </View>
        <View style={styles.item2}>
            <EImage {...heartImgProps} />
          <TouchableOpacity  {...touchProps}>
            <EImage {...direction2Props} />
          </TouchableOpacity>
            <EImage {...image2Props} />
        </View>
          <View style={styles.text2}>
            <EText {...header2Props} />
            <EText {...description2Props} />
            <EText {...footerProps} />
          </View>

    </View>
</BaseScreen>
      </ScrollView>
    )
  }

}