<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Test</b-navbar-brand>
      <b-nav-item to="/login">Login</b-nav-item>
      <b-nav-item href="/login">Link</b-nav-item>

        <!-- <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">HomePage</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
    <!-- routes will be rendered here -->
    <router-view />
    <Register />
  </div>
</template>
}
<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
main {
  text-align: center;
  margin-top: 40px;
}
header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
