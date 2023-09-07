# This file contains data required for running new Database

## All requests should be in order of execution and after [migration.md](./migration.md) has been executed

**7th September 2023**

```sql
-- Password is 123456789

INSERT INTO eops.user(
	name, email, password, created_on, updated_on)
	VALUES ('Admin', 'admin@shodat.com', '8a678f0eff169a5daeac2e347040c62f19cb4d271ebd8d987abcf1fb4792067b810bb39066bb02cc4523d6bf7d01b6ea1b6857123e8a4e9c791e40c4c18c6a2e', '2023-07-09', '2023-07-09');
    
```