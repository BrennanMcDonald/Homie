import React from 'react'
import Grid from './Grid'

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    document.body.onkeydown = this.handleKeyPress
    this.state = {
      layout: [],
      selected: []
    }
  }

  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
 
  addElement() {
    var layout = this.state.layout;
    var id = this.makeid(5);
    layout.push({i: id, x: 4, y: 0, w: 1, h: 2});
    this.setState({
      layout: layout,
      selected: this.addToSelectQueue(id)
    })
  }
 
  addSpace() {
    var layout = this.state.layout;
    var id = "SP-"+this.makeid(5);
    layout.push({i: id, x: 4, y: 0, w: 1, h: 2});
    this.setState({
      layout: layout,
      selected: this.addToSelectQueue(id)
    })
  }

  save() {
    console.log(this.state.layout)
  }

  load() {
    var json_in = prompt("Enter JSON Data:", "[]");
    if (json_in != null) {
      this.setState({
        layout: JSON.parse(json_in)
      })
    } 
  }
  
  layoutChangeHandler(layout) {
    this.setState({
      layout: layout
    })
  }

  addToSelectQueue(elem) {
    var selected = this.state.selected;
    selected.push(elem);
    return selected;
  }

  selectElement(elem) {
    this.setState({
      selected: this.addToSelectQueue(elem)
    });
  }

  deleteElement(elem_id) {
    this.setState({
      layout: this.state.layout.filter(x => x.i !== elem_id)
    })
  }

  handleKeyPress = (event) => {
    if(event.keyCode === 46) {
      this.deleteElement(this.state.selected.pop())
    } else if (event.keyCode === 27) {
      this.setState({
        selected: []
      })
    }
  }

  render() {
    return (
      <div id="FocusHandlerWindow">
        <button onClick={this.addElement.bind(this)}>+</button>
        <button onClick={this.addSpace.bind(this)}>+ Space</button>
        <button onClick={this.save.bind(this)}>Save</button>
        <button onClick={this.load.bind(this)}>Loads</button>

        <Grid
          onLayoutChange={this.layoutChangeHandler.bind(this)}
          layout={this.state.layout}
          selected={this.state.selected}
          elementSelector={this.selectElement.bind(this)}/>
      </div>
    )
  }
}