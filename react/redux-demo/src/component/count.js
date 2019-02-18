import React from 'react'
import {
  connect
} from '../react-redux/index'
import {
  add,
  dec,
  thunkTest
} from './action'

class Count extends React.Component {
  constructor(props) {
    super(props)
  }
  addClick() {
    this.props.add(1)
  }
  decClick() {
    this.props.dec(1)
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.props.thunk(10)
    }, 2000)
  }
  render() {
    return (
      <>
        <div>{this.props.count}</div>
        <button onClick={this.addClick.bind(this)}>+</button>
        <button onClick={this.decClick.bind(this)}>-</button>
      </>
    )
  }
}


const mapStateToProps = state => ({ count: state })
const mapDispatchToProps = dispatch => {
  return {
    add: v => dispatch(add(v)),
    dec: v => dispatch(dec(v)),
    thunk: num => dispatch(thunkTest(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)