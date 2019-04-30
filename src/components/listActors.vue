<template>
  <div>
    <vs-table max-items="10" pagination :data="actors">
      <template slot="header">
        <h3>
          Lista de actores
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
          
          <template class="expand-user" slot="expand">
            <div class="con-expand-users">



              <template>
  <div>
    <vs-table max-items="5" pagination :data="actors">
      <template slot="header">
        <h3>
          Lista de peliculas
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



              <!--
                <div class="con-btns-user">
                <div class="con-userx">

                  <vs-avatar :badge="tr.id" size="45px" :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`"/>
                  <span>
                    {{ tr.name }}
                  </span>
                </div>

                <div>
                  <vs-button vs-type="border" size="small" icon="phone_in_talk"></vs-button>
                  <vs-button vs-type="gradient" size="small" color="success" icon="send"></vs-button>
                  <vs-button vs-type="flat" size="small" color="danger" icon="delete_sweep"></vs-button>
                </div>
              </div>
              <vs-list>
                <vs-list-item icon="mail" title="Email" :subtitle="tr.email"></vs-list-item>
                <vs-list-item icon="check" title="Website" :subtitle="tr.website"></vs-list-item>
              </vs-list>
              -->
            </div>
          </template>

        </vs-tr>
      </template>
    </vs-table>


  </div>
</template>

<script>
import {APIService} from '../APIService';

const apiService = new APIService();

export default {
  data(){
    return {
      actors: [],
      films: []
    };
  },
  methods: {
    getActors(){
      apiService.getActors().then((data) => {
        this.actors = data;
      });
    },
    getFilms(){
      apiService.getFilms().then((data) => {
        this.films = data;
      });
    }
  },

  mounted() {
    this.getActors();
    this.getFilms();
  },
}

</script>

<style lang="stylus">
.con-expand-users
  .con-btns-user
    display flex
    padding 10px
    padding-bottom 0px
    align-items center
    justify-content space-between
    .con-userx
      display flex
      align-items center
      justify-content flex-start
  .list-icon
    i
      font-size .9rem !important
</style>
