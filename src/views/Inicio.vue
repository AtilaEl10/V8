<template>
  <div class="home">
    <!-- CONTENIDO PARA LA VISTA DE PORTADA -->
     <header class="masthead">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
            <div class="titulo col-md-10 col-lg-8 mx-auto">
                <div class="site-heading">
                <h1>V8</h1>
                <span class="subheading bg-dark"> Noticias y reseñas de automóviles </span>
                </div>
            </div>
            </div>
        </div>
      </header>
      <hr class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto mt-2">
          <div class="post-preview">
            <router-link to="/post/1">
              <h2 class="post-title">
                <strong>Chevrolet presenta la totalmente nueva Blazer</strong>
              </h2>
              <h3 class="post-subtitle mt-4">
                Llega&nbsp;como la primera SUV deportiva de la marca
              </h3>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped lang="scss" >
  header {
    background-image: url('../assets/img/home-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
  }
  .titulo {
    margin-top: 200px;
    color: white;
    font-weight: bold;
    h1 {
      font-size: 100px;
    }
    span {
      font-size: 30px;
    }
  }
</style>
