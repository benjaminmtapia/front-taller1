<template>
  <div>
    <h1>Actors ()</h1>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="actor in actors" v-bind:key="actor">
          <th>{{actor.actor_id}}</th>
          <th>{{actor.first_name}}</th>
          <td>{{actor.last_name}}</td>
          <td>
          </td>
        </tr>
      </tbody>
    </table>
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
    getActors(){
      apiService.getActors().then((data) => {
        this.actors = data;
        console.log(data);
        this.numberOfActors = data.count;
      });
    }
  },

  mounted() {
    this.getActors();
  },
}

</script>
