//var requestUrl = 'https://www.loc.gov/search/photos/?q=baseball&fo=json';

var requestUrl;
getSearch();

fetch(requestUrl)
  .then(function (response) {
    return response.json();

  })
  .then(function (data) {
    for (var i = 0; i < data.results.length; i++) {
      console.log(data.results[i]);
     // console.log(data[i].user.login);
    }
  });

  console.log("hello");

  function getSearch() {
      //needed variables
      var searchTerm = 'australia';
      var formatTerm = 'maps';

      //take value from searchbox and assign to temp variable
      // var searchTerm = $('search').val();
      // var formatTerm = $('dropDown').val();
      requestUrl = "https://www.loc.gov/search/" + formatTerm + "/?q=" + searchTerm + "&fo=json";
  }
