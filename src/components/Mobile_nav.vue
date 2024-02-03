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
    <!-- Push menu -->
    <div class="menu" :class="{ active: menuVisible }">

        <!-- Toggle button to show/hide the menu -->
        <div class="toggle" @click="toggleMenu"><ion-icon name="add-outline"></ion-icon></div>

        <!-- Navigation links -->
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/third">Third</router-link></li>
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
        background: #333;
        color: white;
        padding: 20px;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
        transition: left 0.3s ease-in-out;
    }

    /* Styling for the close button */
    .close-btn {
        cursor: pointer;
        font-size: 20px;
        margin-bottom: 10px;
    }

    /* Styling for the navigation links */
    .menu ul {
        list-style: none;
        padding-top: 10vh;
        margin: 0;
    }

    .menu li {
        margin-bottom: 10px;
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
