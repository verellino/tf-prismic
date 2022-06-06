import MyComponent from '../../../../slices/Text';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Text'
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
      mock: {"variation":"default","name":"Default","slice_type":"text","items":[],"primary":{"text":[{"type":"paragraph","text":"Minim veniam ut ut cillum sit commodo. Amet adipisicing ad ipsum elit exercitation pariatur aute elit aliquip deserunt veniam. Consequat ut ex deserunt deserunt.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
