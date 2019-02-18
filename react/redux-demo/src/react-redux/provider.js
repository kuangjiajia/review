import React from 'react'
import Context from './context'

class Provider extends React.Component {
  constructor(props) {
    super(props)
    const {
      store
    } = props
    this.state = {
      storeState: store.getState(),
      store
    }
  }

  componentDidMount() {
    this.subscribe()
  }

  subscribe() {
    const { store } = this.props

    store.subscribe(() => {
      const newStoreState = store.getState()

      this.setState(providerState => {

        if (providerState.storeState === newStoreState) {
          return null
        }

        return { storeState: newStoreState }
      })
    })

  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider