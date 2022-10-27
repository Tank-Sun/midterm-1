# Client
## items:
see all the items
: Browse  GET  /restaurant

click one item, see item details
: Read    GET  /restaurant/:id

choose quantities
: Edit POST /restaurant/:id

add to cart
: Add  POST  /restaurant/:id

## Cart:
show all the choosen foods
: Browse  GET  /foods

edit quantities
: Edit  POST  /foods/:id

delete foods
: Delete  POST  /foods/:id/delete

order confirmation
: Add  POST  /foods

## Order History:
show all the order history
: Browse  GET /records


# Owner
## orders list
see all the orders
: Browse  GET  /api/widgets

choose one order
: Read  GET  /api/widgets/:id

take the order, start cooking
: Edit  POST /api/widgets/:id

finish the order
: Delete  POST/api/widgets/:id/delete





