<template>
  <section class="nav">
    <h2>Simon Garber</h2>
    <h4>Web Developer</h4>
    <div class="nav-menu">
      <ul class="nav-menu-list">
        <router-link tag="li" to="/about">
          <li class="nav-list-item">About Me</li>
        </router-link>
        <router-link tag="li" to="https://github.com/SimonGarber">
          <li class="nav-list-item">GitHub</li>
        </router-link>
        <router-link tag="li" to="/projects">
          <li class="nav-list-item">Projects</li>
        </router-link>
        <li class="nav-list-item">Experience</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
}

.nav-logo {
  margin: 100px auto;
}

.nav-menu {
  color: white;
}

.nav-menu-list {
  list-style: none;
  padding: 0;
}

.nav-list-item {
  background: #222;
  padding: 10px 20px;
  text-align: center;
  margin: 10px auto;
  cursor: pointer;
  &:hover {
    width: 100%;
  }
}

.nav h2 {
  color: white;
}
.nav h4 {
  color: grey;
}
</style>