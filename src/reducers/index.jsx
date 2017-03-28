import { List, Map } from 'immutable';
const todoList = List([]);
function reducer(todos=todoList, action) {
	switch(action.type) {
		case 'ADD_TODO':
			return todos.push(Map(action.payload));
		case 'TOGGLE_TODO':
			return todos.map(t => {
				if(t.get('id') === action.payload.id) {
					return t.update('isDone', isDone => !isDone);
				} else {
					return t;
				}
			});
		default:
			return todos;
	}
}

export default reducer;