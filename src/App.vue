<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Menu from './components/Mobile_nav.vue'
</script>


<template>
  <!-- This is the main layout -->
  <header>
      <nav>
        <!-- Navigation links -->
        <RouterLink :to="{ path: '/' }" class="nav-link">Home</RouterLink>
        <RouterLink :to="{ path: '/about' }" class="nav-link">About</RouterLink>
        <RouterLink :to="{ path: '/third' }" class="nav-link">Third</RouterLink>
      </nav>
  </header>

  <!-- Floating nav component -->
  <div class="floating-menu">
  </div>

  <Menu/>
  
  <!-- Introduction section -->
  <div class='intro'>
    <HelloWorld />
  </div>

  <!-- Router view for dynamic content -->
  <RouterView class="content" />
</template>




<style scoped>

/* Large screen Nav */
  header {
    line-height: 1.5;
    min-height: 10vh;
  }

  nav {
    width: 100%;
    font-size: 20px;
    text-align: center;
  }

  .nav-link {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    color: var(--color-text);
    font-weight: 700;
  }

  .nav-link.router-link-exact-active {
    color: rgb(0, 161, 189);
  }

  .nav-link.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a:first-of-type {
    border: 0;
  }

  nav a:hover {
        color: rgb(0, 161, 189);
    }

/* Large screen Nav */

/* Mobile Nav */
  .floating-menu {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 20px; /* Adjust margin as needed */
    z-index: 1000; /* Adjust the z-index as needed */
  }

  .intro {
    padding-top: 3vh;
  }

  .content {
    padding-top: 10vh;
  }
/* Mobile Nav */

  @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .menu, .toggle {
      display: none;
    }
  }
</style>
