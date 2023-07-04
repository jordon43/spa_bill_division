<script setup>

</script>

<template>
    <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <router-link class="navbar-brand left-item" to="/">Home</router-link>
        <router-link class="navbar-brand" to="/createPerson">Добавить пользователя</router-link>
        <router-link class="navbar-brand" to="/createFood">Добавить позицию</router-link>
        <router-link class="navbar-brand right-item" to="/takeResult">Результат</router-link>
    </nav>
</template>

<style scoped lang="sass">

nav
    .left-item
        padding-left: 10%
    .right-item
        padding-right: 10%
    a
        color: #abb2bf
    a:hover
        color: white

</style>