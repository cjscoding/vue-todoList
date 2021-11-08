<template>
  <!-- html의 form형식은 기본적으로 제출 시 page를 새로고침하기 때문에 이를 막기 위해 -->
  <!-- event.preventDefault();와 같은 의미 (.prevent)-->
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">ID : </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">PW : </label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
//axios는 http 통신 library
//설치는 npm i axios
//브라우저에서 서버로 데이터를 보내기 위해 사용
import axios from "axios";
export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm: function () {
      console.log(this.username, this.password);

      let url = "https://jsonplaceholder.typicode.com/users";
      let data = {
        username: this.username,
        password: this.password,
      };

      //post : data를 생성하거나 조작하기 위해 사용하는 http method
      //REST API 규칙에 의해 아래 url과 data가 보내짐
      axios
        .post(url, data)
        //data 전송 성공 시
        .then(function (response) {
          console.log(response);
        })
        //data 전송 실패 시
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>