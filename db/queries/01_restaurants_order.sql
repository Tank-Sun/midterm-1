SELECT orders.id, clients.name, start_time, end_time, ready, menuitems.name, menuitems.description
FROM orders
JOIN clients ON clients.id = client_id
JOIN order_detais ON order_id = orders.id
JOIN menuitems ON menuitem_id = menuitems.id
WHERE orders.id = 99
ORDER BY menuitem_id;

