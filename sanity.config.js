import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from "./deskStructure";
//import {theme} from 'https://themer.sanity.build/api/hues?default=c1c1bf;300&primary=787878;300&transparent=c1c1bf;300&positive=43d675;300&caution=fbd024;200&lightest=fafaf9&darkest=111'
import {Logo} from "./studio/Logo";

export default defineConfig({
  name: 'default',
  title: 'base',
  projectId: 'zbhr2t9j',
  dataset: 'production',
  //theme: theme,
  plugins: [deskTool({
    structure: deskStructure
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components:{
      logo: Logo
    }
  }
})
