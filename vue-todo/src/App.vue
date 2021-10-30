<template>
  <div id="app" class="container">
    <todo-header class="header set-center"></todo-header>
    <todo-input class="input set-center"></todo-input>
    <todo-list class="list set-left"></todo-list>
    <todo-footer class="footer set-center"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: {
    "todo-header": TodoHeader,
    "todo-input": TodoInput,
    "todo-list": TodoList,
    "todo-footer": TodoFooter,
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