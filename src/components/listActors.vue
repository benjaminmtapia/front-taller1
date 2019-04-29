<template>
  <div>
    <!--<table class="table table-bordered table-hover"
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
    </table>-->

    <vs-table max-items="10" pagination :data="actors">
      <template slot="header">
        <h3>
          Actores
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          #
        </vs-th>
        <vs-th>
          Nombre
        </vs-th>
        <vs-th>
          Apellido
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].actor_id">
            {{data[indextr].actor_id}}
          </vs-td>

          <vs-td :data="data[indextr].first_name">
            {{data[indextr].first_name}}
          </vs-td>

          <vs-td :data="data[indextr].last_name">
            {{data[indextr].last_name}}
          </vs-td>

        </vs-tr>
      </template>
    </vs-table>


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
        this.numberOfActors = data.count;
      });
    }
  },

  mounted() {
    this.getActors();
  },
}

</script>
