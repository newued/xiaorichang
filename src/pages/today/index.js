import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header  from '../../common/header'
import XiguanItem  from '../../common/xiguanItem'
import Kapian from '../../common/kapian'
import icon_fanhui from '../../static/iconfont/icon_fanhui.svg'
import icon_fenxiang from '../../static/iconfont/icon_fenxiang.svg'
import icon_zhengli from '../../static/iconfont/icon_zhengli.svg'
import icon_kapian from '../../static/iconfont/icon_kapian.svg'
import icon_action_kantiankong from '../../static/iconfont/icon_action_kantiankong.svg'
import icon_action_hecha from '../../static/iconfont/icon_action_hecha.svg'
import icon_action_xiexin from '../../static/iconfont/icon_action_xiexin.svg'
import icon_action_guozhi from '../../static/iconfont/icon_action_guozhi.svg'

class Dfault extends Component{
render(){
  return (
    <div>
      <Header left={
           <Link to="/Kapian">
         <img className="iconfont" src={icon_kapian} alt={'卡片'}/> </Link>} 
         text={'今日习惯'}
         right={<img className="iconfont" src={icon_zhengli} alt={'整理'}/>} 
         />
        <ul style={{'display':'inline-block'}}>
          <XiguanItem img={<img className="iconfont" src={icon_action_kantiankong} alt={'卡片'}/>} name={"看天空"} days={("完成"+4+"天")} />
          <XiguanItem img={<img className="iconfont" src={icon_action_hecha} alt={'喝茶'}/>} name={"喝茶"} days={("完成"+1+"天")} />
          <XiguanItem img={<img className="iconfont" src={icon_action_xiexin} alt={'写信'}/>} name={"写信给老婆"} days={("完成"+4+"天")} />
          <XiguanItem img={<img className="iconfont" src={icon_action_guozhi} alt={'大佬喝可乐'}/>} name={"大佬喝可乐"} days={("完成"+4+"天")} />
        </ul>
    </div>
  )
}
}
export default class Today extends Component {
  render() {
    return (
      <Router>
     <React.Fragment>
        <Route exact path="/" component={Dfault}/>
        <Route path="/Kapian" component={Kapian}/>
     </React.Fragment>
     </Router>
    )
  }
}
