<template>
	<div class="event">
		<a href="#">
			<div class="event-content">
				<div class="event-poster-wrapper">
					<img class="event-poster" :src="poster">
				</div>
				<div class="event-info">
					<h3 class="event-title">{{ title }}</h3>

					<div class="event-detail">
						<div class="event-date">{{ dateFormate }}</div>
						<div class="event-place">{{ venue }}</div>
					</div>

					<span class="event-price btn">{{ price }}</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'event-item',
	props: {
		event: {
			type: Object,
			default: () => {},
		},
		id: {
			type: Number,
		},
		title: {
			type: String,
			default: "",
		},
		venue: {
			type: String,
			default: "",
		},
		poster: {
			type: String,
			default: "",
		},
		date: {
			type: String,
			default: "",
		},
		price: {
			type: Number,
		},
	},
	computed: {
		dateFormate() {
			return moment(this.date).format(' D MMMM, hh:mm') ;
		},
	},
}
</script>

<style lang="scss" scoped>
.event {
	background: #fff;
	border: 1px solid #EDEDED;
	border-radius: 12px;
	box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.05);
	overflow: hidden;
	transition: all .3s linear;

	&:hover {
		box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.15);
	}

	a {
		display: block;
		text-decoration: none;
		color: #000;
	}

	&-content {
		display: flex;
		flex-direction: column;
	}

	&-poster {
		height: auto;
		width: 100%;
	}

	&-info {
		padding: 16px;
	}

	&-title {
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
		margin: 0 0 28px;
	}

	&-detail {
		font-size: 13px;
		line-height: 16px;
		margin-bottom: 20px;
	}

	&-date {
		margin-bottom: 4px
	}

	@media (max-width: 480px) {
		&-content {
			flex-direction: row;
		}
		&-poster {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			width: auto;
			height: 100%;

			&-wrapper {
				overflow: hidden;
				width: 50%;
				max-width: 164px;
				position: relative;
			}
		}
	}
}
</style>
