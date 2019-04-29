<template lang="html">
  <div>
    <vs-tabs :color="colorx">
      <vs-tab @click="colorx = 'success'" label="Lista de actores">
        <div class="con-tab-ejemplo">
          <listActors/>
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'danger'" label="Agregar actor">
        <div class="con-tab-ejemplo">
          <postActor/>
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'warning'" label="Warning">
        <div class="con-tab-ejemplo">
          Warning
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'dark'" label="Dark">
        <div class="con-tab-ejemplo">
          Dark
        </div>
      </vs-tab>
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" label="RGB | HEX">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import listActors from './listActors.vue'
import postActor from './postActor.vue'
import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
Vue.use(Vuesax)

export default {
    components:{
        listActors,
        postActor
    },
  data:()=>({
    colorx:'success'
  }),
}
</script>