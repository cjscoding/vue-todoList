import Vue from "vue";
import Vuex from "vuex";
// import * as getters from "./getters";
// import * as mutations from "./mutations";
import todoApp from "./modules/todoApp";

//use : vue의 plug-in / vue를 사용하는 모든 영역에 특정 기능을 추가하고 싶을 때
Vue.use(Vuex);

// const storage = {
//     fetch() {
//         const arr = [];
//         const LS = localStorage;
//         if (LS.length > 0) {
//             for (let i = 0; i < LS.length; i++) {
//                 let lsKey = LS.key(i);
//                 if (lsKey !== "loglevel:webpack-dev-server") {
//                     arr.push(JSON.parse(LS.getItem(lsKey)));
//                 }
//             }
//         }
//         return arr;
//     }
// };

//다른 파일에서 store 접근 가능하도록 export
export const store = new Vuex.Store({
    modules: {
        todoApp,
    },
    //==data
    // state: {
    //     todoItems: storage.fetch()
    // },
    // getters: {
    //     storedTodoItems(state) {
    //         return state.todoItems;
    //     }
    // },
    // //==methods
    // mutations: {
    //     addOneItem(state, newTodo) {
    //         const obj = {
    //             completed: false,
    //             item: newTodo,
    //         };
    //         localStorage.setItem(newTodo, JSON.stringify(obj));
    //         state.todoItems.push(obj);
    //     },
    //     removeOneItem(state, payload) {//payload : {todoItem, index}
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index, 1);
    //     },
    //     switchOneItem(state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //     },
    //     removeAllItems(state) {
    //         localStorage.clear();
    //         state.todoItems = [];
    //     },
    // }
    //모듈화
    // getters, //getters : getters
    // mutations, //mutations : mutations
});