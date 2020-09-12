<template>
  <v-container h-collapse>
    <v-row dense>
      <VideoCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :data-index="index"
      />
    </v-row>
  </v-container>
</template>
<script>
import VideoCard from '@/components/VideoCard.vue'
export default {
  head() {
    return {
      title: 'Original Redhed',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Youtube channel for Redhed - 90\'s London band, originators of live drum & bass.'
        }
      ]
    }
  },
  async asyncData({ $axios, error }) {
    try {
      // const { data } = await $axios.get( 'http://localhost:3000/items' )
      const { data } = await $axios.get( 'http://my-json-server.typicode.com/powellian/placeborepo/items' )
      return {
        items: data
      }
    } catch(e) {
      error({
        statusCode: 503,
        message: 'Whoops: 503'
      })
    }
  },
  components: {
    VideoCard
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
