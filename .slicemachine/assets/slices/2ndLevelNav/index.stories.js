import MyComponent from '../../../../slices/2ndLevelNav';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/2ndLevelNav'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"2nd_level_nav","items":[],"primary":{"title":[{"type":"heading1","text":"Optimize dynamic e-business","spans":[]}],"navLink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
