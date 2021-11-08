<template>
  <section>
    <div>
      <input type="text" v-model="newTodo" @keyup.enter="addTodo" />
      <button @click="addTodo">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <!-- showModal이 true면 생성 -->
    <Modal v-if="showModal" @close="showModal = false">
      <!-- slot tag들 중 name이 header인 요소에 들어감 -->
      <h3 slot="header">
        경고!<i class="fas fa-times" @click="removeModal"></i>
      </h3>
      <h4 slot="body">해야할 일을 입력해주세요.</h4>
      <h4 slot="footer">@copyright todoList</h4>
    </Modal>
  </section>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodo: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        //store에서 해당 메서드(mutations) 실행하기 위해서는 commit해야함
        this.$store.commit("addOneItem", this.newTodo);
        this.newTodo = "";
      } else {
        this.showModal = !this.showModal;
      }
    },
    removeModal() {
      this.showModal = !this.showModal;
    },
  },
  components: {
    //ES6에서 object의 key와 value 값이 같으면 한번만 써도 된다.
    Modal, //Modal : Modal
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
.fa-times {
  float: right;
}
h3,
h4 {
  color: var(--brown-color);
}
</style>