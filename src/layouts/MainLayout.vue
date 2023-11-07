<template >
  <q-layout view="lHh Lpr lFf">
    <q-header >
        <b><i><q-toolbar-title style="text-align: center;">
          INTRODUCE YOURSELF
        </q-toolbar-title></i></b>
    </q-header>
        <q-card class="my-card">
      <q-img src="src\assets\MicrosoftTeams-image (1).png" width="100" height="100">
        <div class="text-subtitle2 absolute-top text-center">
          My Profile
        </div>
        <div class="absolute-bottom">
         <div>DINESH KUMAR SHEGGARI</div> 
          <div>Software Engineer - ltimindtree</div>
        </div>
      </q-img>
      <q-card-actions>
        <q-btn-dropdown class="ddn" label="Click Here to Know More">
          <q-list>
        <q-item clickable v-close-popup @click="event =>$router.push('/dinesh/edu')">
          <q-item-section>
            <q-item-label>Education</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="event =>$router.push('/dinesh/hobbies')">
          <q-item-section>
            <q-item-label>Hobbies</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="event =>$router.push('/dinesh/technicalskills')">
          <q-item-section>
            <q-item-label>Technical Skills</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
        </q-btn-dropdown>
        <!-- <q-btn flat>Hobbies</q-btn> -->

      </q-card-actions>
    </q-card>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  
</template>


<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]


export default defineComponent({
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      // leftDrawerOpen,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }
      onItemClick(){
        console.log("HI");
      }
    }
  }
}
  
)



</script>

<style >
.align{
  text-align: center;
}
.center{
  display: block;
  margin-left: 0%;
  margin-right: 0%;
  border-radius: 70%;
  
}
body{
  background-color: darkgray;
}
#details{
  margin-bottom: 50%;

}
.my-card{
  width:100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: 50px;
  }
.ddn{
  border: 10cap;
  margin-left: auto;
  margin-right: auto;
}
</style>
