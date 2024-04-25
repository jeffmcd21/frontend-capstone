
<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <nav>
            <RouterLink to="/drinks/cocktails">Cocktails</RouterLink>
            <br/>
            <RouterLink to="/drinks/beers">Beers</RouterLink>
            <br/>
            <RouterLink to="/drinks/wine">Wine</RouterLink>
            <br/>
            <RouterLink to="/menus"><button>Go Back</button></RouterLink>
        </nav>
    </div>
</template>