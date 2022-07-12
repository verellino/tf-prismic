import MyComponent from '../../../../slices/References';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/References'
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
      mock: {"variation":"default","name":"Default","slice_type":"references","items":[],"primary":{"references":[{"type":"paragraph","text":"Pariatur consequat id officia. Adipisicing ex dolore laboris ut Lorem magna tempor. Deserunt voluptate aliqua commodo.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
