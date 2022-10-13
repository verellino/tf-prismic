import MyComponent from '../../../../slices/PageText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PageText'
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
      mock: {"variation":"default","name":"Default","slice_type":"page_text","items":[],"primary":{"title":[{"type":"heading1","text":"Enhance 24/7 e-tailers","spans":[]}],"description":[{"type":"paragraph","text":"Sunt deserunt ut consectetur eiusmod minim cillum mollit cillum. Ut est nulla dolore culpa adipisicing eiusmod id ullamco. Velit ipsum anim ullamco in elit voluptate voluptate elit consequat mollit aliquip exercitation consequat.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
