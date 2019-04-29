<template>
  <div>
    <section class="form">

    </section>
  </div>
</template>

<script>
import {APIService} from '../APIService';

const API_URL = 'http://localhost:8081';
const apiService = new APIService();

export default {
  data(){
    return {
      actors: [],
      numberOfActors:0,
    };
  },
  methods: {
    postActor(actor){
      apiService.getActors().then((data) => {
        this.actors = data;
        this.numberOfActors = data.count;
      });
    }
  },

  mounted() {
    this.getActors();
  },
}

</script>
getActorsgetActors