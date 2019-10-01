import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from "../../actions";

class Todo extends Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
    //this.handleToggleTodo = this.handleToggleTodo.bind(this)
  }

  handleToggleTodo = (id) => {
    this.props.toggleTodo(id)
  }

  render(){
    return(
      <li 
        onClick={() =>this.handleToggleTodo(this.props.id)} 
        key={this.props.id}
      >
        {this.props.id} - {this.props.text}
      </li>
    )
  }
}

export default connect(null, {toggleTodo})(Todo)
