---
categories:
  - coding
tags:
  - sql
date: 2024-11-29
title: sql学习!
---

## sql介绍

SQL(Structured Query Language)是结构化查询语言，是一种用于管理和操作关系数据库的编程语言。SQL是一种标准化的语言，用于定义、操作和查询关系数据库。

三个关键点

1.sql是一门`数据库编程语言`

2.使用SQL语言编写出来的代码，叫做`SQL语句`

3.SQL`语言只能在关系型数据中使用`，如MySQL、Oracle、SQL Server等。非关系型数据库不支持SQL语言

SQL语言的主要功能包括：

- 数据定义：用于创建、修改和删除数据库对象，如表、视图、索引等。
- 数据操作：用于插入、更新、删除和查询数据。

SQL的学习目标

查询数据(select)、插入数据(insert into)、更新数据(update)、删除数据(delete)

额外的4种SQL语法

where 条件、and 和 or 运算符、排序(order by)、聚合函数(count、sum、avg、max、min)

## sql语法

### 1.数据库操作

#### 1.1创建数据库

```sql
CREATE DATABASE 数据库名称;
```

#### 1.2查看数据库

```sql
SHOW DATABASES;
```

#### 1.3选择数据库

```sql
USE 数据库名称;
```

#### 1.4删除数据库

```sql
DROP DATABASE 数据库名称;
```

### 2.表操作

#### 2.1创建表

```sql
CREATE TABLE 表名 (
    列名1 数据类型,
    列名2 数据类型,

    ...
);
```

#### 2.2查看表

```sql
SHOW TABLES;
```

#### 2.3查看表结构

```sql
DESC 表名;
```

#### 2.4删除表

```sql
DROP TABLE 表名;
```

#### 2.5修改表

```sql
ALTER TABLE 表名
ADD 列名 数据类型;
```

### 3.数据操作

#### 3.1插入数据

```sql
INSERT INTO 表名 (列名1, 列名2, ...) VALUES (值1, 值2, ...);

```

#### 3.2查询数据

```sql
SELECT 列名1, 列名2, ... FROM 表名 WHERE 条件;
```

#### 3.3更新数据

```sql
UPDATE 表名 SET 列名1 = 值1, 列名2 = 值2, ... WHERE 条件;
```

#### 3.4删除数据

```sql
DELETE FROM 表名 WHERE 条件;
```

### 4.条件语句

#### 4.1比较运算符

- `=`：等于
- `<>`：不等于
- `>`：大于
- `<`：小于
- `>=`：大于等于
- `<=`：小于等于

#### 4.2逻辑运算符

- `AND`：并且
- `OR`：或者
- `NOT`：非

#### 4.3模糊查询

- `LIKE`：模糊匹配

  - `%`：表示任意多个字符
  - `_`：表示任意一个字符

#### 4.4范围查询

- `BETWEEN`：在某个范围内

#### 4.5空值查询

- `IS NULL`：为空
- `IS NOT NULL`：不为空

### 5.排序

#### 5.1升序

```sql
ORDER BY 列名 ASC;
```

#### 5.2降序

```sql
ORDER BY 列名 DESC;
```

### 6.聚合函数

#### 6.1COUNT

