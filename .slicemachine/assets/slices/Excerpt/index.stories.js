import MyComponent from '../../../../slices/Excerpt';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Excerpt'
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
      mock: {"variation":"default","name":"Default","slice_type":"excerpt","items":[],"primary":{"excerpt":[{"type":"paragraph","text":"Consectetur ut nostrud ut irure ea est anim aliqua ea voluptate est sit ad sunt. Exercitation anim non occaecat adipisicing minim aute aliquip minim excepteur labore nostrud irure. Ullamco sunt excepteur fugiat velit nisi exercitation magna elit in nostrud anim incididunt id id.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
