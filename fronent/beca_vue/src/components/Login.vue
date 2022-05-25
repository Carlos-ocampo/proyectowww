<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Usuario</span>
            </label>
            <input type="text" placeholder="Nombre de usuario" class="input input-bordered"
              :class="{ 'input-error': userError }" v-model="username" />
          </div>
          <div class="form-control mt-2">
            <label class="label">
              <span class="label-text">Contraseña</span>
            </label>
            <input type="password" placeholder="Clave" class="input input-bordered"
              :class="{ 'input-error': passwordError }" v-model="password" />
            <label class="label">
              <!-- <a href="#" class="label-text-alt link link-hover">Forgot password?</a> -->
              <div v-show="error" class="mt-2 alert alert-error shadow-lg">
                <div>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg> -->
                  <span class="text-center">{{ errorMessage }}</span>
                </div>
              </div>
            </label>
          </div>
          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      error: false,
      errorMessage: "",
      userError: false,
      passwordError: false,
    };
  },
  computed: {},
  methods: {
    login: function () {
      let auto_json = {
        username: this.username,
        password: this.password,
      };
      // let t = this;
      // var options = {
      //   method: "POST",
      //   url: "http://127.0.0.1:8000/api_generate_token/",
      //   // url: 'http://127.0.0.1:8000/api/',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   data: auto_json,
      // };
      if (this.username.trim() == "" || this.password == "") {
        this.error = true;
        this.errorMessage = "Los campos usuario y contraseña son obligatorios";
        this.userError = this.username.trim() == "";
        this.passwordError = this.password == "";
        console.log("ad", this.password, this.password == "");
        return;
      }

      let t = this;
      axios
        .post("http://127.0.0.1:8000/api_generate_token/", auto_json)
        .then((response) => {
          if (response.status == 200) {
            // guardar token
            localStorage.token = response.data.token
            t.$router.push('dashboard')
          } else {
            t.error = true;
            t.errorMessage =
              "Las credenciales no son correctas, revisa por favor";
          }
        })
        .catch(function (error) {
          if (error.response.status == 400) {
            t.error = true;
            t.errorMessage =
              "Las credenciales proporcionadas no son correctas, por favor revise";
          } else {
            t.error = true;
            t.errorMessage =
              "Por el momento esta aplicación no se encuentra en servicio, tenemos problemas para conectarnos";
          }
        });
    },
  },
};
</script>
