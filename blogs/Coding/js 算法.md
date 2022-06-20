---

categories:
  - coding
tags:
  - js
date: 2021-11-20
title: JavaScript 算法!
---

## 输入id,数组向上查找父节点及祖先节点
```
const data = [{
  id: 1,
  lineprodname: '桂花酒酿麻薯鲜奶茶',
  children: [{
      id: 11,
      lineprodname: '桂花酒酿麻薯鲜奶茶',
      chilren:[{
        lineprodname: '麻薯',
        id:111,
        prodcode:'31231'
      },
      {
        lineprodname: '桂花',
        id:112,
        prodcode:'31231'
      },
      {
        lineprodname: '鲜奶',
        id:113,
        prodcode:'31231'
      },
      {
        lineprodname: '绿茶',
        id:114,
        prodcode:'31231'
      }]
    },
    {
      id: 12,
      lineprodname: '桂花酒酿麻薯鲜奶茶',
    },
    {
      id: 13,
      lineprodname: '桂花酒酿麻薯鲜奶茶',
    },
    {
      id: 14,
      lineprodname: '桂花酒酿麻薯鲜奶茶',
    }
  ]
}]

function findTreeLine(tree, id) {
  let res
  function f(arr, history) {
    arr.find(item => {
      const newHistory = [...history, item.id]
      console.log(newHistory)
      if (item.id === id) {
        return res = newHistory
      } else {
        const { children } = item
        if (children && children.length) {
          return f(children, newHistory)
        }
      }
    })
  }
  f(tree, [])
  return res
}
findTreeLine(data,111)
```

## 二分查找法(折半查找)

二分查找法在某些情况下比顺序查找效率更高，但是算法的使用的前提是需要查找的数据必须是有序的

``` js
function getMidIndex(arr,target) {
  let start = 0
  let end = arr.length
  while (start < end) {
    const middleIndex = Math.floor((start + end) / 2)
    const middleValue = arr[middleIndex]
    console.log(middleValue,target)
    if (target === middleValue) {
      return middleIndex + 1
    } else if (middleValue < target) {
      start = middleIndex + 1
    } else if (middleValue > target) {
      end = middleIndex - 1
    }
  }

  return middleIndex
}

getMidIndex([2,5,7,18,19,20,23,24,25,28],24)

```

## 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 

``` js
const firstUniqChar = function(s) {
  for(let i in s){
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
      return i
    }
  }
  return -1;
}
```
总结：利用了indexOf和lastIndexOf的特点，判断一个字符的从开始找到的位置和结束开始找到位置，是否都处于一个位置上。如果是那么就认定这个字符是不重复且是第一个
## 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。

``` js
const twoSum = function (nums,target) {
  nums.forEach((el,index) => {
    const indexVal = nums.findIndex(item => el + item === target)
    if(indexVal !== -1){
      return [index,indexVal]
    }
  });
}
twoSum([2,3,6,7,8,9,10,12,13,14],5)

```

