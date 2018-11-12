import React, { Component } from 'react'
import Header  from '../../../common/header'
import icon_fanhui from "../../../static/iconfont/icon_fanhui.svg";

export default class FinishXiguan extends Component {

    fanhui(){
        this.props.history.go(-1)
      }
  render() {
    return (
        <React.Fragment>
            <Header 
            left={<img className="iconfont" src={icon_fanhui} alt={'返回'} onClick={()=>this.fanhui()} />}  
            text={'已结束习惯'}/>
        </React.Fragment>
    )
  }
}
