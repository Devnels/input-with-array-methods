$(document).ready(function() {
  $("#favoriteForm").submit(function(event) {
    event.preventDefault();
    
    let favorite1 = $("#favorite1").val();
    let favorite2 = $("#favorite2").val();
    let favorite3 = $("#favorite3").val();
    let favorite4 = $("#favorite4").val();
    
    let Favorites = [favorite1, favorite2, favorite3,favorite4]

    let first = Favorites[0];
    let second = Favorites[1];
    let third = Favorites[2];
    let fourth = Favorites[3]

    let newFavorite = ["My favorite things are"]
    newFavorite.push(first)
    newFavorite.push(second)
    newFavorite.push(third)
    newFavorite.push(fourth)


    let resultHtml = " ";
    newFavorite.forEach(function(newFavorite) {
    resultHtml += "<li>" + newFavorite + "</li>";
   });


    // let resultHtml = "<h2>Your Favorite Things:</h2>";
    // Favorites.forEach(function(Favorites) {
    // resultHtml += "<li>" + Favorites + "</li>";
    // });

    $("#result").html(resultHtml);

  });
});
