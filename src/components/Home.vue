<template>
    <div>
        <ark-user></ark-user>
        <ark-link></ark-link>
        <div class="hello">
            <h1>{{ msg }}</h1>
        </div>
        <ark-repositories></ark-repositories>
        <ark-footer></ark-footer>
    </div>
</template>

<script>
    import ArkUser from './User'
    import ArkRepositories from './Repositories'
    import ArkFooter from './Footer'
    import ArkLink from './Link'

    export default {
        name: 'Home',
        components: {
            ArkUser,
            ArkRepositories,
            ArkFooter,
            ArkLink
        },
        data() {
            return {
                msg: 'Rafael Ramos'
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        }
    }
</script>

<style scoped>
</style>
