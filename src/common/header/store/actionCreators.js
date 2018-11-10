/***
 * 此文件中定义action并导出，供组件在react-redux提供的connet方法的第二个参数mapDispatchToProps中使用
 * 通过store/index.js暴露出去
 */
import * as constants from './constants'
import axios from 'axios'
export const toggleFocus=()=>({//返回对象
    type:constants.SEACH_FOCUS_TOGGLE
})
const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data
})
//使用redux-thunk可以返回函数
export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/getList.json').then((res)=>{
            const action=changeList(res.data.data)
            dispatch(action)
        }).catch(err=>{

        })
    }
}