// const addOneItem = (state, newTodo) => {
//     const obj = {
//         completed: false,
//         item: newTodo,
//     };
//     localStorage.setItem(newTodo, JSON.stringify(obj));
//     state.todoItems.push(obj);
// };

// const removeOneItem = (state, payload) => {//payload : {todoItem, index}
//     localStorage.removeItem(payload.todoItem.item);
//     state.todoItems.splice(payload.index, 1);
// };

// const switchOneItem = (state, payload) => {
//     localStorage.removeItem(payload.todoItem.item);
//     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
//     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
// };

// const removeAllItems = state => {
//     localStorage.clear();
//     state.todoItems = [];
// };

// //export 할 게 많을 때는 이렇게 한 번에 가능
// export { addOneItem, removeOneItem, switchOneItem, removeAllItems };