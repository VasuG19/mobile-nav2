<script lang="ts">
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router'

    export default {
        setup() {
            // Creating a reactive variable to track menu visibility
            let menuVisible = ref(false);

            // Function to toggle the menu visibility
            const toggleMenu = () => {
                // Toggle the menu visibility
                menuVisible.value = !menuVisible.value;

                // Toggle body overflow to prevent scrolling when the menu is open
                const body = document.body;
                body.style.overflow = menuVisible.value ? 'hidden' : 'auto';
            };

            // Function to close the menu when a link is selected
            const closeMenu = () => {
                menuVisible.value = false;
                const body = document.body;
                body.style.overflow = 'auto';
            };

            // Returning reactive data and functions to be used in the template
            return {
                menuVisible,
                toggleMenu,
                closeMenu,
            };
        },
    };
</script>

<template>
    <!-- Push menu -->
    <div class="menu" :class="{ active: menuVisible }">

        <!-- Toggle button to show/hide the menu -->
        <div class="toggle" @click="toggleMenu"><ion-icon name="add-outline"></ion-icon></div>

        <!-- Navigation links -->
            <li @click="closeMenu"><router-link to="/">Home</router-link></li>
            <li @click="closeMenu"><router-link to="/about">About</router-link></li>
            <li @click="closeMenu"><router-link to="/third">Third</router-link></li>
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
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
        transition: left 0.3s ease-in-out;
    }

    /* Styling for the navigation links */
    .menu li {
        list-style: none;
        padding-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer; /* Add cursor pointer to indicate clickable */
    }

    /* Styling for the circular menu item links */
    .menu li a {
        color: black;
        border-radius: 50%;
        transition: 0.5s;
        cursor: pointer;
        display: block; /* Ensures the anchor takes the full width of its container */
        padding: 10px; /* Adds padding for better clickability */
        text-decoration: none; /* Removes the default underline */
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
