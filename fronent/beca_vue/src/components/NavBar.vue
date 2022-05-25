<template>
    <div class="fixed navbar bg-base-100 ">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Becas HV</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </div>
</template>
<script>

export default {
  name: 'NavBar',
}

</script>