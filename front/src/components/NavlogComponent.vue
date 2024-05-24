<script>
import logo from '../assets/logo.png';

export default {
  name: 'NavlogComponent',
  props: {
    msg: String
  },
  data() {
    return {
      logo
    };
  }
}
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand"><img alt="Vue logo" :src="logo" height="30"></a>
      <form class="d-flex" role="search">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sign in</a>
          </li>
        </ul>
      </form>
    </div>
  </nav>
  <div class="align-content-center"><h1>{{ msg }}</h1></div>
</template>

<style scoped>
/* Ajoutez votre style ici */
</style>
