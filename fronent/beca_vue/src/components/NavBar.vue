<template>

  <div class="navbar ">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost normal-case text-xl">Becas University </router-link>
    </div>

    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">

        <li tabindex="0" class=" md:hidden dropdown dropdown-end dropdown-hover">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </a>
          <ul class="p-2 bg-base-100 dropdown-content menu shadow rounded-box w-52">
            <li v-for="enlace in enlaces" :key="enlace.id">
              <router-link :to="enlace.url">{{ enlace.name }} CRUD</router-link>
            </li>
          </ul>
        </li>

        <li v-if="sessionToken == ''">
          <router-link to="/login">Acceder</router-link>
        </li>

        <div v-if="!sessionToken == ''" class="text-sm breadcrumbs hidden md:inline">
          <ul>
            <li v-for="enlace in enlaces" :key="enlace.id">
              <router-link :to="enlace.url">{{ enlace.name }} CRUD</router-link>
            </li>
          </ul>
        </div>

        <li v-if="!sessionToken == ''">
          <a @click="logout">Cerrar Sesión</a>
        </li>

      </ul>

    </div>
  </div>
</template>
<script>
import { mapWritableState } from 'pinia'
import { useSessionStore } from "../stores/SessionStore"

export default {
  name: 'NavBar',
  data() {
    return {
      enlaces: [
        { id: 1, url: '/paises', name: 'Paises' },
        { id: 2, url: '/', name: 'Universidades' },
        { id: 3, url: '/', name: 'Becas' }
      ]
    }
  },
  computed: {
    ...mapWritableState(useSessionStore, ['sessionToken'])
  },
  methods: {
    logout: function () {
      // remove token
      localStorage.removeItem('token')
      this.sessionToken = ''
    }
  }
}
</script>