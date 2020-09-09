<template>
	<nuxt-link :to="`/videos/${item.id}`">
		<div class="vid-card">
			<p>{{ item.snippet.title }}</p>
			<img :src="item.snippet.thumbnails.high.url" :alt="item.snippet.title">
		</div>
	</nuxt-link>
</template>

<script>
	export default {
		name: 'VideoCard',
		props: {
			item: Object
		},
	}
</script>

<style lang="scss" scoped>
.vid-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all .1s linear;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
  cursor: pointer;

	&:hover {
		transform: scale(1.01);
		box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
	}

	img {
		max-width: 200px;
	}

}
.vid-card > .title {
  margin: 0;
}

.vid-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>