import React from 'react'

export default class ActionBar extends React.Component {
    render() {
        return (
            <div id="ActionBar">
                <button onClick={this.props.addElement.bind(this)}>+</button>
                <button onClick={this.props.save.bind(this)}>Save</button>
                <button onClick={this.props.load.bind(this)}>Loads</button>
            </div>
        )
    }
}