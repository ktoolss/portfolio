SELECT employee_id, last_name, salary, commission_pct
FROM hr.employees
WHERE commission_pct IS NOT NULL;

SELECT salary, salary + 1 AS newSalary
FROM hr.employees;

SELECT employee_id, last_name, salary, commission_pct
FROM hr.employees
WHERE commission_pct IS NOT NULL
OR (salary > 10000
AND hire_date > '31-Dec-98');

SELECT *
FROM hr.employees
WHERE department_id = 80;

SELECT *
FROM hr.employees
WHERE salary > 80000;

SELECT first_name, last_name
FROM hr.employees
WHERE last_name LIKE 'K%';

SELECT COUNT (employee_id)
FROM hr.employees;

SELECT COUNT (manager_id)
FROM hr.employees;

SELECT
    (first_name, last_name) AS "Full Name",
    salary,
    commission_pct,
    COALESCE(commission_pct, 0) + 0.1 AS "New commission" -- coalesce focuses on nulls
FROM hr.employees LIMIT 10;

SELECT commission_pct
FROM employees;

SELECT last_name,
    EXTRACT(YEAR FROM hire_date) AS "Hire Year"
FROM hr.employees 
WHERE job_id = 'MK_REP';


SELECT last_name
FROM employees
WHERE salary = 
    (SELECT MAX(salary) 
    FROM hr.employees);

SELECT job_id, MAX(salary) 
FROM hr.employees
GROUP BY job_id;

SELECT last_name, first_name, job_id, salary
FROM hr.employees
ORDER BY last_name ASC, first_name DESC;

SELECT *
FROM hr.locations
ORDER BY country_id;

SELECT *
FROM hr.locations
ORDER BY postal_code;

SELECT 'Hello ' || ', ' || 'Dolly!';
SELECT SUBSTRING('Hello Dolly!' FROM 1 FOR 5); -- not 0 index
SELECT CHAR_LENGTH('Hello Dolly!');
SELECT POSITION('ll' IN 'Hello Dolly!');

SELECT last_name || ', ' || first_name AS "Full Name"
FROM employees
ORDER BY last_name;

SELECT round(4.2);

SELECT ROUND(453.141592, 4);
SELECT TRUNC(453.141592, 4);
SELECT ROUND(453.141592, -1);
SELECT TRUNC(453.141592, -2); -- truncate the decimal places
SELECT MOD(16, 5) AS "REMAINS";

SELECT (first_name, last_name) AS "Full Name",
CASE
    WHEN hire_date < '2001-01-01' THEN 'Senior employee'
    WHEN (hire_date BETWEEN '2001-01-01' AND '2007-01-01') THEN 'Mid employee'
    WHEN hire_date > '2007-01-01' THEN 'Junior employee'
    WHEN hire_date = NULL THEN 'Unkown'
    ELSE 'nothingness'
END AS Seniority
FROM hr.employees;

SELECT first_name || ', ' || last_name AS "fullname",
        EXTRACT(YEAR FROM hire_date) AS "year hired",
        CASE
            WHEN EXTRACT(year FROM hire_date) < 2001
                THEN 'Senior'
            WHEN EXTRACT(year FROM hire_date) < 2008
                THEN 'Mid'
            ELSE 'Junior'
        END AS "Seniority"
FROM hr.employees;

SELECT fname, lname, position
FROM hr.players
WHERE position = 'Catcher';

SELECT fname, lname, weight, height
FROM hr.players
WHERE weight >= 220;

SELECT now();


SELECT CURRENT_DATE + 7*30 AS "Date ~ 7 Months Later";
SELECT CURRENT_DATE + INTERVAL '7' MONTH AS "Date 7 months later"; -- doing an interval on the same calendar day of every month?

SELECT CURRENT_DATE; -- client may be in different time zone. CURRENT_DATE is not the same as now()

SELECT CURRENT_DATE + 4/24 AS "Time 4 hrs laters";
SELECT CURRENT_DATE + INTERVAL '4' HOUR "Time 4 hours later";

SELECT to_date('1989-03-30', 'YYYY-MM-DD');
SELECT to_date('1989-20-04', 'YYYY-DD-MM');
SELECT CURRENT_DATE - to_date('1989-03-30', 'YYYY-MM-DD') AS "number of days since born";
SELECT CURRENT_DATE - to_date('1972/2/29', 'yyyy-mm-dd');

SELECT 
        salary,
        commission_pct,
        salary,
        TRUNC(salary + (salary* COALESCE(commission_pct, 0)), 2) AS "Total Comp" -- since COALESCE returns non null, you need to put 0. trunc by 2 to get the hundreds of commission
FROM hr.employees;

SELECT first_name, last_name,
to_char(
    salary
    + coalesce(salary*commission_pct, 0), '99,999,999') -- tochar format mask casts your coalesce to value to the 99,999,999
AS "Comp"
FROM employees;

SELECT *
FROM hr.employees
WHERE department_id = 110;

SELECT *
FROM hr.employees
-- WHERE upper(last_name) = upper('King');
WHERE upper(last_name) LIKE upper('K%r');

