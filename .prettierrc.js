module.exports = {
  arrowParens: 'avoid', // 인자가 한 개인 화살표 함수 사용 시 괄호 사용 여부. e.g. "const add = num => 1 + num" 처럼 인자가 num 하나일 때
  bracketSameLine: false, // JSX 여는 태그의 '>'를 줄바꿈할지 여부
  bracketSpacing: true, // 대괄호 안 양쪽 끝에 간격 추가 여부
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 120,
  proseWrap: 'preserve',
  quoteProps: 'as-needed', // 객체의 Key를 따옴표 안에 넣을 때, 하나의 key를 따옴표 안에 넣으면 나머지 key도 모두 따옴표 안에 넣을지 아니면 필요한 곳만 넣을지 여부
  semi: false, // 코드 마지막에 세미콜론을 붙일지 여부
  singleQuote: true, // 따옴표 사용 시 작은따옴표로 통일 여부
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false, // 간격을 추가할 때 공백문자 대신 탭 사용 여부
  vueIndentScriptAndStyle: true,
}
