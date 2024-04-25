
<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <h1>Menus</h1>
    </div>
    <nav>
        <RouterLink to="/drinks">Drinks</RouterLink>
        <br>
        <RouterLink to="/appitizers">Appitizers</RouterLink>
        <br>
        <RouterLink to="/pasta">House-Made Pasta</RouterLink>
        <br>
        <RouterLink to="/pizza">Pizza</RouterLink>
    </nav>
</template>