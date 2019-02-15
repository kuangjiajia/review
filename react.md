	### React复习———api

#### ref

```jsx
import React from 'react'

export default class RefDemo extends React.Component {
  constructor(props) {
    super(props)
    this.objRef = React.createRef()
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.refString.textContent = 123
      this.refMe.textContent = 456
      this.objRef.current.textContent = 789
    }, 1000)
  }
  render() {
    return (
      <>
        <p ref="refString"></p>
        <p ref={e => this.refMe = e}></p>
        <p ref={this.objRef}></p>
      </>
    )
  }
}
```

#### forwardRef

```jsx
import React from 'react'

//直接组件传递ref用的
const TargetComponent = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} />
))

export default class Comp extends React.Component {
  constructor() {
    super()
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.ref.current.value = 'ref get input'
  }

  render() {
    return <TargetComponent ref={this.ref} />
  }
}
```

