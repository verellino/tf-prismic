import MyComponent from '../../../../slices/1stLevelNav';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/1stLevelNav'
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
      mock: {"variation":"default","name":"Default","slice_type":"1st_level_nav","items":[{"secondNavLink":{"link_type":"Web","url":"http://google.com"},"subcategoryTitle":"cultivate bricks-and-clicks niches"},{"secondNavLink":{"link_type":"Web","url":"http://twitter.com"},"subcategoryTitle":"mesh proactive infrastructures"},{"secondNavLink":{"link_type":"Web","url":"http://google.com"},"subcategoryTitle":"e-enable value-added e-markets"},{"secondNavLink":{"link_type":"Web","url":"https://prismic.io"},"subcategoryTitle":"brand e-business web-readiness"},{"secondNavLink":{"link_type":"Web","url":"http://twitter.com"},"subcategoryTitle":"monetize synergistic supply-chains"}],"primary":{"title":[{"type":"paragraph","text":"Esse quis in ad sit ipsum culpa. Cupidatat amet nisi anim sunt qui sunt excepteur exercitation quis.","spans":[]}],"navLink":{"link_type":"Web","url":"http://google.com"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