SELECT *
FROM hr.employees
WHERE last_name LIKE 'K%';

SELECT first_name, last_name
FROM hr.employees
WHERE UPPER(first_name) LIKE 'K%'
    OR UPPER(first_name) LIKE '%K'
    OR UPPER(last_name) LIKE '%K'
    OR UPPER(last_name) LIKE 'K%';

SELECT employee_id, first_name
FROM hr.employees
WHERE salary >=
    (SELECT AVG(salary)
    FROM hr.employees);

SELECT employee_id, first_name
FROM hr.employees
WHERE salary =
    (SELECT MAX(salary)
    FROM employees e
    -- JOIN departments d
    -- ON e.department_id = d.department_id
    -- didn't finish in class
    );

SELECT first_name || ' ' || last_name AS "full name"
FROM employees
WHERE department_id = (
    SELECT de
)


SELECT first_name
FROM employees
WHERE department_id IN
    (SELECT department_id
    FROM departments
    WHERE location_id IN
        (SELECT location_id 
        FROM locations
        WHERE upper(city) = upper('seattle'))
        );

CREATE TABLE todos (
    id serial PRIMARY KEY,
    description VARCHAR (30) NOT NULL,
    iscomplete BOOLEAN FALSE
);

SELECT country_name, region_id
FROM hr.countries;

SELECT
    country_name,
    region_id
FROM hr.countries
WHERE region_id < 3;

SELECT DISTINCT department_id
FROM hr.employees;

SELECT DISTINCT department_id
FROM hr.employees;

SELECT employee_id, last_name, salary, commission_pct
FROM hr.employees
WHERE commission_pct IS NOT NULL;

SELECT COUNT(*)
FROM hr.employees;

SELECT COUNT(manager_id) AS managers
FROM employees;

SELECT COUNT(DISTINCT manager_id) AS disman
FROM employees
WHERE manager_id IS NOT NULL;

SELECT COUNT(DISTINCT manager_id)
FROM employees;

SELECT COUNT(DISTINCT manager_id)
FROM hr.employees;

SELECT COUNT(employee_id)
FROM employees
WHERE manager_id IS NOT NULL;

SELECT *
FROM employees;

SELECT
    first_name,
    last_name,
    salary,
    commission_pct
FROM employees LIMIT 10;

SELECT lname,
team_id
FROM players
WHERE team_id IS NULL;

SELECT lname,
team_id
FROM players;

SELECT lname,
COALESCE(team_id, 5)
FROM players
WHERE team_id IS NULL;

SELECT first_name
FROM employees
WHERE salary < (SELECT AVG(salary) FROM employees);

SELECT last_name,
    EXTRACT(YEAR FROM hire_date) AS "Hire Year"
FROM employees 
WHERE job_id = 'MK_REP';


SELECT 
    EXTRACT(DAY FROM hire_date), -- will need to use this for a query
    EXTRACT(MONTH FROM hire_date),
    EXTRACT(YEAR FROM hire_date)
FROM employees
WHERE employee_id = 200;


SELECT description
FROM hr.products;

SELECT p.productid, p.description, s.saledate, s.amount
FROM sales s JOIN products p
-- ON (p.productid = s.productid);
USING (productid);

SELECT e.employee_id, e.first_name, l.city, d.department_name
FROM employees e
    JOIN departments d ON e.department_id = d.department_id
    JOIN locations l ON d.location_id = l.location_id;

SELECT first_name, department_name
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id;

SELECT first_name, department_name
FROM employees e RIGHT JOIN departments d
ON e.department_id = d.department_id;

SELECT first_name, department_name
FROM employees e FULL JOIN departments d
ON e.department_id = d.department_id;

SELECT saledate AS "Sale Date", description AS "Product Name", amount AS "Sale Amount"
FROM sales s JOIN products p
ON s.productid = p.productid;

SELECT e.first_name, e.last_name, l.city, d.department_name
FROM employees e
    JOIN departments d ON e.department_id = d.department_id
    JOIN locations l ON d.location_id = l.location_id;

SELECT first_name, department_name
FROM employees, departments;

SELECT employee_id, first_name, last_name, manager_id
FROM hr.employees
ORDER BY employee_id;

SELECT e.first_name || ' ' || e.last_name AS "employee", m.first_name || ' ' || m.last_name AS "manager"
FROM employees e
JOIN employees m
ON e.manager_id = m.employee_id;

SELECT e.first_name || ' ' || e.last_name || ', ' || l.city AS "employee, city"
FROM hr.employees e
    JOIN hr.departments d ON e.department_id = d.department_id
    JOIN hr.locations l ON d.location_id = l.location_id
ORDER BY e.last_name;

SELECT
    to_char(s.saledate, 'DD/MM/YYYY') AS "Sale Date", 
    p.description AS "Product Name", 
    s.amount AS "Sale Amount"
FROM sales s
JOIN products p ON s.productid = p.productid;

SELECT fname, lname, height, weight, team_id
FROM hr.players p
LEFT JOIN hr.teams t ON p.team_id = t.id;

