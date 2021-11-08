<template>
  <div>
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
//components 폴더의 AppHeader 파트 vue 파일을 import해서 AppHeader라는 변수에 할당
import AppHeader from "./components/AppHeader.vue";

export default {
  //컴포넌트를 재사용할 수 있는데 여러 개의 컴포넌트에서 동일한 값을 참조하면 에러가 날 수 있기 때문에
  //아래와 같이 항상 새로운 객체로 반환하는 형식으로 데이터를 지정해주어야 한다.
  //즉, 컴포넌트 간에 데이터를 공유하지 않도록 하는 것!
  data: function () {
    return {
      str: "header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewStr: function () {
      this.str = "hi";
    },
  },
};
</script>

<style>
</style>