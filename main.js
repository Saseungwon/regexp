// 정규식 메서드
let str = `
010-1234-5678
the1425@naver.com
https://omdbapi.com/?apikey=14980
The quick brown fox jumped over the lazy dog.
abbcccdddd
d
hxyp
http://omdbapi.com/?apikey=14980
동해물과 백두산이 마르고 닳도록
`

    const regexp1 = new RegExp('the', 'gi')    // 생성자 방식
    const regexp2 = /the/gi                    // 리터럴 방식
    console.log(str.match(regexp))
    const regexp3 = /fox/gi
    console.log(regexp3.test(str))            // true
    str = str.replace(regexp3, 'AAA')
    console.log(str)                          // The quick brown AAA jumped




// 정규식 플래그
    const regexp = /the/gi                   // 대소문자 구분 안 하고 일치하는 문자 배열로 출력
    console.log(str.match(regexp))
    console.log(str.match(/\.$/gim))         //  .



// 정규식 패턴
console.log(
  str.match(/d$/gm)     // 멀티라인 추가해서 문장 끝이 d인것 찾기
)
console.log(
  str.match(/^t/gim)    // 문장 시작이 t인것 찾기
)

console.log(
  str.match(/h..p/g)    // [http, hxyp]
)
console.log(
  str.match(/fox|dog/g) // [fox, dog]
)
console.log(
  str.match(/https?/g)  // [https, http]
)

console.log(
  str.match(/d{2}/g)  // ['dd', 'dd']
)
console.log(
  str.match(/d{2,}/g)  // ['dddd']
)
console.log(
  str.match(/d{2,3}/g)  // ['ddd']
)
console.log(
  str.match(/\b\w{2,3}\b/g)  // ['010', 'com', 'com', 'The', 'AAA', 'the', 'dog', 'com']
)

console.log(
  str.match(/[0-9]{1,}/g)  // ['010', '1234', '5678', '1425', '14980', '14980']
)
console.log(
  str.match(/[가-힣]{1,}/g)  // ['동해물과', '백두산이', '마르고', '닳도록']
)

console.log(
  str.match(/\w/g)  // 63개 문자(Word, 영문 대소문자 52개 + 숫자 10개 + _)에 일치
)
console.log(
  str.match(/\b/g)  // 63개 문자(영문 대소문자 52개 + 숫자 10개 + _(underscore))가 아닌 나머지 문자에 일치하는 경계(boundary)
)
console.log(
  str.match(/\bf\w{1,}\b/g)  
)