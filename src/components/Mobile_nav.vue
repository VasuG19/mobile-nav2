<script lang="ts">
    import { ref } from 'vue'
    
    export default {
        setup() {
            // Creating a reactive variable to track menu visibility
            let menuVisible = ref(false);

            // Function to toggle the menu visibility
            const toggleMenu = () => {
                // Toggle the menu visibility
                menuVisible.value = !menuVisible.value;

                if (menuVisible.value) {
                    // Start an interval to automatically close the menu after a specified time
                    setInterval(() => {
                        menuVisible.value = false;
                    }, 20000); // Adjust the time in milliseconds
                }
            };

            // Returning reactive data and functions to be used in the template
            return {
                menuVisible,
                toggleMenu,
            };
        },
    };
</script>

<template>
    <!-- Menu component -->
    <div class="menu" :class="{ active: menuVisible }">
        <!-- Toggle button to show/hide the menu -->
        <div class="toggle" @click="toggleMenu"><ion-icon name="add-outline"></ion-icon></div>

        <!-- Navigation links in a circular pattern -->
        <li style="--i:0;">
            <RouterLink :to="{ path: '/' }" class="nav-link"><ion-icon name="home-outline"></ion-icon></RouterLink>
        </li>
        <li style="--i:1;">
            <RouterLink :to="{ path: '/about' }" class="nav-link"><ion-icon name="information-circle-outline"></ion-icon></RouterLink>
        </li>
        <li style="--i:2;">
            <RouterLink :to="{ path: '/third' }" class="nav-link"><ion-icon name="person-circle-outline"></ion-icon></RouterLink>
        </li>
    </div>
</template>

<style>
    /* Styling for the circular menu */
    .menu {
        position: relative;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
        padding-left: 100px;
    }

    /* Styling for individual menu items */
    .menu li {
        position: absolute;
        left: 0;
        padding-left: 50px;
        list-style: none;
        transform-origin: 150px;
        transition: 0.5s;
        transition-delay: calc(0.1s * var(--i));
        transform: rotate(0deg) translateX(80px);
    }

    /* Active state styling for menu items */
    .menu.active li {
        transform: rotate(calc(360deg / 8 * var(--i)));
    }

    /* Styling for the circular menu item links */
    .menu li a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: rgb(46, 46, 46);
        color: black;
        border-radius: 50%;
        transform: rotate(calc(360deg / -8 * var(--i)));
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
        transition: 0.5s;
    }

    /* Styling for hover state of menu item links */
    .menu li a:hover {
        color: rgb(0, 161, 189);
    }

    /* Styling for active state of router links */
    .nav-link.router-link-exact-active {
        color: rgb(0, 161, 189);
    }

    /* Styling for the toggle button */
    .toggle {
        position: absolute;
        width: 60px;
        height: 60px;
        background: rgb(46, 46, 46);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        border-radius: 50%;
        cursor: pointer;
        font-size: 2em;
        color: rgb(0, 161, 189);
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
        transition: transform 1.25s;
    }

    /* Styling for the toggle button in the active state */
    .menu.active .toggle {
        transform: rotate(315deg);
    }
</style>
