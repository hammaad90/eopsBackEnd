# This file contains all SQL queries to create the shodat Database

## All requests should be in order of execution. 

**7th September 2023**
```sql
CREATE DATABASE eops
    WITH 
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE `eops`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NULL,
  `password` LONGTEXT NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `verified` TINYINT NOT NULL DEFAULT 0,
  `account_type` ENUM('INDIVIDUAL', 'ENTERPRISE') NOT NULL DEFAULT 'INDIVIDUAL',
  `deleted` TINYINT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE
  );

```