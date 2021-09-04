import Vue from 'vue'

export default new Vue({
    methods: {
        usuarioSelecionado(usuario) {
            this.$emit('usuarioSelect', usuario)
        },
        selecionouUsuario(callback) {
            this.$on('usuarioSelect', callback)
        }
    }
})