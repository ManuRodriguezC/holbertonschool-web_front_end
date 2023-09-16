function createElement(data) {
    var paragraph = document.createElement('p')
    paragraph.textContent = data
    document.body.appendChild(paragraph)
}

function queryWikipedia(callback) {
    var xhr = new XMLHttpRequest()
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var extract = response.query.pages["21721040"].extract;
          callback(extract);
        } else {
          console.error("Error: " + xhr.status);
        }
      }
    };
  
    xhr.open("GET", url);
    xhr.send()
}

queryWikipedia(createElement)