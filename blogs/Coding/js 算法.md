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
let start = 0
let end = positionArr.length
while (start < end) {
  const middleIndex = (start + end) >> 1
  const middleValue = positionArr[middleIndex].top
  if (target === middleValue) {
    return middleIndex + 1
  } else if (middleValue < target) {
    start = middleIndex + 1
  } else if (middleValue > target) {
    end = middleIndex - 1
  }
}

return middleIndex
```
