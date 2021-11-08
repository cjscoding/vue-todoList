<template>
  <footer>
    <button @click="clearList">Clear All</button>
  </footer>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      clearList: "removeAllItems",
    }),
    // clearList() {
    //   this.$store.commit("removeAllItems");
    // },
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