function MarvelService() {
  var apiKey = "?apikey=e44062bbc76b37176b08325d5265a0f3";
  var baseUrl = "https://gateway.marvel.com:443/v1/public/characters";

  var marvelResults = []
  var myRoster = []

  this.search = function(query, cb) {

    // TODO: GET NAME SEARCH WORKING?????
    // if(query){
    //   query = '/' + query
    // }

    $.get(baseUrl + query + apiKey).then(function(res){
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