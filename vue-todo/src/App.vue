<template>
  <div id="app" class="container">
    <TodoHeader class="header set-center"></TodoHeader>
    <!-- 하위에서 addTodoItem 메소드 실행되면 addOneItem 메소드 실행 -->
    <TodoInput class="input set-center"></TodoInput>
    <TodoList class="list set-left"></TodoList>
    <TodoFooter class="footer set-center"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  // methods: {
  // addOneItem(todoItem) {
  //   const obj = {
  //     completed: false,
  //     item: todoItem,
  //   };
  //   localStorage.setItem(todoItem, JSON.stringify(obj));
  //   this.todoItems.push(obj);
  // },
  // removeOneItem(todoItem, index) {
  //   localStorage.removeItem(todoItem.item);
  //   this.todoItems.splice(index, 1);
  // },
  // switchOneItem(todoItem) {
  //   localStorage.removeItem(todoItem.item);
  //   todoItem.completed = !todoItem.completed;
  //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  // },
  // removeAllItems() {
  //   localStorage.clear();
  //   this.todoItems = [];
  // },
  // },
  // //vue life cycle에 의해 프로젝트 실행과 동시에 바로 수행됨(hook)
  // //즉, 인스턴스가 작성된 후에 동기적으로 호출
  // created() {
  //   const LS = localStorage;
  //   if (LS.length > 0) {
  //     for (let i = 0; i < LS.length; i++) {
  //       let lsKey = LS.key(i);
  //       if (lsKey !== "loglevel:webpack-dev-server") {
  //         this.todoItems.push(JSON.parse(LS.getItem(lsKey)));
  //       }
  //     }
  //   }
  // },
  components: {
    //ES6에서 object의 key와 value 값이 같으면 한번만 써도 된다.
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: var(--beige-color);
}
.container {
  display: grid;
  grid-template-rows: 1fr 1fr 4fr 1fr;
  justify-content: center;
  margin: 30px 120px;
}
.set-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
i:hover {
  transform: scale(1.2);
  transition: 0.2s ease-in-out;
}
</style>