/*
*
@author tri.tran on 2/15/19
*
*/
import {
	Platform,
	Dimensions
} from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

export const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

export const AES_KEY = "LOYALTY_AES_KEY"
export const PAGE_SIZE = 10

export const AsyncStorageConstants = {
	autoLogin: '@Loyalty_auto_login',
}

export const appScreenName = {
	splash: 'splash',
	login: 'login',
	home: 'home',
	aboutme: 'aboutme',
}

export const homeTabName = {
	product: 'product',
	specialOffer: 'specialOffer',
	search: 'search',
	reward: 'reward',
	more: 'more',
}

export const appStyleConstants = {
	iphoneXPadding: Platform.OS === 'ios' ? ifIphoneX(25, 0) : 0,
	smallFont: 13,
	mediumFont: 14,
	largeFont: 16,
	bigFont: 18,
	normalFontColor: '#666666',
	UI_ITEM_HEIGHT: Platform.OS === 'ios' ? 46 : 50,
	UI_BORDER_RADIUS: 4,
	LARGE_SCREEN_MARGIN: 20,
	NORMAL_SCREEN_MARGIN: 15,
	SMALL_SCREEN_MARGIN: 10,
	BORDER_COLOR_GRAY: 'rgba(228, 228, 228, 1)',
	PERCENT_INPUT: 37 / 375,
}

export const OS = {
	IOS: 1,
  Android: 2
}

export const HEADER_TYPE = {
	BACKGROUND_IMAGE: 0,
	SEARCH: 1,
	TITLE: 2,
}

export const HOME_TABS = {
  product: {name: 'Home', uri: require('../../res/home-icon.png'), uriFocus: require('../../res/home-icon-focus.png')},
  specialOffer: {name: 'Special', uri: require('../../res/gift-icon.png'), uriFocus: require('../../res/gift-icon-focus.png')},
  search: {name: 'Search', uri: require('../../res/search-icon.png'), uriFocus: require('../../res/search-icon-focus.png')},
  reward: {name: 'Special', uri: require('../../res/star-icon.png'), uriFocus: require('../../res/star-icon-focus.png')},
  more: {name: 'More', uri: require('../../res/more-icon.png'), uriFocus: require('../../res/more-icon-focus.png')},
}