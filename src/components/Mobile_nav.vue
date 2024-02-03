<script setup lang="ts">
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router'

    const menuVisible = ref(false);

    const toggleMenu = () => {
        menuVisible.value = !menuVisible.value;

        // Toggle body overflow to prevent scrolling when the menu is open
        const body = document.body;
        body.style.overflow = menuVisible.value ? 'hidden' : 'auto';

        // Close the menu automatically after 20 seconds if it is opened
        if (menuVisible.value) {
            setTimeout(() => {
                closeMenu();
            }, 20000); // 20 seconds in milliseconds
        }
    };

    const closeMenu = () => {
        menuVisible.value = false;
        const body = document.body;
        body.style.overflow = 'auto';
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    };
</script>


<template>
    <!-- Push menu -->
    <div role="menu" class="menu" :class="{ active: menuVisible }" @keydown.prevent="handleKeyPress">

        <!-- Toggle button to show/hide the menu -->
        <div role="button" class="toggle" @click="toggleMenu" @keydown.space.prevent="toggleMenu">
            <ion-icon name="add-outline"></ion-icon>
        </div>

        <!-- Navigation links -->
        <ul>
            <li role="menuitem" @click="closeMenu"><router-link to="/">Home</router-link></li>
            <li role="menuitem" @click="closeMenu"><router-link to="/about">About</router-link></li>
            <li role="menuitem" @click="closeMenu"><router-link to="/third">Third</router-link></li>
        </ul>
    </div>
</template>


<style>
    /* Styling for the push menu */
    .menu {
        position: fixed;
        top: 0;
        left: -100%; /* Initially off-screen */
        width: 100%;
        height: 100%;
        background: #1d1d1d;
        color: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        transition: left 0.3s ease-in-out;
    }

    /* Styling for the navigation links */
    .menu ul {
        list-style: none;
        padding-top: 10vh;
        margin: 0;
    }

    .menu li {
        padding: 10px 0;
        display: flex;
        flex-direction: column; /* Set the flex-direction to column */
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    /* Styling for the circular menu item links */
    .menu li a {
        display: block;
        width: 100%; /* Make the router-link fill the entire li area */
        color: inherit;
        font-size: large;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.3s ease;
        padding: 10px; /* Added padding for better clickability */
        border-bottom: 1px solid rgba(255, 255, 255, 0.5); /* Add a border between each link */
    }

    /* Styling for hover state of menu item links */
    .menu li a:hover {
        color: rgb(0, 161, 189);
    }

    /* Styling for active state of router links */
    .menu li a.router-link-exact-active {
        color: rgb(0, 161, 189);
    }

    /* Styling for the toggle button */
    .toggle {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 60px;
        height: 60px;
        background: rgb(46, 46, 46);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        border-radius: 50%;
        cursor: pointer;
        z-index: 9999;
        color: rgb(0, 161, 189);
        transition: transform 1.25s;
        font-size: 2em;
    }

    .menu.active .toggle {
        transform: rotate(315deg);
    }

    /* Styling to push the content when the menu is open */
    .menu.active {
        left: 0;
    }
</style>
