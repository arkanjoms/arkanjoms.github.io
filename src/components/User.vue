<template>
    <div>
        <b-link :href="user.html_url" target="_blank">
            <b-img width="150" height="150" rounded="circle"
                   src="https://avatars2.githubusercontent.com/u/1004876?v=4"></b-img>
        </b-link>
    </div>
</template>

<script>
    export default {
        name: 'ArkUser',
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style scoped>

</style>
