$(document).ready(function() {
   // create the food HTML structure when passing in the food object
   const createFoodElement = function(food) {

    const $food = $(`
        <tbody>
            <tr>
              <td>${food.menuitem_id}</td>
              <td>${food.name}</td>
              <td><img src="${food.picture}"></td>
              <td>
                  ${food.quantity}
                <form action="/foods/${food.id}?_method=PATCH" method="POST">
                    <input
                      type="number"
                      name="newQuantity"
                    />
                    <button id="quantity_button" type="submit">Edit</button>
                </form>
              </td>
              <td>$${food.total_price}</td>
              <td>
                <form method="POST" action="/foods/${food.id}/delete?_method=DELETE">
                  <button id="delete_button" type="submit">Delete</button>
                </form>
              </td>
            </tr>
        </tbody>
    `);
    return $food;
  };

  // Loop through the foods data, turn them into HTML and add them in chronological order
  const renderFoods = function(foods) {
    const $tableHead = $(`
      <thead>
      <tr>
        <th>Menu No.</th>
        <th>Name</th>
        <th>Image</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
      </thead>
    `);
    $('#foods').append($tableHead);

    let finalPrice = 0;
    for (const food of foods) {
      const $food = createFoodElement(food);
      $('#foods').append($food);
      finalPrice += food.total_price;
    }

    const $orderConfirm = $(`
      <section id="orderConfirm">
        <div> Total Price: $${finalPrice} </div>
        <form method="POST" action="/foods">
          <button type="submit">Confirm & Checkout</button>
        </form>
      </section>
    `);
    $('#cart').append($orderConfirm);
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


