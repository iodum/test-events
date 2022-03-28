<template>
	<div class="events-page">
		<div class="events">
			<event-item v-for="(event, key) in eventList" :key="key" v-bind="event" />
		</div>

		<div class="load-more">
			<button
				class="btn btn-loader"
				type="button"
				@click="loadNextPage"
				:disabled="eventsLoading"
			>
				<div v-if="eventsLoading" class="loader" />
				<template v-else>
					Загрузить ещё
				</template>
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EventItem from './EventItem.vue'

export default {
  name: 'event-list',
  components: {
    EventItem
  },
	computed: {
		...mapGetters([
			'eventList',
			'eventsLoading'
		]),
	},
	data() {
		return {
			page: 0,
		};
	},
	methods: {
		...mapActions(['getEventPage']),

		loadNextPage() {
			this.page = this.page + 1;

			this.getEventPage(this.page);
		}
	},
	created() {
		this.loadNextPage();
	},
}
</script>

<style lang="scss" scoped>
	.events {
		display: grid;
		grid-gap: 24px 24px;
		grid-template-columns: repeat(auto-fill,minmax(228px,1fr));
		margin-bottom: 50px;
	}

	.load-more {
		text-align: center;
	}

	.loader {
		margin: 0px auto;
		border-radius: 100%;
		border-width: 3px;
		border-style: solid;
		border-color: transparent rgb(0, 0, 0) rgb(0, 0, 0);
		border-image: initial;
		width: 10px;
		height: 10px;
		animation: 2s linear 0s infinite normal none running loader-spin;
	}

	@keyframes loader-spin {
		0% {
			transform:rotate(0deg)
		}
		to {
			transform:rotate(1turn)
		}
	}
</style>
