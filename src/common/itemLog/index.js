import React, { Component } from "react";
import icon_fanhui from "../../static/iconfont/icon_fanhui.svg";
import Header from "../header";
export default class ItemLog extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.fanhui=this.fanhui.bind(this)
  }
  fanhui(){
    this.props.history.go(-1)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Header
          left={<img className="iconfont" src={icon_fanhui} alt={"返回"} onClick={()=>this.fanhui()}/>}
          text={"早睡*十一月"}
          right={"编辑"}
          /*  right={<img className="iconfont" src={icon_zhengli} alt={'整理'}/>}  */
        />
      </div>
    );
  }
}
