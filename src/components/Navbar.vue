<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
      console.log(this.isActive)
    }
  }
}
</script>

<template>
    <div class="btn_show">
        <BootstrapIcon
            @click="toggleClass();"
            class="icon-list"
            :class="{ show_nav: !isActive }"
            icon="list"
            variant="light"
            />
      <BootstrapIcon
          class="icon-x"
          @click="toggleClass();"
          :class="{ show_nav: isActive }"
          icon="x"
          variant="light"
          />
    </div>
    <nav :class="{show_nav: isActive}" class="navbar bg-dark border-bottom border-bottom-dark hide_nav" data-bs-theme="dark">
        <router-link class="navbar-brand left-item" to="/">Home</router-link>
        <router-link class="navbar-brand" to="/createPerson">Добавить пользователя</router-link>
        <router-link class="navbar-brand" to="/createFood">Добавить позицию</router-link>
        <router-link class="navbar-brand right-item" to="/takeResult">Результат</router-link>
    </nav>
</template>

<style scoped lang="sass">
.btn_show
  display: none
  background-color: #212529
  border-bottom: #505050 1px solid

nav
    .left-item
        padding-left: 10%
    .right-item
        padding-right: 10%
    a
        color: #abb2bf
    a:hover
        color: white

.hide_show
  font-size: 100px

.icon-list
  font-size: 40px
  padding-top: 5px

.icon-x
  margin-bottom: 0
  font-size: 50px


@media screen and (max-width: 1023px)
  .btn_show
    display: block !important

  nav.hide_nav
    display: none !important

  nav.show_nav
    padding: 0 !important
    display: block !important
    a
      border-bottom: #505050 1px solid
      margin-right: 0 !important
      display: block !important
    .left-item
      padding-left: 0 !important
    .right-item
      padding-right: 0 !important

  svg.show_nav
    display: block

  svg
    display: none
</style>