/**
 * 공식 문서
 * https://stylelint.io/user-guide/rules
 */

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-prettier'], // stylelint-config-prettier는 항상 마지막에 추가할 것. 이전 확장 규칙을 덮어쓰기 함으로써 prettier와 stylelint끼리 충돌하는 상황을 무마할 수 있다
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'alpha-value-notation': 'number', // rgb()에서 opacity 표현 형식을 %나 숫자 중에서 선택
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment', 'first-nested'],
        ignoreAtRules: ['else'],
      },
    ], // at rule 전에 한 줄 여백 강제 여부
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }], // css 기본 문법 이외에 다른 @ 문법 사용 시 에러 발생
    'color-function-notation': 'modern', // grb() 같은 컬러 함수를 modern과 legacy 중에서 선택
    'color-hex-length': 'short', // 색상 hex 값을 단축 값(3자리)과 기본 값(6자리) 중에서 선택
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'], ignore: ['after-comment', 'stylelint-commands'] },
    ], // 주석 앞에 한 줄 여백 강제 여부
    'comment-whitespace-inside': 'always', // 주석 안에서 문장 앞뒤로 공백을 둘지 여부
    'custom-property-empty-line-before': ['always', { except: ['after-custom-property', 'first-nested'] }], // custom property 앞에 한 줄 여백 강제 여부
    'declaration-empty-line-before': ['always', { except: ['after-comment', 'after-declaration', 'first-nested'] }], // 속성 선언 앞에 한 줄 여백 강제 여부
    'declaration-property-value-no-unknown': true, // 올바르지 않은 키-값에 대한 에러 발생 여부
    'font-family-name-quotes': 'always-where-recommended', // 폰트 이름에 따옴표를 어떻게 쓸지 선택
    'function-name-case': 'lower', // 함수명 표기 방식을 소문자나 대문자 중에서 선택
    'function-url-quotes': 'always', // url() 안에 따옴표 사용 여부
    'length-zero-no-unit': true, // 값이 0일 때 단위 사용 금지 여부
    'no-descending-specificity': [true, { ignore: ['selectors-within-list'] }], // 명시도가 높은 선택자를 낮은 선택자보다 먼저 쓸 수 없음 (이 옵션을 비활성할 수 있는 방법이 없음)
    'number-max-precision': 10, // 소수점 자릿수 설정
    'number-no-trailing-zeros': true, // 소수점 이하를 0으로 끝낼 수 없음
    'order/properties-alphabetical-order': true, // 속성을 알파벳 순으로 정렬할지 여부
    'rule-empty-line-before': ['always-multi-line', { except: ['after-single-line-comment', 'first-nested'] }], // rule 앞에 한 줄 여백 강제 여부
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }], // scss 기본 문법 이외에 다른 @ 문법 사용 시 에러 발생
    'selector-attribute-quotes': 'always', // 셀렉터 속성에서 따옴표 사용 여부 ('never'로 하면 "Unclosed string (CssSyntaxError)" 에러 발생. 아마도 eslint의 rule과 충돌하는 듯)
    'selector-nested-pattern': '^&?', // nested 문법 안에서 사용할 패턴 (regex 또는 string)
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['export'] }], // 알려지지 않은 가상 클래스 사용 금지
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }], // 알려지지 않은 가상 요소 선택자 사용 금지
    'selector-type-case': 'lower', // 타입 선택자 표기 방식을 소문자와 대문자 중에서 선택
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace'],
        // ignoreNamespaces: ["/regex/", /regex/, "string"],
        // ignoreTypes: ["/regex/", /regex/, "string"],
      },
    ], // 알려지지 않은 타입 선택자 사용 금지
    'value-keyword-case': 'lower', // 속성값 표기 방식을 소문자나 대문자 중에서 선택
  },
}
