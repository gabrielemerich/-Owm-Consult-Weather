const events = new Vue();
Vue.component("form-cad", {
  template: `<div class="card-body">
    <form>
      <div class="row">
        <div class="col-md-5">
          <div class="form-group">
              <label class="bmd-label-floating">City,Country</label>
              <input type="text" id="nome" v-model="nome" @blur="buscarCidade()" class="form-control">
           
            </select>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-group">
          <label for="lat">Latitude</label>
            <input type="text" id="latitude" v-model="latitude" class="form-control" disabled>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="lon">Longitude</label>
            <input type="email" v-model="longitude" class="form-control" disabled>
          </div>
        </div>
      </div>
    
      <button v-on:click.prevent="saveCidade()"  v-bind:disabled="visible" class="btn btn-primary btn-round">
        <i class="material-icons">save</i> SAVE
      </button>
      <div class="clearfix"></div>
    </form>
  </div>`,
  data: function () {
    return {
      id: null,
      nome: null,
      latitude: null,
      longitude: null,
      cod_pais: null,
      populacao: null,
      objs: null,
      visible: true
    }

  },
  methods: {
    buscarCidade: async function () {
      if(this.nome != null && this.nome != '') {
        let x = await getByName(this.nome).then(
          response => {
            this.visible = false;
            return response;
            
          },
          error => {
            this.visible = true;
            showNotification('top', 'right', 'danger', '<b>Invalid City,Country</b> - not consists our records.');
            this.latitude = null;
            this.longitude = null;

          });
          console.log("data"+ x.data);
          this.id = x.data.city.id;
          this.nome = x.data.city.name;
          this.populacao = x.data.city.population;
          this.cod_pais = x.data.city.country;
          this.latitude = x.data.city.coord.lat;
          this.longitude = x.data.city.coord.lon;
      }
      else{
        this.visible = true;
      }
    },

    saveCidade: function(){
      let cidade = {
        id: this.id,
        nome: this.nome,
        latitude: this.latitude,
        longitude: this.longitude,
        cod_pais: this.cod_pais,
        populacao: this.populacao,
      }
      events.$emit('save-cidade',cidade);

      addCidade(cidade).then(
        response => {
          showNotification('top', 'right', 'success', '<b>Included City,Country</b> - success!');
          return response;
          
        },
        error => {
          this.visible = true;
          //showNotification('top', 'right');
          this.latitude = null;
          this.longitude = null;

        });
    }
  }
})