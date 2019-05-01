<template>
  <div>
    <vs-table max-items="10" pagination :data="actors">
      <template slot="header">
        <h3>
          Actors list
        </h3>
      </template>
      <template slot="thead">
        <vs-col vs-w="2">
          #
        </vs-col>
        <vs-col vs-w="3">
          First name
        </vs-col>
        <vs-col vs-w="3">
          Last name
        </vs-col>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-col vs-w="2" :data="data[indextr].actor_id">
            {{data[indextr].actor_id}}
          </vs-col>

          <vs-col vs-w="3" :data="data[indextr].first_name">
            {{data[indextr].first_name}}
          </vs-col>

          <vs-col vs-w="3" :data="data[indextr].last_name">
            {{data[indextr].last_name}}
          </vs-col>
          
          <template class="expand-user" slot="expand">
            <div class="con-expand-users">



              <template>
                <div>
                  <vs-table max-items="5" pagination :data="data[indextr].films">
                    <template slot="header">
                      <h3>
                        Movies list
                      </h3>
                    </template>
                    <template slot="thead">
                      <vs-col vs-w="2">
                        Title
                      </vs-col>
                      <vs-col vs-w="3">
                        Description
                      </vs-col>
                      <vs-col vs-w="1">
                        Release year
                      </vs-col>
                      <vs-col vs-w="1">
                        Rating
                      </vs-col>
                      <vs-col vs-w="2">
                        Special features
                      </vs-col>
                      <vs-col vs-w="2">
                        Length
                      </vs-col>
                      <br>
                    </template>

                    <template slot-scope="{data}">
                      <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-col vs-w="2" :data="data[indextr].title">
                          {{data[indextr].title}}
                        </vs-col>

                        <vs-col vs-w="3" :data="data[indextr].description">
                          {{data[indextr].description}}
                        </vs-col>

                        <vs-col vs-w="1" :data="data[indextr].release_year">
                          {{data[indextr].release_year}}
                        </vs-col>

                        <vs-col vs-w="1" :data="data[indextr].rating">
                          {{data[indextr].rating}}
                        </vs-col>
                        <vs-col  vs-w="2 " :data="data[indextr].special_features">
                          {{data[indextr].special_features}}
                        </vs-col>
                        <vs-col vs-w="2" :data="data[indextr].length">
                          {{data[indextr].length}}
                        </vs-col>
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
.vs-table--tbody-table tr {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
}
.vs-col{
  padding-top:10px !important;
}
.vs-tabs--content {
  align:center;
  width:800px;
  float:center;
}
</style>
