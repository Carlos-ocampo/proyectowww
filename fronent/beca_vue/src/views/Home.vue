<template>
  <div>
    <Login v-if="sessionToken == ''"/>
    <MainView v-else/>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import MainView from "../components/Main.vue";


export default {
  name: "HomeView",
  components: {
    Login,
    MainView
  },
  data() {
    return {
      sessionToken: ""
    }
  },
  created() {
    // take token
    let s_token = localStorage.getItem("token")
    this.sessionToken = s_token ? s_token : ""
    console.log(s_token)
  },
};
</script>
