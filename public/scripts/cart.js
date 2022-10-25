$(document).ready(function() {
   // create the food HTML structure when passing in the food object
   const createFoodElement = function(food) {

    const $food = $(`
      <div>
        <div>${food.id}</div>
        <div>${food.name}</div>
        <div>${food.quantity}</div>
        <form action="/foods/${food.id}" method="POST">
          <div>
            <label for="newQuantity">new quantity:</label>
            <input
              type="number"
              name="newQuantity"
            />
            <button type="submit">Edit</button>
          </div>
        </form>
        <div>${food.total_price}</div>
        <form method="POST" action="/foods/${food.id}/delete">
          <button type="submit">Delete</button>
        </form>
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
      if (foods.length) {
        console.log(foods);
        renderFoods(foods);
      } else {
        $('#cart').replaceWith('<p>Your cart is empty.</p>');
      }
    })
    .catch((error) => {
      console.log('error:', error);
    });
  };

  loadFoods();

});
