function MarvelService() {
  var apiKey = "apikey=277ec1413e4fa431f1b23b3deb983bcc";
  var baseUrl = "https://gateway.marvel.com:443/v1/public/characters";

  var marvelResults = []
  var myRoster = []

  this.search = function(query, cb) {

    // TODO: GET NAME SEARCH WORKING?????
    // if(query){
    //   query = '/' + query
    // }




//$.get("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=ant&apikey=277ec1413e4fa431f1b23b3deb983bcc").then(console.log);

    var searchq = `?nameStartsWith=${query}&`;

    $.get(baseUrl + searchq + apiKey).then(function(res){
      marvelResults = res.data.results
      cb(res.data.results)
    })
  }

  this.addCharacter = function(id){

    var character = marvelResults.find(char => char.id == id)
    
    if(myRoster.indexOf(character) == -1){
      myRoster.push(character)
    }

    // myRoster[id] = character


    // for (var i = 0; i < marvelResults.length; i++) {
    //   var character = marvelResults[i];
    //   if(character.id == id){
    //     return character
    //   }
    // }

  }

  this.getRoster = function(){
    return JSON.parse(JSON.stringify(myRoster))
  }

}