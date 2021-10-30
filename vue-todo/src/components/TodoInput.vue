<template>
  <section>
    <form>
      <input type="text" v-model="newTodo" autofocus />
      <button v-on:click="addTodo">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo: function () {
      let obj = {
        completed: false,
        item: this.newTodo,
      };
      if (this.newTodo !== "") {
        localStorage.setItem(this.newTodo, JSON.stringify(obj));
      }
    },
  },
};
</script>

<style scoped>
*:focus {
  outline: none;
}
input {
  border-style: none;
  padding: 10px 20px;
  border-radius: 10px 0 0 10px;
}
button {
  border-style: none;
  border-radius: 0 10px 10px 0;
  padding: 10px 15px;
  background-color: var(--brown-color);
  color: var(--beige-color);
}
</style>