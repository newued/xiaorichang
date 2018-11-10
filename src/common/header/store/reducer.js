/***
 * 此文件定义本模块的reducer，主要是用于src/reducer中状态合并使用
 * 通过store/index.js暴露出去
 */
import * as constants from './constants'
import {fromJS} from 'C:/Users/admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/immutable'
const defaultState=fromJS({
    focus:false,
    list:[]
})
export default (state=defaultState,action)=>{
    if(action.type===constants.SEACH_FOCUS_TOGGLE){
        return state.set('focus',!state.get('focus'))
       /*  {
            focus:!state.focus
        } */
    }else if(action.type===constants.CHANGE_LIST){
        return state.set('list',fromJS(action.data))
    }
    return state;
}