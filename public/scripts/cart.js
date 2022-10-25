$(document).ready(function() {
   // create the food HTML structure when passing in the food object
   const createFoodElement = function(food) {

    const $food = $(`
      <div>
        <div>${food.name}</div>
        <div>${food.quantity}</div>
        <div>${food.price}</div>
      </div>
    `);
    return $food;
  };

  // Loop through the foods data, turn them into HTML and add them in chronological order
  const renderFoods = function(foods) {
    for (const food of foods) {
      const $food = createFoodElement(food);
      $('#foods').append($food);
    }
  };

  // Get the food data from /api/foods, render them to our page
  const loadFoods = function() {
    $.ajax({
      url: '/api/foods',
      method: 'GET'
    })
    .then(function(foods) {
      console.log(foods);
      renderFoods(foods);
    })
    .catch((error) => {
      console.log('error:', error);
    });
  };

  loadFoods();

});
