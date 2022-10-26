SELECT orders.*, menuitems.name, quantity
FROM orders
JOIN order_details ON orders.id = order_id
JOIN menuitems ON menuitems.id = menuitem_id
JOIN clients ON clients.id = client_id
WHERE clients.id = 1
ORDER BY orders.id;

INSERT INTO orders (client_id, ready, confirm)
VALUES(1, FALSE, FALSE);

INSERT INTO order_details (order_id, menuitem_id, quantity)
VALUES ((SELECT orders.id
FROM orders
JOIN clients ON client_id = clients.id
WHERE clients.id = 1 AND confirm = FALSE), 3, 30);







SELECT orders.id
FROM orders
JOIN clients ON client_id = clients.id
WHERE clients.id = 1 AND confirm = FALSE;
