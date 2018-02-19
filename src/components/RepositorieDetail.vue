<template>
    <div>
        <b-card v-if="selectedRepo" :title="selectedRepo.name"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
            <p class="card-text">{{selectedRepo.description}} </p>
            <p>
                <b-badge variant="danger" pill v-b-tooltip.hover title="Open issues!">{{selectedRepo.open_issues}}
                </b-badge>
                <b-badge variant="primary" pill v-b-tooltip.hover title="Watchers!">{{selectedRepo.watchers}}</b-badge>
                <b-badge variant="warning" pill v-b-tooltip.hover title="Forks!">{{selectedRepo.forks}}</b-badge>
            </p>
            <b-link :href="selectedRepo.html_url" variant="primary" target="_blank">Go to repo</b-link>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'ArkRepositorieDetail',
        computed: {
            selectedRepo() {
                return this.$store.state.selectedRepo
            }
        }
    }
</script>

<style scoped>

</style>
