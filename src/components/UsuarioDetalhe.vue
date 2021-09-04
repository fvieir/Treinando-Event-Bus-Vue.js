<template>
    <div class="usuario-detalhe">
        <h2 v-if="!usuario">Usuario não encontrado</h2>
        <div v-else>
            <h1>Resultado: </h1>
            <hr>
            <h2>ID: {{usuario.id}}</h2> 
            <h2>NOME: {{usuario.nome}}</h2> 
            <h2>IDADE: {{usuario.idade}}</h2> 
        </div>
    </div>
</template>

<script>
import barramento from '@/barramento'
    export default {    
        data() {
            return{
                usuario: null
            }
        },
        created(){
            barramento.selecionouUsuario ( u =>{
                this.usuario = u
            })
        }
    }
</script>

<style >
.usuario-detalhe{
    flex:1;
    border: 1px solid #ccc;
}
</style>