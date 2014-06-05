var opensrt = require("./opensrt.js");
var token = "";

opensrt.searchEpisode({
  imdbid: "tt0903747",
  season: "01",
  episode: "04",
  sublanguageid: "vie"
}, function(err, res) {
  if (err) return console.error("Error: " + err);
  console.log(res);
})
