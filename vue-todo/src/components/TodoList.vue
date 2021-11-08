<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem">
        <div class="check-box">
          <i
            class="fas fa-check"
            @click="toggleStatus({ todoItem, index })"
            :class="{ checkIcon: todoItem.completed }"
          ></i>
          <span :class="{ completed: todoItem.completed }">
            {{ todoItem.item }}
          </span>
        </div>
        <button @click="removeItem({ todoItem, index })">
          <i class="far fa-trash-alt"></i>
        </button>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  // props: ["propsdata"],
  methods: {
    ...mapMutations({
      removeItem: "removeOneItem", //파라미터 넘겨주지 않아도 템플릿에서 보낸 파라미터 파악해서 알아서 보냄
      toggleStatus: "switchOneItem", //but, 템플릿에서 스토어와 꼭 파라미터 맞춰주기!
    }),
    // removeItem(todoItem, index) {
    //   this.$store.commit("removeOneItem", { todoItem, index });
    // },
    // toggleStatus(todoItem, index) {
    //   this.$store.commit("switchOneItem", { todoItem, index });
    // },
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // },
    ...mapGetters(["storedTodoItems"]),
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
/* 리스트 아이템 트랜지션 */
.list-enter-active,
.list-leave-active {
  transition: all 0.7s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>