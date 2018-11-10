import React, { Component } from 'react'
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {HeaderModule,LeftHeaderModule,RightHeaderModule} from './style'
//import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    return (
      <HeaderModule>
        <LeftHeaderModule>
          {this.props.left}
        </LeftHeaderModule>
        {this.props.text}
        <RightHeaderModule>
          {this.props.right}
        </RightHeaderModule>
      </HeaderModule>
    )
  }

}
////////////////////与外部通信//////////////////////////////////////
//把store中state赋值给当前组件
const mapStateToProps = state => {
  return {
    focus: state.getIn(["header", "focus"]),
    list:state.getIn(['header','list'])
  };
};
//触发更改store的指令
const mapDispatchToProps = dispatch => {
  return {
    toggleFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.toggleFocus());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
