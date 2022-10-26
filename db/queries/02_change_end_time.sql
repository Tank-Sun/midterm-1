
--UPDATE orders
--SET end_time = start_time + '00:40:00'
--WHERE id = 99;

UPDATE orders
SET ready = TRUE,end_time = CURRENT_TIMESTAMP
--SET ready = FALSE
WHERE id = 99;

--SELECT (end_time - start_time) as waitetime, end_time
--FROM orders
--JOIN clients ON clients.id = client_id
--WHERE orders.id =99;

