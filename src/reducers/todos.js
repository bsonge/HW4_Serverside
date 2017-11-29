import {Map, List} from "immutable"

const init = List([]);

const todos = (state=init, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(
        Map({
            id: action.id,
            text: action.text,
            completed: false
          })
        );

    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.get('id') === action.id)
          ? todo.update('completed', completed =>!completed)
          : todo
      )
    default:
      return state
  }
}

export default todos
