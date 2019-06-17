/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'
import { forOfStatement } from '@babel/types';

// 自定义组件
class Student extends Component {
  render() {
    return (
      <View>
        <Text style={styles.stu}>{this.props.name}</Text>
        <Text style={styles.stu}>{this.props.age}</Text>
        <Text style={styles.stu}>{this.props.tel}</Text>
      </View>
    )
  }
}

type Props = {}
export default class App extends Component<Props> {
  constructor () {
    super()
    this.state = {
      star: '★',
      time: new Date().toUTCString(),
      list: [
        {
          name: 'wovert',
          age: 18,
          tel: '136123456789'
        },
        {
          name: 'lingyima',
          age: 20,
          tel: '156123456789'
        },
      ]
    }
    setTimeout(() => {
      this.setState(() => {
        return {
          list: this.state.list.map((item) => {
            return {
              name: item.name + 'xx',
              age: item.age + 10,
              tel: item.tel
            }
          })
        }
      })
    }, 3000)
    setInterval(() => {
      this.setState(() => {
        return {
          time: new Date().toUTCString(),
          star: this.state.star === '' ? '★' : ''
        }
      })
    }, 1000)
  }
  
  foo() {
    alert('加载完毕')
  }

  render() {
    let concatList =  this.state.list.map((item)=>{
      return (
        <Student name={item.name} age={item.age} tel={item.tel} />
      )
    })
    return (
      <View>
        <Text style={{color:'red', fontSize: 50}}>Hello World</Text>
        <Text style={styles.hd}>Hello World</Text>
        <Text style={[styles.hd, styles.wovert]}>Hello World</Text>
        <View>
          <Text style={{color: 'red', fontSize: 60}}>{this.state.star}</Text>
        </View>
        <View>
          <Text>当前时间：{ this.state.time }</Text>
        </View>
        <View>
          {/* 引入本地图片资源 */}
          <Image
            style={{width: 300, height:200, resizeMode:'stretch'}}
            source={require('./images/tiger.jpg')}></Image>
          {/* 引入网络图片：ios仅支持https协议 */}
          {/* 网路图片必须指定宽高 */}
          <Image
            style={{width: 375, height:200, resizeMode: 'cover'}}
            onLoad={this.foo}
            source={{uri:'https://img.static.gqsj.cc/tuan/2019-05-21/1558434347_19470.png@576w_1_99q_1o_5-2ci'}}></Image>
          {/* base64位图片 */}
          <Image
            style={{width: 32, height:32, resizeMode: 'contain'}}
            source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAgCAYAAAAWl4iLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAf1JREFUeNqklskvw1EQxx+prSTUEi6I5cDRktgi4eSKo8S/5iLObjhYggOh9oMtxFKShthbWut3ZH7JLz8zP6/tJJ+knfm97+913sy8Zo2OvRnF8kETqAWVoBB8gzi4BSdgHySlxQHF1wnaQY4QL2YaQB/YAKvgw0+4BAyCCmNnuaALNIJJ8OgEsl0PhcBICqJuq+C1Ia8wvXmY85iuFYEhJ32OcDco9Vl0D47AMX/WrIxT85vjAtCiPEg5mwEXHn8NGOAz8VobWKcdNyvVQSU1Loga9k0ouyetZhKuV3Y7BV59fnacf41kdSRcLgSuQNTiwCLgRqoSEg4KgWgK1RARfMFs5eFECsLvkpOEXwR/KAXhYsEXI+FrKfncNDYtXSelkoTPhEAe6LEQ7lU2cELCB0pZtTOaUaxV8NMc3g/wuNsFHcJD/Ty5tjhltJEq7tRq5YV7pOl03Aa3otSB1T4iXqNNht1DKAY2Tea27VSZu47XtGvG0hJ8k/wZ9K/uQBq24i4Cb+eF/5m3mt3xORlN+BPMpyE8B778hMlO+aawtUOpybQhNGt5kAnerbEVppJZthBe5FK1FjbcbRGf+DnY0YJ+wvR3alqZt0mfa+lfYbIHsCT4F8BTJsKGW/3S9f2Mh5bJVNhwSpI8EmdsFgQshR+5BKmBnm0W/AgwAONSblwC2qC2AAAAAElFTkSuQmCC'}}></Image>
        </View>
        <View>
          { concatList }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hd: {
    color: 'green',
    fontSize: 70
  },
  wovert: {
    backgroundColor: 'yellow'    
  },
  stu: {
    fontSize: 30,
    color: '#000'
  }
})

