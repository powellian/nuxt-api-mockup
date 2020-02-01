<template>
	<div class="slim-wrapper">
		<p>{{ item.snippet.title }}</p>
		<p>{{ item.snippet.description }}</p>
		<iframe width="560" height="315" :src="`https://www.youtube.com/embed/${item.snippet.videoId}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
</template>

<script>
import EventService from '@/services/GetAPI.js'

export default {
	name: 'idComponent',
	head(){
		return {
			title: this.item.snippet.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.item.snippet.title
				}
			]
		}
	},
	// async asyncData({ $axios, error, params }) {
	// 	try {
	// 		const { data } = await $axios.get(
	// 			// `http://localhost:3000/items/${params.id}`
	// 			`http://my-json-server.typicode.com/powellian/placeborepo/items/${params.id}`
	// 		)
	// 		return {
	// 			item: data
	// 		}
	// 	} catch(e) {
	// 		error({
	// 			statusCode: 503,
	// 			message: `Whoops unable to fetch video: ${params.id}`
	// 		})
	// 	}
	// }
}
</script>

<style lang="scss" scoped>

</style>