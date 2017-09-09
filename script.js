var solarContour = new Vue({
  el: "#solar-contour",
  data: {
    baseURL: "http://localhost:4567",
    loading: true,
    selectedSite: null,
    sites: []
  },
  computed: {
    alphabeticalSites: function() {
      return this.sites.sort(function(a, b) {
        return a.city.localeCompare(b.city);
      });
    }
  },
  methods: {
    fetchSites: function() {
      var $this = this;
      var url = this.baseURL + "/dev/sites/?short=T";

      console.log("fetchSites", "url", url);

      axios
        .get(url)
        .then(function(response) {
          var sites = response.data.data.sites;

          console.log("fetchSites", "success", response, "sites", sites);

          $this.$set($this, "sites", sites);
          $this.$set($this, "loading", false);
        })
        .catch(function(error) {
          console.log("fetchSites", "error", error);
        });
    }
  },
  watch: {},
  mounted: function() {
    this.fetchSites();
  }
});
