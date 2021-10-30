<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="todoItem">
        <div class="check-box">
          <i
            class="fas fa-check"
            v-on:click="toggleStatus(todoItem)"
            v-bind:class="{ checkIcon: todoItem.completed }"
          ></i>
          <span v-bind:class="{ completed: todoItem.completed }">
            {{ todoItem.item }}
          </span>
        </div>
        <button v-on:click="removeItem(todoItem, index)">
          <i class="far fa-trash-alt"></i>
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  //vue life cycle에 의해 프로젝트 실행과 동시에 바로 수행됨(hook)
  //즉, 인스턴스가 작성된 후에 동기적으로 호출
  created: function () {
    let LS = localStorage;
    if (LS.length > 0) {
      for (let i = 0; i < LS.length; i++) {
        let lsKey = LS.key(i);
        if (lsKey !== "loglevel:webpack-dev-server") {
          this.todoItems.push(JSON.parse(LS.getItem(lsKey)));
        }
      }
    }
  },
  methods: {
    removeItem: function (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleStatus: function (todoItem) {
      localStorage.removeItem(todoItem.item);
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
}
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid var(--brown-color);
  color: var(--brown-color);
  font-weight: 700;
}
button {
  border-style: none;
  background-color: var(--beige-color);
  color: var(--brown-color);
}
.fa-check {
  margin-right: 3px;
}
.checkIcon {
  opacity: 0.5;
}
.completed {
  text-decoration-line: line-through;
  opacity: 0.5;
}
</style>