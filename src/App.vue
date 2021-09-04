<template>
  <div id="app">
      <usuario-lista :usuarios="usuarios"/>
      <usuario-detalhe/>
    </div>
</template>

<script>
import UsuarioLista from './components/UsuarioLista.vue'
import UsuarioDetalhe from './components/UsuarioDetalhe.vue'

export default {
    name:"app",
    components: {UsuarioLista, UsuarioDetalhe},
    data() {
      return {
        usuarios: [
          {id: 1, nome: "Fabricio", idade: 34},
          {id: 2, nome: "Nath",     idade: 31},
          {id: 3, nome: "Joao",     idade: 40},
          {id: 4, nome: "Pedro",    idade: 50},
          {id: 5, nome: "Alice",    idade: 18}
        ]
      }
    }
}
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
	font-size: 1.2rem;
}

#app div {
	margin: 20px;
}

</style>
