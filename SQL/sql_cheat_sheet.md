# 🧠 SQL Cheatsheet

A comprehensive reference of common SQL keywords, their definitions, and usage examples.

---

## 📁 Data Definition Language (DDL)

### CREATE

Creates a new database object such as a table, view, or database.

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```

---

### ALTER

Modifies an existing database object (e.g., add, drop, or modify columns).

```sql
ALTER TABLE users ADD COLUMN age INT;
```

---

### DROP

Deletes a database object (e.g., a table or view).

```sql
DROP TABLE users;
```

---

### TRUNCATE

Removes all rows from a table without logging individual row deletions.

```sql
TRUNCATE TABLE users;
```

---

## 📊 Data Manipulation Language (DML)

### INSERT

Adds new rows of data into a table.

```sql
INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'alice@example.com');
```

---

### UPDATE

Modifies existing rows of data.

```sql
UPDATE users SET name = 'Bob' WHERE id = 1;
```

---

### DELETE

Deletes rows from a table.

```sql
DELETE FROM users WHERE id = 1;
```

---

## 📄 Data Query Language (DQL)

### SELECT

Retrieves data from one or more tables.

```sql
SELECT name, email FROM users WHERE age > 18;
```

---

### DISTINCT

Removes duplicate values from the result set.

```sql
SELECT DISTINCT country FROM users;
```

---

### WHERE

Filters records that meet specific conditions.

```sql
SELECT * FROM users WHERE age > 25;
```

---

### ORDER BY

Sorts the result set.

```sql
SELECT * FROM users ORDER BY name ASC;
```

---

### GROUP BY

Groups rows that have the same values in specified columns.

```sql
SELECT country, COUNT(*) FROM users GROUP BY country;
```

---

### HAVING

Filters grouped data (used with GROUP BY).

```sql
SELECT country, COUNT(*) FROM users GROUP BY country HAVING COUNT(*) > 5;
```

---

### LIMIT

Limits the number of returned rows.

```sql
SELECT * FROM users LIMIT 10;
```

---

## 🔄 Joins

### INNER JOIN

Returns rows with matching values in both tables.

```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

---

### LEFT JOIN

Returns all records from the left table and matching records from the right.

```sql
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

---

### RIGHT JOIN

Returns all records from the right table and matching records from the left.

```sql
SELECT users.name, orders.amount
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
```

---

### FULL OUTER JOIN

Returns all records when there is a match in either table.

```sql
SELECT users.name, orders.amount
FROM users
FULL OUTER JOIN orders ON users.id = orders.user_id;
```

---

## 🧮 Functions and Operators

### COUNT(), SUM(), AVG(), MAX(), MIN()

Aggregate functions used to perform calculations on data.

```sql
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
SELECT MAX(age) FROM users;
```

---

### LIKE

Pattern matching using `%` (wildcard) and `_` (single character).

```sql
SELECT * FROM users WHERE name LIKE 'A%';
```

---

### IN

Matches any value in a list.

```sql
SELECT * FROM users WHERE country IN ('USA', 'Canada');
```

---

### BETWEEN

Filters values within a range.

```sql
SELECT * FROM users WHERE age BETWEEN 18 AND 30;
```

---

### IS NULL / IS NOT NULL

Checks for NULL values.

```sql
SELECT * FROM users WHERE email IS NULL;
```

---

## 🔐 Constraints

### PRIMARY KEY

Uniquely identifies each row in a table.

```sql
id INT PRIMARY KEY
```

---

### FOREIGN KEY

Creates a relationship between tables.

```sql
FOREIGN KEY (user_id) REFERENCES users(id)
```

---

### UNIQUE

Ensures all values in a column are different.

```sql
email VARCHAR(100) UNIQUE
```

---

### NOT NULL

Ensures a column cannot have NULL values.

```sql
name VARCHAR(100) NOT NULL
```

---

## ⚙️ Other Keywords

### AS

Renames a column or table using an alias.

```sql
SELECT name AS full_name FROM users;
```

---

### CASE

Conditional logic in a query.

```sql
SELECT name,
  CASE 
    WHEN age >= 18 THEN 'Adult'
    ELSE 'Minor'
  END AS status
FROM users;
```

---

### EXISTS

Returns true if a subquery returns any rows.

```sql
SELECT name FROM users
WHERE EXISTS (
  SELECT 1 FROM orders WHERE users.id = orders.user_id
);
```

---

### UNION

Combines result sets of two queries and removes duplicates.

```sql
SELECT name FROM customers
UNION
SELECT name FROM suppliers;
```

---

### UNION ALL

Combines result sets of two queries and includes duplicates.

```sql
SELECT name FROM customers
UNION ALL
SELECT name FROM suppliers;
```

---

## 💡 Tips

- SQL is **not case sensitive**, but writing keywords in uppercase is a common convention.
- Strings should be wrapped in single quotes `'like this'`.
- Use double dashes `--` for comments.

```sql
-- This is a comment
SELECT * FROM users; -- Another comment
```

---
