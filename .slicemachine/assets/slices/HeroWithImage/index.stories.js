import MyComponent from '../../../../slices/HeroWithImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroWithImage'
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
      mock: {"variation":"default","name":"Default","slice_type":"hero_with_image","items":[],"primary":{"title":[{"type":"heading1","text":"Monetize scalable e-business","spans":[]}],"description":[{"type":"paragraph","text":"Adipisicing est id et amet ut culpa quis consectetur cupidatat ad. Aute cillum anim cillum culpa eiusmod nisi non nostrud excepteur nulla incididunt. Elit exercitation deserunt labore incididunt anim qui culpa aliquip aliqua et esse do esse deserunt irure.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
