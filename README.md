# DANS TEST

## SQL
1. SELECT * , COUNT(*) AS totalAccount FROM customer c JOIN account a ON a.acc_owner = c.cust_id GROUP BY 1;
2. SELECT * from transaction t JOIN account a ON a.acc_number = t.trs_from_account JOIN customer c ON c.cust_id = a.acc_owner where c.cust_firstname = "yudha" AND c.cust_lastname = "prastya" ORDER BY a.acc_number DESC, t.trs_date ASC;