CREATE TABLE transactions (person varchar(10), amount numeric);

BEGIN;
    INSERT INTO transactions (person, amount) VALUES ('zack', -10);
    INSERT INTO transactions (person, amount) VALUES ('piyush', 10);
    SELECT SUM(amount) FROM transactions;
END;

BEGIN;
    INSERT INTO transactions (person, amount) VALUES ('zack', -10);
    INSERT INTO transactions (person, amount) VALUES ('piyush', 10);
    SELECT SUM(amount) FROM transactions;
ROLLBACK;

SELECT *
FROM hr.regions;

SELECT *
FROM hr.countries;

SELECT *
FROM countries c
JOIN regions r
ON c.region_id = 1;

SELECT e.first_name || ' ' || e.last_name AS "Full Name", d.department_name, l.city
FROM departments d
JOIN locations l ON d.location_id = l.location_id
JOIN employees e ON e.department_id = d.department_id
ORDER BY e.last_name;
--WHERE city = 'Seattle';

SELECT e.first_name || ' ' || e.last_name AS "firstName", d.department_name
FROM departments d
JOIN employees e ON e.department_id = d.department_id;

SELECT COUNT(employee_id)
FROM hr.employees;

INSERT INTO hr.employees (employee_id, first_name, last_name, email, phone_numeric, hire_date, job_id, salary, commission_pct, manager_id, department_id)
VALUES (666, 'kristian', 'smith', '666@gmail.com', '512-666-6969', '03/03/2021', 'IT_PROG', 100, 0.5, 100, 60);

UPDATE employees 
SET employee_id = 666, first_name = 'kristian', last_name = 'smith', email = '666@gmail.com', phone_numeric = '512-666-6969', hire_date = '03/03/2021', job_id = 'IT_PROG', salary = 100, commission_pct = 0.5, manager_id = 100, department_id = 60
WHERE employee_id = 666;

select department_id
from hr.employees;

SELECT 
    first_name || ' ' || last_name AS "full name",
    CURRENT_DATE - hire_date AS "Number of days employed"
FROM employees
ORDER BY "Number of days employed" DESC
LIMIT 1;

SELECT 
    first_name || ' ' || last_name AS "full name",
    salary
FROM employees
WHERE salary BETWEEN 25000 AND 200000;

SELECT department_name
FROM hr.departments;



-- SQL Project 1

-- Task 1
SELECT *
FROM employees
WHERE salary BETWEEN 3000 AND 40000;

-- Task 2
SELECT 
    SUBSTRING(e.last_name, 1, 6) AS "sixName",
    j.job_title AS "Job Title",
    e.salary AS "Salary"
FROM employees e
JOIN jobs j ON j.job_id = e.job_id
WHERE LENGTH(last_name) >= 6;

-- Task 3

SELECT *
FROM employees
WHERE salary > 8000 
OR to_char(hire_date, 'DD/MM/YYYY') > '01-01-1996';

SELECT MIN(salary)
FROM employees;

SELECT COALESCE(commission_pct, 0) + 0.1, MIN(salary)
FROM hr.employees;

-- not working?
SELECT COALESCE(commission_pct, 0) + 0.1 AS "this",  MIN(salary)
FROM employees;
-- WHERE salary > 8000 
-- OR to_char(hire_date, 'DD/MM/YYYY') > '01-01-1996'

-- Task 4

SELECT 
    e.first_name || ' ' || e.last_name AS "Full Name",
    d.department_name AS "Department"
FROM employees e
JOIN departments d ON d.department_id = e.department_id;

SELECT 
    e.first_name || ' ' || e.last_name AS "Full Name",
    d.department_name AS "Department"
FROM employees e
JOIN departments d ON d.department_id = e.department_id
WHERE d.department_name = 'Sales';

-- Task 5

SELECT 
    e.first_name AS "first", 
    e.last_name AS "last", 
    e.email AS "Email", 
    d.department_name AS "Department", 
    l.city AS "City"
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON l.location_id = d.location_id
WHERE d.department_name = 'Executive';

-- Task 6

SELECT 
    e.first_name AS "first", 
    e.last_name AS "last", 
    e.email AS "Email", 
    m.first_name AS "Manager",
    d.department_name AS "Department", 
    l.city AS "City"
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id
JOIN departments d ON m.department_id = d.department_id
JOIN locations l ON l.location_id = d.location_id
WHERE d.department_name = 'Executive';

-- Task 7

-- can't get the COUNT to show up
SELECT 
    DISTINCT EXTRACT(YEAR FROM e.hire_date) AS "year_of_hiring", 
    COUNT(
        SELECT *
        FROM employees y
        WHERE DISTINCT EXTRACT(YEAR FROM y.hire_date) = DISTINCT EXTRACT(YEAR FROM e.hire_date)
    )  AS "count"
FROM employees e
JOIN employees x ON EXTRACT(YEAR FROM e.hire_date) = EXTRACT(YEAR FROM x.hire_date)
ORDER BY "year_of_hiring";
-- WHERE EXTRACT(YEAR FROM hire_date) = '2000';