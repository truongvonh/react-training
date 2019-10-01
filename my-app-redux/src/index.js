import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
// components
import {rootreducer} from './reducers'
import AddTodo from './container/add_todo/Add_todo'
import FilterList from './container/filter_list'
import TodoList from './container/todo_list'

const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <AddTodo/>
        <FilterList/>
        <TodoList/>
      </Provider>
    )
  }
}

// render(
//   <Provider store={store}>
//     <App/>
//   </Provider>, document.getElementById('root')
// );


ReactDOM.render(<App />, document.getElementById('root'));


