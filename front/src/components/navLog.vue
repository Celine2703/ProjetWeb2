<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img :src="logo" alt="logo" height="30">
          </a>
          
            <form class="d-flex">
                <ul class="navbar-nav ml-auto"> 
                    <li class="nav-item"> 
                        <a href="#" class="nav-link">Login</a> 
                    </li> 
                    <li class="nav-item"> 
                        <a href="#" class="nav-link">Sign up</a> 
                    </li> 
                </ul> 
            </form>
        </div>
      </nav>
</template>

<script>
    export default {
        name : 'navLog',
        data() {
            return {
                logo: require('@/assets/logo_efrei.png')
            }
        }
    }
</script>

