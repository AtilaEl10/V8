<template>
  <div class="hello">
     <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-light" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <!-- MENU DE NAVEGACION -->
                <ul class="nav navbar-nav ml-auto" id="menu-v8">
                    <li class="nav-item" role="presentation">
                      <router-link to="/">Portada</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                     <router-link to="/sobremi">Sobre mí</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/contacto">Contacto</router-link>
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/post/1">Último post</router-link>
                    </li>
                </ul>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
