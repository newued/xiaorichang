import React, { Component } from 'react'
import {XiguanItem,ImgXiguanItem,NameXiguanItem,DayfinishedXiguanItem} from './style'
export default class xiguanItem extends Component {
  render() {
    return (
      <XiguanItem>
        <ImgXiguanItem>
        {this.props.img}
        </ImgXiguanItem>
        <NameXiguanItem>
        {this.props.name}
        </NameXiguanItem>
        <DayfinishedXiguanItem>
        {this.props.days}  
        </DayfinishedXiguanItem>
      </XiguanItem>
    )
  }
}
