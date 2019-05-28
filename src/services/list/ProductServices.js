import RESTFull from '../RESTFull';
import API from '../../commons/API';
import _ from 'lodash';


export default LoginServices = {

  getCategories: () => {  
    return RESTFull.get(API.doCategories)
  },

}