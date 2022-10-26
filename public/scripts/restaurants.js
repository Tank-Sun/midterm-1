//restaurants/ main page scripts here
const loadRestaurants = function() {
  $.ajax({
    url: '/', //make sure to define the correct endpoint
    method: 'GET'
  })
  .then(function(restaurants) {
    if (restaurants.length) {
      console.log(restaurants);
      res.render('restaurants', {restaurants: restaurants});
    }
    else {
      $('#restaurants').replaceWith('<p>Please choose your favorite restaurant!</p>');
    }
  })
  .catch((error) => {
  console.log('error: ', error.message);
  })
}
