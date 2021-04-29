<template>
    <div>
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="post-heading titulo">
                            <h2 v-if="id == 'simple'"><strong>Bienvenido a la pagina de aministradores</strong></h2>
                            <h2 v-if="id == 'avanzado'"><strong>Esta pagina de administración esta en coccion, intente como administrador simple</strong></h2>                        
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    props: {
        id: String
    }
}
</script>


<style scoped lang="scss" >
  header {
    background-image: url('../assets/img/chevrolet-blazer.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
  }
  .titulo {
    margin-top: 200px;
    color: white;
    font-weight: bold;
    h2 {
      background-color: black;
    }
  }
</style>