var solarContour = new Vue({
  el: "#solar-contour",
  data: {
    baseURL: "https://solar-contour-plot.herokuapp.com",
    error: false,
    fileId: null,
    loading: false,
    site: null,
    sites: null
  },
  computed: {
    alphabeticalSites: function() {
      return this.sites.sort(function(a, b) {
        return a.city.localeCompare(b.city);
      });
    },
    energyPercentages: function() {
      var energyPercentages = new Array(this.site.azimuth.length);

      for (var i = 0; i < this.site.azimuth.length; i++) {
        energyPercentages[i] = new Array(this.site.tilt.length);

        for (var j = 0; j < this.site.tilt.length; j++) {
          energyPercentages[i][j] = this.site.energy[i][j] / this.maxEnergy;
        }
      }

      console.log("energyPercentages", energyPercentages);

      return energyPercentages;
    },
    hoverText: function() {
      var hoverText = new Array(this.site.azimuth.length);

      for (var i = 0; i < this.site.azimuth.length; i++) {
        hoverText[i] = new Array(this.site.tilt.length);

        for (var j = 0; j < this.site.tilt.length; j++) {
          var energyPercentage = this.energyPercentages[i][j];
          hoverText[i][j] =
            "% max: " +
            energyPercentage.toLocaleString("en-US", {
              style: "percent"
            });
        }
      }

      console.log("hoverText", hoverText);

      return hoverText;
    },
    maxEnergy: function() {
      var flattenedEnergies = this.site.energy.join().split(",").map(Number);
      var maxEnergy = flattenedEnergies.reduce(function(max, num) {
        return Math.max(max, num);
      }, -Infinity);

      console.log("maxEnergy", maxEnergy);

      return maxEnergy;
    }
  },
  methods: {
    fetchSites: function() {
      var $this = this;
      var url = this.baseURL + "/dev/sites/?short=T";

      this.$set(this, "error", false);
      this.$set(this, "loading", true);
      this.$set(this, "sites", null);
      this.$set(this, "site", null);

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

          $this.$set($this, "loading", false);
          $this.$set($this, "error", true);
        });
    },
    fetchSite: function(file_id) {
      var $this = this;
      var url = this.baseURL + "/dev/sites/" + file_id + "/";

      this.$set(this, "error", false);
      this.$set(this, "loading", true);
      this.$set(this, "site", null);

      console.log("fetchSite", "url", url);

      axios
        .get(url)
        .then(function(response) {
          var site = response.data.data.site;

          console.log("fetchSite", "success", response, "site", site);

          $this.$set($this, "site", site);
          $this.$set($this, "loading", false);

          setTimeout($this.renderContourPlot, 50);
        })
        .catch(function(error) {
          console.log("fetchSite", "error", error);

          $this.$set($this, "loading", false);
          $this.$set($this, "error", true);
        });
    },
    renderContourPlot: function() {
      var domId = "graph";
      var data = [
        {
          text: this.hoverText,
          type: "contour",
          x: this.site.azimuth,
          y: this.site.tilt,
          z: this.site.energy,
          customData: this.energyPercentages
        }
      ];
      var settings = {
        title:
          "Annual kWh Produced per DC kW<br />for various Tilts / Azimuths",
        xaxis: {
          title: "Azimuth (degrees)",
          titlefont: {
            family: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            size: 18,
            color: "#7f7f7f"
          }
        },
        yaxis: {
          title: "Tilt (degrees)",
          titlefont: {
            family: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            size: 18,
            color: "#7f7f7f"
          }
        }
      };

      Plotly.newPlot(domId, data, settings);
    }
  },
  watch: {
    fileId: function(file_id) {
      this.fetchSite(file_id);
    }
  },
  mounted: function() {
    this.fetchSites();
  }
});
