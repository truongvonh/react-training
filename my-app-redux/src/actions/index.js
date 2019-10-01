
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    completed: false
  }
};


export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export const setVisibleFilter = (filter) => {
  return {
    type : 'VISIBLE_FILTER',
    filter
  }
};
