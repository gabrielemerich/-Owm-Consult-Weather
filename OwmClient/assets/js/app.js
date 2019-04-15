
new Vue({
    el: '#app',
    data () {
      return {
        cidades: null,
        cidades_forecast: null,
        isHidden: false
      }
    },
    mounted () {
        getCidades().then(response => (this.cidades = response.data))
        events.$on('save-cidade', data => {
          this.cidades.push(data);
        });
    },
    methods: {
      forecastByid: function(id){
        this.isHidden = true;
        getByForecast5(id).then(
          response => {
            this.cidades_forecast = response.data.list;
            this.isHidden = false;
          },
          error => {
            console.log(error)
            this.isHidden = false;
          });
      }
    }

  })
