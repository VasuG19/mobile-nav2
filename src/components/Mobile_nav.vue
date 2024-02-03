<script setup lang="ts">
    // Importing necessary functions from Vue
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    // State variables for menu and submenu visibility
    const menuVisible = ref(false);
    const submenuVisible = ref(false);

    // Function to toggle the main menu visibility
    const toggleMenu = () => {
        menuVisible.value = !menuVisible.value;
        submenuVisible.value = false;

        // Toggle body overflow to prevent scrolling when the menu is open
        const body = document.body;
        body.style.overflow = menuVisible.value ? 'hidden' : 'auto';
    };

    // Function to toggle the submenu visibility
    const toggleSubmenu = () => {
        submenuVisible.value = !submenuVisible.value;
    };

    // Function to close both menu and submenu
    const closeMenu = () => {
        menuVisible.value = false;
        submenuVisible.value = false;
        const body = document.body;
        body.style.overflow = 'auto';
    };
</script>

<template>
    <!-- Push menu -->
    <div role="menu" class="menu" :class="{ active: menuVisible }">

        <!-- Toggle button to show/hide the menu -->
        <div role="button" class="toggle" @click="toggleMenu" @keydown.space.prevent="toggleMenu">
            <ion-icon name="add-outline"></ion-icon>
        </div>

        <!-- Navigation links -->
        <ul>
            <!-- Router links for main menu items -->
            <li role="menuitem" @click="closeMenu"><router-link to="/">Home</router-link></li>
            <li role="menuitem" @click="closeMenu"><router-link to="/about">About</router-link></li>
            <li role="menuitem" @click="closeMenu"><router-link to="/third">Third</router-link></li>

            <!-- Submenu with toggle and second-level menu items -->
            <li role="menuitem" @click="toggleSubmenu">
                <a> More <ion-icon name="arrow-down-outline"></ion-icon></a>
                <!-- Second-level menu -->
                <ul v-show="submenuVisible" @click.stop>
                    <li role="menuitem" @click="closeMenu"><router-link to="/history">History</router-link></li>
                    <li role="menuitem" @click="closeMenu"><router-link to="/team">Team</router-link></li>
                </ul>
            </li>
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
        background: rgb(46, 46, 46);
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
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
        position: relative; /* Add relative positioning for submenu */
    }

    /* Styling for the circular menu item links */
    .menu li a {
        display: block;
        width: 100%; /* Make the router-link fill the entire li area */
        color: inherit;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 5vw; 
        padding: 2vh 0; /* Added padding for better clickability */
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
        font-size: 3em;
    }

    .menu.active .toggle {
        transform: rotate(315deg);
    }

    /* Styling to push the content when the menu is open */
    .menu.active {
        left: 0;
    }

   /* Styling for the second-level menu */
    .menu ul ul {
        position: relative; /* Change position to relative */
        top: 100%; /* Position below the parent menu item */
        left: 0;
        display: block; /* Always visible */
        width: 100%;
        background: #1d1d1d;
        padding: 45px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .menu ul ul li {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
        padding: 2vh; 
    }

    /* Adjust the positioning to ensure the submenu is visible */
    .menu li {
        position: relative;
    }

    .menu ul ul {
        top: 100%; /* Position below the parent menu item */
        left: 0;
    }


</style>
