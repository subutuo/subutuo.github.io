---
layout: post
title: "sort(), reduce()"
tags: [javascript]
comments: true
---

## Array.prototype.sort(func)
배열의 순서를 정할 때 사용하는 함수이다. 기본적으로 **오름차순**이며 **문자열 정렬**이다.

```js
let arr = [5, 30]
arr.sort()
console.log(arr) // [30, 5]
```
위와 같이sort()는 문자열로 비교하므로 기대하는 결과와 다르게 나온다.  
맨 앞자리 '3'과 '5'를 우선으로 비교하므로 30이 오름차순으로 먼저 오게 된 결과 값이다.

<br>

### 정렬 순서를 임의로 정의하려면  
`[30, 5]`의 배열을 숫자로 오름차순 정렬하고 싶을 경우엔 아래와 같이 인자에 함수를 넣어준다.
```js
sort((a, b) => a - b)  // 숫자별로 오름차순

/* 
sort(function(a, b) {
  return a - b
})
*/
```
매개변수 a와 b는 배열 안의 비교할 요소이다.  
기억해야할 것은 **a는 첫번째 인자, b는 두번쨰 인자**라는 것,  
그리고 **리턴하는 값이 음수면 a가 b보다 낮은 색인, 양수면 a가 b보다 높은 색인**이라는 것이다.(색인 = index)  
따라서 리턴 값이 **`a - b`** 라는 것이 의미하는 것은 **오름차순**을 뜻하고  
반대로 리턴 값이 **`b - a`** 라는 것은 **내림차순**을 뜻한다.
  
<br>

### 실제 정렬한 배열이 정렬된다.
편의상 정렬한 배열을 리턴하는데 오해하면 안된다.  
원본이 수정(정렬시킴)되고 수정한 배열을 리턴하는 것이다.
```js
let arr1 = [5, 50]
let arr2 = arr.sort()
console.log(arr1 === arr2) // true
```

<br>

## Array.prototype.reduce(callback[, initialValue]) 
누산기(accumulator)와 배열의 각 요소에 대해 **0번째 인덱스부터 차례대로** 하나의 단일 값(single value)으로 줄이는 함수

<br>

### 예제
~~~js
const array1 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

console.log(array1.reduce(reducer)) // 1 + 2 + 3 + 4 = 10

console.log(array1.reduce(reducer, 5)) // 5 + 1 + 2 + 3 + 4 = 15
~~~

<br>

### 매개변수 

~~~js
    reduce 매개변수 arr.reduce(callback[, initialValue])
    callback 매개변수 : accumulator, currentValue, currentIndexOptional, arrayOptional
    
    accumulator : 누산기(accumulator)는 콜백의 반환값을 누적합니다. 
                  초기값(initialValue)이 주어진 경우에는 그 값(아래 참조) 또는 콜백의 마지막 호출에서 이전에 반환된 누적값입니다.
    
    currentValue : 배열 내 현재 처리되고 있는 요소.
    
    currentIndexOptional : 배열 내 현재 처리되고 있는 요소의 인덱스.
                           초기값(initialValue)이 주어진 경우 0부터, 그렇지 않으면 1부터 시작합니다.
    arrayOptional : reduce()가 호출된 배열.
    
    initialValueOptional : 콜백(callback)의 첫 번째 호출에서 첫 번째 인수로 사용되는 값.
                           초기값이 주어지지 않은 경우에는 배열의 첫 번째 요소가 사용됩니다. 
                           빈(empty) 배열에서 초기값 없이 reduce()를 호출하면 에러가 발생합니다.
~~~

<br>

### 반환 값
누적 계산의 결과를 반환 합니다.

<br>

### 주의
객체배열(배열 안에 객체가 들어 있는 경우)일 경우에는 초기값이 반드시 주어져야 한다.  
아니면 currentValue 초기값에 엉뚱한 값이 들어오게 된다.
```js
    var arr = [{x: 1}, {x: 2}, {x: 3}]
	
	/* 
	1. 초기 값을 주어주지 않았으므로 배열의 0번째 값이 초기값이 된다.
	2. accumulator의 초기값은 {x: 1}이 된다.
	3. 1번째 값의 x값을 더해 [object Object]2
	4. 2번째 값의 x값을 더해 [object Object]23
	
	*/
    var sum = arr.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.x
    }) 
    console.log(sum) // [object Object]23

    // 초기값 대입하면 원하는 결과 값이 나오게 된다.
    var initialValue = 0;
    var sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.x
    },initialValue)

    console.log(sum) // 6
```

<br>

### 활용
배열의 중복항목 제거 로직
~~~
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4]
let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current)
    }
    return accumulator
}, []);
console.log(result) //[1,2,3,4,5]
~~~
