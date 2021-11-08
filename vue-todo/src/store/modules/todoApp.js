const storage = {
    fetch() {
        const arr = [];
        const LS = localStorage;
        if (LS.length > 0) {
            for (let i = 0; i < LS.length; i++) {
                let lsKey = LS.key(i);
                if (lsKey !== "loglevel:webpack-dev-server") {
                    arr.push(JSON.parse(LS.getItem(lsKey)));
                }
            }
        }
        return arr;
    }
};

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, newTodo) {
        const obj = {
            completed: false,
            item: newTodo,
        };
        localStorage.setItem(newTodo, JSON.stringify(obj));
        state.todoItems.push(obj);
    },

    removeOneItem(state, payload) {//payload : {todoItem, index}
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },

    switchOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },

    removeAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
};

export default {
    state,
    getters,
    mutations
};