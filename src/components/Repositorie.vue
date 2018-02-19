<template>
    <b-list-group-item button @click="selectRepo" class="d-flex justify-content-between align-items-center">
        <span v-if="!repo.fork" class="octicon octicon-repo"></span>
        <span v-if="repo.fork" class="octicon octicon-repo-forked"></span>
        {{repo.name}}
        <span></span>
    </b-list-group-item>
</template>

<script>
    import Img from 'bootstrap-vue/es/components/image/img'

    export default {
        components: {Img},
        name: 'ArkRepositorie',
        props: ['repo'],
        methods: {
            selectRepo() {
                this.$store.dispatch('selectRepo', this.repo)
            }
        }
    }
</script>

<style scoped>

</style>
