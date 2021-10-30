<template>
  <footer>
    <button v-on:click="clearList">Clear All</button>
  </footer>
</template>

<script>
export default {
  methods: {
    clearList: function () {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
button {
  text-decoration-line: underline;
  color: var(--brown-color);
  border: none;
  background-color: var(--beige-color);
  font-size: 17px;
  font-weight: 400;
}
button:hover {
  transform: scale(1.2);
  transition: 0.2s ease-in-out;
}
</style>