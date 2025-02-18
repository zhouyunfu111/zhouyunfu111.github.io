---
top: 2
categories:
  - coding
tags:
  - mysql
date: 2024-11-29
title: mysql学习！
---

## 一、 前言

> mysql是用于存储数据的，而数据是用于存储信息的，信息是用于描述事物的

> mysql是关系型数据库，而关系型数据库是用于存储关系数据的，关系数据是用于描述关系的

## 二、mysql安装

> mysql安装教程：https://www.cnblogs.com/zhengyuxiang/p/17083761.html

## 三、mysql基本操作

### 1. mysql登录

> mysql登录命令：`mysql -uroot -p`

### 2. mysql退出

> mysql退出命令：`exit`

### 3. mysql数据库操作

> 创建数据库：`create database 数据库名;`
>
> 删除数据库：`drop database 数据库名;`
>
> 查看数据库：`show databases;`

## 四、mysql表字段类型

primary key : 主键，唯一标识

auto_increment : 自增

not null : 非空

default : 默认值

unique : 唯一

## 五、mysql表操作

### 1. mysql表创建

> 创建表：`create table 表名(字段名 字段类型,字段名 字段类型,字段名 字段类型);`
