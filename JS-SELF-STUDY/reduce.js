// NOTE reudce 함수
/**
 * Array.prototype.reduce()
 * reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환한다.
 * reduce 함수는 네 개의 인자를 가진다.
 * 누산기(acc), 현재 값(cur), 현재 인덱스(idx), 원본 배열(src)
 * arr.reduce(callback, [, initialValue])
 */

// ex) 배열의 모든 숫자 요소 더하기
const array = [1, 2, 3, 4];
const sum = array.reduce((arr, value) => {
  return arr + value;
}, 0);

// ex) 객체 배열 형태의 새로운 객체의 형태로 데이터 변환
const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 23 },
];

const newStudents = students.reduce((arr, value) => {
  arr[value.id] = { name: value.name, age: value.age };
  return arr;
}, {});
