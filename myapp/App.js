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
  View
} from 'react-native'

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
          time: new Date().toUTCString()
        }
      })
    }, 1000)
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
          <Text>当前时间：{ this.state.time }</Text>
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

