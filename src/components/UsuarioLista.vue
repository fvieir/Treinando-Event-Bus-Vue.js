<template>
    <div class="usuario-lista">
        <table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="usuarioSelecionado(usuario)" v-for="usuario of usuarios" :key="usuario.id">
                    <td>{{usuario.id}}</td>
                    <td>{{usuario.nome}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import barramento from '@/barramento.js'

    export default {
        props:{usuarios: Array},
        methods:{
            usuarioSelecionado(usuario){
                barramento.usuarioSelecionado(usuario)            
            }
        }
    }
</script>

<style lang="scss" scoped>
    .usuario-lista{
        display: flex;
        flex:1;
    }

    table{  
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #ccc
    }

    th, td {
        padding: 15px;
        border-bottom: 1px solid #ccc;
    }

    tbody tr:hover{
        background-color: rgba(0,0,0,0.1)
    }
</style>