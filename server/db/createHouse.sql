INSERT INTO houses
    (name,address,city,state,zipCode)
values($1, $2, $3, $4, $5)
select *
from houses