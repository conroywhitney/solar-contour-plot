var greenScreen = new Vue({
  el: "#solar-contour",
  data: {
    selectedSite: null,
    sites: [
      {
        city: "Kona",
        country: "USA",
        file_id: "1-911975",
        latitude: 19.7329998016,
        longitude: -156.050003052,
        state: "Hawaii"
      },
      {
        city: "Juneau",
        country: "USA",
        file_id: "1-703810",
        latitude: 58.3499984741,
        longitude: -134.582992554,
        state: "Alaska"
      },
      {
        city: "Chicago",
        country: "USA",
        file_id: "1-725300",
        latitude: 41.983001709,
        longitude: -87.9169998169,
        state: "Illinois"
      },
      {
        city: "Washington",
        country: "USA",
        file_id: "1-724050",
        latitude: 38.8670005798,
        longitude: -77.0329971313,
        state: "District of Columbia"
      },
      {
        city: "Talkeetna",
        country: "USA",
        file_id: "1-702510",
        latitude: 62.3170013428,
        longitude: -150.100006104,
        state: "Alaska"
      },
      {
        city: "Atlanta",
        country: "USA",
        file_id: "1-722190",
        latitude: 33.6329994202,
        longitude: -84.4329986572,
        state: "Georgia"
      },
      {
        city: "Yakutat",
        country: "USA",
        file_id: "1-703610",
        latitude: 59.516998291,
        longitude: -139.632995605,
        state: "Alaska"
      },
      {
        city: "Big Delta",
        country: "USA",
        file_id: "1-702670",
        latitude: 64,
        longitude: -145.716995239,
        state: "Alaska"
      },
      {
        city: "St. Louis",
        country: "USA",
        file_id: "1-724340",
        latitude: 38.75,
        longitude: -90.3669967651,
        state: "Missouri"
      },
      {
        city: "Los Angeles",
        country: "USA",
        file_id: "1-722950",
        latitude: 33.9329986572,
        longitude: -118.400001526,
        state: "California"
      },
      {
        city: "Homer",
        country: "USA",
        file_id: "1-703410",
        latitude: 59.6500015259,
        longitude: -151.483001709,
        state: "Alaska"
      },
      {
        city: "Las Vegas",
        country: "USA",
        file_id: "1-723860",
        latitude: 36.0830001831,
        longitude: -115.150001526,
        state: "Nevada"
      },
      {
        city: "Gulkana",
        country: "USA",
        file_id: "1-702710",
        latitude: 62.1500015259,
        longitude: -145.449996948,
        state: "Alaska"
      },
      {
        city: "King Salmon",
        country: "USA",
        file_id: "1-703260",
        latitude: 58.6829986572,
        longitude: -156.649993896,
        state: "Alaska"
      },
      {
        city: "St Paul",
        country: "USA",
        file_id: "1-703080",
        latitude: 57.1669998169,
        longitude: -170.216995239,
        state: "Alaska"
      },
      {
        city: "Denver",
        country: "USA",
        file_id: "1-725650",
        latitude: 39.8330001831,
        longitude: -104.650001526,
        state: "Colorado"
      },
      {
        city: "Fairbanks",
        country: "USA",
        file_id: "1-702610",
        latitude: 64.8170013428,
        longitude: -147.850006104,
        state: "Alaska"
      },
      {
        city: "Boston",
        country: "USA",
        file_id: "1-725090",
        latitude: 42.3670005798,
        longitude: -71.016998291,
        state: "Massachusetts"
      },
      {
        city: "Nashville",
        country: "USA",
        file_id: "1-723270",
        latitude: 36.1170005798,
        longitude: -86.6829986572,
        state: "Tennessee"
      },
      {
        city: "Portland",
        country: "USA",
        file_id: "1-726980",
        latitude: 45.5999984741,
        longitude: -122.616996765,
        state: "Oregon"
      },
      {
        city: "Kodiak",
        country: "USA",
        file_id: "1-703500",
        latitude: 57.75,
        longitude: -152.5,
        state: "Alaska"
      },
      {
        city: "Seattle",
        country: "USA",
        file_id: "1-727935",
        latitude: 47.6800003052,
        longitude: -122.25,
        state: "Washington"
      },
      {
        city: "Barrow",
        country: "USA",
        file_id: "1-700260",
        latitude: 71.3199996948,
        longitude: -156.619995117,
        state: "Alaska"
      },
      {
        city: "San Francisco",
        country: "USA",
        file_id: "1-724940",
        latitude: 37.6170005798,
        longitude: -122.400001526,
        state: "Caifornia"
      },
      {
        city: "Valdez",
        country: "USA",
        file_id: "1-702750",
        latitude: 61.1329994202,
        longitude: -146.350006104,
        state: "Alaska"
      },
      {
        city: "Columbus",
        country: "USA",
        file_id: "1-724280",
        latitude: 39.983001709,
        longitude: -82.8830032349,
        state: "Ohio"
      },
      {
        city: "Dallas",
        country: "USA",
        file_id: "1-722590",
        latitude: 32.9000015259,
        longitude: -97.016998291,
        state: "Texas"
      },
      {
        city: "Kotzebue",
        country: "USA",
        file_id: "1-701330",
        latitude: 66.8830032349,
        longitude: -162.600006104,
        state: "Alaska"
      },
      {
        city: "Billings",
        country: "USA",
        file_id: "1-726770",
        latitude: 45.7999992371,
        longitude: -108.550003052,
        state: "Montana"
      },
      {
        city: "Cold Bay",
        country: "USA",
        file_id: "1-703160",
        latitude: 55.2000007629,
        longitude: -162.716995239,
        state: "Alaska"
      },
      {
        city: "Minneapolis",
        country: "USA",
        file_id: "1-726580",
        latitude: 44.8829994202,
        longitude: -93.233001709,
        state: "Minnesota"
      },
      {
        city: "Bettles",
        country: "USA",
        file_id: "1-701740",
        latitude: 66.9169998169,
        longitude: -151.516998291,
        state: "Alaska"
      },
      {
        city: "Anchorage",
        country: "USA",
        file_id: "1-702730",
        latitude: 61.1829986572,
        longitude: -150,
        state: "Alaska"
      },
      {
        city: "Kansas City",
        country: "USA",
        file_id: "1-724460",
        latitude: 39.2999992371,
        longitude: -94.7170028687,
        state: "Kansas"
      },
      {
        city: "Boise",
        country: "USA",
        file_id: "1-726810",
        latitude: 43.6199989319,
        longitude: -116.209999084,
        state: "Idaho"
      },
      {
        city: "Annette Island",
        country: "USA",
        file_id: "1-703980",
        latitude: 55.0499992371,
        longitude: -131.567001343,
        state: "Alaska"
      },
      {
        city: "Phoenix",
        country: "USA",
        file_id: "1-722780",
        latitude: 33.4500007629,
        longitude: -111.983001709,
        state: "Arizona"
      },
      {
        city: "Bethel",
        country: "USA",
        file_id: "1-702190",
        latitude: 60.783000946,
        longitude: -161.832992554,
        state: "Alaska"
      },
      {
        city: "Salt Lake City",
        country: "USA",
        file_id: "1-725720",
        latitude: 40.7700004578,
        longitude: -111.970001221,
        state: "Utah"
      },
      {
        city: "Miami",
        country: "USA",
        file_id: "1-722020",
        latitude: 25.8169994354,
        longitude: -80.3000030518,
        state: "Florida"
      },
      {
        city: "Philadelphia",
        country: "USA",
        file_id: "1-724080",
        latitude: 39.8670005798,
        longitude: -75.233001709,
        state: "Pennsylvania"
      },
      {
        city: "Nome",
        country: "USA",
        file_id: "1-702000",
        latitude: 64.516998291,
        longitude: -165.449996948,
        state: "Alaska"
      },
      {
        city: "Bangor",
        country: "USA",
        file_id: "1-726088",
        latitude: 44.7999992371,
        longitude: -68.8170013428,
        state: "Maine"
      },
      {
        city: "McGrath",
        country: "USA",
        file_id: "1-702310",
        latitude: 62.9500007629,
        longitude: -155.600006104,
        state: "Alaska"
      },
      {
        city: "Honolulu",
        country: "USA",
        file_id: "1-911820",
        latitude: 21.3169994354,
        longitude: -157.932998657,
        state: "Hawaii"
      }
    ]
  },
  computed: {
    alphabeticalSites: function() {
      return this.sites.sort(function(a, b) {
        return a.city.localeCompare(b.city);
      });
    }
  },
  methods: {},
  watch: {}
});
