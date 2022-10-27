$(document).ready(function() {
   // create the food HTML structure when passing in the food object
   const createFoodElement = function(food) {

    const $food = $(`
      <div>
        <div>Menu No.: ${food.menuitem_id}</div>
        <div>food name: ${food.name}</div>
        <div>food name: <img src="${food.picture}"></div>
        <div>quantity: ${food.quantity}</div>
        <form action="/foods/${food.id}?_method=PATCH" method="POST">
          <div>
            <label for="newQuantity">new quantity:</label>
            <input
              type="number"
              name="newQuantity"
            />
            <button type="submit">Edit</button>
          </div>
        </form>
        <div>price: ${food.total_price}</div>
        <form method="POST" action="/foods/${food.id}/delete?_method=DELETE">
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
        renderFoods(foods);
      } else {
        $('#cart').replaceWith('<section id="cart"><p>Your cart is empty now. Go to the <a href="/restaurant">main menu</a> to have a look!</p></section>');
      }
    })
    .catch((error) => {
      console.log('error:', error);
    });
  };

  loadFoods();

});
