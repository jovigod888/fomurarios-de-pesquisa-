function search() {
    var query = document.getElementById("search-input").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/search?q=" + query, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var results = JSON.parse(xhr.responseText);
        var searchResults = document.getElementById("search-results");
        searchResults.innerHTML = "";
        results.forEach(function(result) {
          var div = document.createElement("div");
          div.innerHTML = "<h2>" + result.title + "</h2><p>" + result.description + "</p>";
          searchResults.appendChild(div);
        });
      }
    };
    xhr.send();
  }
