var solarContour = new Vue({
  el: "#solar-contour",
  data: {
    baseURL: "https://solar-contour-plot.herokuapp.com",
    error: false,
    loading: false,
    pointsLoaded: false,
    selectedSite: null,
    sites: [],
    sitesLoaded: false
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

      $this.$set($this, "error", false);
      $this.$set($this, "loading", true);

      console.log("fetchSites", "url", url);

      axios
        .get(url)
        .then(function(response) {
          var sites = response.data.data.sites;

          console.log("fetchSites", "success", response, "sites", sites);

          $this.$set($this, "sites", sites);
          $this.$set($this, "loading", false);
          $this.$set($this, "sitesLoaded", true);
        })
        .catch(function(error) {
          console.log("fetchSites", "error", error);

          $this.$set($this, "loading", false);
          $this.$set($this, "error", true);
        });
    }
  },
  watch: {},
  mounted: function() {
    this.fetchSites();
  }
});
