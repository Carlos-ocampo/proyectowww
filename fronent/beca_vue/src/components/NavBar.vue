<template>
  <div class="fixed navbar bg-base-100 ">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Becas HV</a>
    </div>
    <div class="hidden sm:inline-flex mx-4 text-sm breadcrumbs">
      <ul>
        <li><a>Home</a></li>
        <li><a>Documents</a></li>
        <li>Add Document</li>
      </ul>
    </div>
    <div class="sm:hidden dropdown dropdown-content ">
      <label tabindex="0" class="btn btn-ghost rounded-btn"></label>
      <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>

    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'NavBar',
}

</script>