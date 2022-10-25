SELECT orders.id, clients.name, start_time, end_time, ready
FROM orders
JOIN clients ON clients.id = client_id;
