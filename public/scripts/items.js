

//items page scripts here
const loadItems = function(restaurantId) {
  $.ajax({
    url: `${restaurantId}/items`, //need to check agaia with teammates, make sure it get items by restaurant id
    method: 'GET'
  })
  .then(function(items) {
    if (items.length) {
      console.log(items);
      res.render('items', {menuItems: items}); // access this data on ejs file
    }
    else {
      $('#items').replaceWith('<p>Please choose your favorite dishes!</p>');
    }
  })
  .catch((error) => {
  console.log('error: ', error.message);
  })
}
