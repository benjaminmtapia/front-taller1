<template>
    <div class="columns" id="agregarActor">
      <div class="column is-two-thirds">
      <section class="section">
        <h1 class="title">Agregar actor</h1>

        <section class="form">
          <div class="field">
            <label class="label">First name</label>
            <div class="control">
              <input name="name" 
                v-model="form.name"  
                class="input" type="text" placeholder="First name">
            </div> 
          </div>

          <div class="field">
            <label class="label">Last name</label>
            <div class="control">
              <input name="name" 
                v-model="form.name"  
                class="input" type="text" placeholder="Last name">
            </div> 
          </div>
        
          
          
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  import {APIService} from '../APIService';
  const API_URL = 'http://localhost:8081';
  const apiService = new APIService();

  export default {
    props: ['postId'],

    data() {
      return {
        firstName: '',
        lastName: '',
        actor: [firstName, lastName]
      }
    },

    methods: {
      onSubmit() {
        apiService.createActor('actor', {actor: this.actor, id: this.postId}).then(post => this.$emit('completed', actor));
      }
    }
  }
</script>