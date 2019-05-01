<template lang="html">
  <div>
    <vs-tabs :color="colorx" alignment="center">
      <vs-tab @click="colorx = 'success'" label="Lista de Actores">
        <div class="con-tab-ejemplo">
          <listActors/>
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'success'" label="Agregar Actor">
        <div class="con-tab-ejemplo">
          <postActor/>
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import listActors from './listActors.vue'
import postActor from './postActor.vue'
Vue.use(Vuesax)

export default {
    components: {
        listActors,
        postActor
    },
    data:()=>({
        colorx:'success'
    }),
}
</script>