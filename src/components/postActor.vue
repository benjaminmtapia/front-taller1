<template>
  <div class="agregarActor">
    <h1>POST ACTOR</h1>
    <input type="text" class="form-control" v-model="first_name" placeholder="Nombre">
    <br>
    <input type="text" class="form-control" v-model="last_name" placeholder="Apellido">
    <button type="submit" @click="postActor">Crear</button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name : 'agregarActor',
    props: ['postId'],

    data() {
      return{
        first_name:'',
        last_name:''
      };
    },
    methods:{
      postActor(){
        axios.post('http://localhost:8081/actors/create',{
          first_name : this.first_name,
          last_name : this.last_name
        }).
        then(response=>{console.log(response.data)});
      }
    }
  }
</script>