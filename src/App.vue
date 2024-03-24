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
        <RouterLink :to="{ path: '/office' }" class="nav-link">Office</RouterLink>
        <RouterLink :to="{ path: '/history' }" class="nav-link">History</RouterLink>
        <RouterLink :to="{ path: '/team' }" class="nav-link">Team</RouterLink>
      </nav>
  </header>

  <!-- Push Menu component -->
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

/* Page content */
  .intro {
    padding-top: 3vh;
  }

  .content {
    padding-top: 10vh;
  }
/* Page Content */


/* Quiries for responsive navigation */

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
