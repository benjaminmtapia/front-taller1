<template>

  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>
            Post Actor
          </h3>
        </div>
        <div>
          <v-content>
            <v-container fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs6>
                        <div id="inputs" class="text-xs-center">
                            <vs-input color="success" label-placeholder="First name" v-model="first_name" :danger="danger1" danger-text="Can't leave empty field."/>
                            <br>
                            <vs-input color="success" label-placeholder="Last name" v-model="last_name" :danger="danger2" danger-text="Can't leave empty field."/>
                            <br>
                            <vs-button color="success" type="gradient" @click="postActor">Crear</vs-button>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
          
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <span></span>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
  import axios from 'axios';

  export default {
    name : 'agregarActor',
    props: ['postId'],

    data() {
      return{
        danger1: false,
        danger2: false, 
        first_name:'',
        last_name:''
      };
    },
    methods:{
      postActor(){
          this.danger1 = false;
          this.danger2 = false;
        if(this.last_name == '' && this.first_name == ''){
          this.danger1 = true;
          this.danger2 = true;
          exit(1);
        }
        else if(this.first_name == ''){
          this.danger1 = true;
          exit(1);
        }
        else if(this.last_name == ''){
          this.danger2 = true;
          exit(1);
        }
        axios.post('http://localhost:8081/actors/create',{
          first_name : this.first_name,
          last_name : this.last_name
        })
        .then(response=>{console.log(response.data)
          this.first_name = "";
          this.last_name = "";
          this.danger1 = false;
          this.danger2 = false;
        })

        this.$vs.notify({
        color: 'success',
        title: `Post actor successful`,
        text: 'The actor has been successfully incorporated into the database, please reload page.'
      })
      }
    }
  }
</script>

<style>
  #inputs{
    width:100%;
    padding: 0 6em;
  }
</style>
