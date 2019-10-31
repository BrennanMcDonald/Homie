import React from 'react'
import pretty from 'pretty'

export default class Grid extends React.Component {
  render() {
    return (
      <div className="result-modal">
        <textarea defaultValue={pretty(this.props.text)} style={{maxWidth:"100%", width:"100%"}} rows="20" />
      </div>
    )
  }
}