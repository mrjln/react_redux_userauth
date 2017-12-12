import React, { PureComponent } from 'react'

class Title extends PureComponent {
  render() {
    return (
      <h2>{ this.props.content }</h2>
    )
  }
}

export default Title
