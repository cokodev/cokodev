$(document).ready(function () {
  
  var client = algoliasearch("R4HR5R8AAA", "f984b048d36fb379766c4691b0583863", { protocol: 'https:' });
  var index = client.initIndex("UserAlgolia");

//initialize autocomplete on search input (ID selector must match)
  $("#aa-search-input").autocomplete({ hint: false , autoselect: true }, [
      {
        source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 10 }),
        displayKey: "_id userName folders folderName folderDescription",
        templates: {
          suggestion: function(suggestion) {
            //console.log("temp suggestion: ", suggestion);
            console.log("temp highlightResult: ", suggestion._highlightResult);
            var folderList = "";
            for (var i = 0; i < suggestion._highlightResult.folders.length; i++) {
              //console.log("boucle folder: ", suggestion._highlightResult.folders[i]._id);
              if (suggestion._highlightResult.folders[i].folderName.matchLevel !== "none") {
                folderList += '<p><a onClick="SelectFolder(\'' + suggestion._highlightResult.folders[i]._id.value + '\');" href="#">' + suggestion._highlightResult.folders[i].folderName.value + "</a></p>";
              }

              if (suggestion._highlightResult.folders[i].snippets) {
                for (var j = 0; j < suggestion._highlightResult.folders[i].snippets.length; j++) {
                  if (suggestion._highlightResult.folders[i].snippets[j].snippetName && suggestion._highlightResult.folders[i].snippets[j].snippetName.matchLevel !== "none") {
                    folderList += "<p><a onClick=\"SelectFolder('" + suggestion._highlightResult.folders[i]._id.value + "','" + suggestion._highlightResult.folders[i].snippets[j]._id.value + "');\ href=\"#\">" + suggestion._highlightResult.folders[i].snippets[j].snippetName.value + "</a></p>";
                  }
                }
              }

            }
            return "<span>" + folderList + "</span>";
          }
        }
      }
  ]).on("autocomplete:selected", function (event, suggestion, dataset) {
      console.log(suggestion, dataset);
    });
});
