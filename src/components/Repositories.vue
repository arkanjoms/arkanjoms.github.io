<template>
    <b-container>
        <b-row>
            <b-col>
                <b-list-group>
                    <ark-repositorie v-for="repositorie in repositories"
                                     :key="repositorie.id"
                                     :repo="repositorie">
                    </ark-repositorie>
                </b-list-group>
            </b-col>
            <b-col>
                <ark-repositorie-detail></ark-repositorie-detail>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import ArkRepositorie from './Repositorie'
    import ArkRepositorieDetail from './RepositorieDetail'

    export default {
        name: 'ArkRepositories',
        components: {
            ArkRepositorie,
            ArkRepositorieDetail
        },
        computed: {
            repositories() {
                return this.$store.state.repositories
            }
        }
    }
</script>

<style scoped>

</style>
