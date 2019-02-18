import React from 'react'
import Context from './context'

const connect = (mapStateToProps, mapDispatchToProps) => {
  return NewComponent => {
    return class extends React.Component {
      renderWrappedComponent(value) {
        const {
          storeState,
          store
        } = value
        let wrapperProps = this.props

        const _state = mapStateToProps(storeState)
        let _dispatch
        if (mapDispatchToProps) {
          _dispatch = mapDispatchToProps(store.dispatch)
        }

        const newProps = Object.assign(_state, _dispatch, wrapperProps)
        console.log(newProps)
        return <NewComponent {...newProps} />
      }
      render() {
        return (
          <Context.Consumer>
            {
              this.renderWrappedComponent.bind(this)
            }
          </Context.Consumer>
        )
      }
    }
  }
}

export default connect