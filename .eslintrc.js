/**
 * 공식 문서
 * https://eslint.org/docs/latest/
 *
 * Next-Eslint 공식 문서
 * https://nextjs.org/docs/basic-features/eslint
 */

module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'next',
    'plugin:@next/next/recommended',
    'plugin:import/recommended', // eslint-plugin-import의 추천 정렬
    'plugin:jsx-a11y/recommended', // 웹 접근성 관련 jsx 규칙
    "next/core-web-vitals",
    'plugin:prettier/recommended', // eslint-config-prettier의 추천 설정
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime', // If you are using the new JSX transform from React 17, you should enable this
    'plugin:react/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json', // parser: @typescript-eslint/parser를 활성화 하기 위해 꼭 필요
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-check': 'allow-with-description',
          },
        ], // 설명을 추가하는 조건으로 @ts-expect-error, @ts-ignore, @ts-nocheck, @ts-check 주석을 허용
        '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error', // any 타입 사용 시 알림을 띄움
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        'prettier/prettier': 'off', // prettier 규칙에 맞지 않는 곳 표시. 타입스크립트에서는 알 수 없는 이유로 에러를 발생시키는 경우가 많아 off로 설정해 두었다
      },
    },
    {
      extends: ['plugin:jest/recommended'],
      files: ['*.spec.js', '*.spec.ts', '*.test.js', '*.test.ts'],
      plugins: ['jest'],
    },
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true }, // JSX 파싱을 위해 필요
    ecmaVersion: 'latest',
    requireConfigFile: false, // "no babel config file detected for ..." 에러 해결을 위해 필요
    sourceType: 'module', // 모듈 시스템 사용 시 필요
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'], // prettier는 항상 마지막에 추가. eslint와 prettier 설정이 겹칠 경우 prettier 규칙으로 eslint 규칙을 덮어쓰기 위함
  root: true, // 해당 설정 파일이 root 임을 명시하는 옵션. true라면 상위 설정 파일 찾기를 여기서 멈춘다.
  rules: {
    'array-bracket-spacing': 'warn', // 대괄호 안에서 간격 허용 여부. 기본값 'never'
    camelcase: ['error', { properties: 'never' }], // 카멜 케이스 작명 방식 강제. 기본값 { properties: 'always', ignoreDestructuring: false, ignoreImports: false, ignoreGlobals: false }
    'comma-dangle': ['warn', 'always-multiline'], // trailing commas 사용 여부. 기본값 'never'
    'computed-property-spacing': ['warn', 'never', { enforceForClassMembers: false }], // 계산된 인자(obj[property]) 표시 시 괄호 안에 띄어쓰기 허용 여부. 기본값 'never'
    eqeqeq: 'error', // 일치 연산자(===) 사용 강제. 동등 연산자(==) 사용 금지. 기본값 'always'
    'generator-star-spacing': ['warn', 'after'], // 제네레이터 함수에서 별표의 위치를 강제. 기본값 'before'
    'new-cap': 'error', // 'new' 연산자로 인스턴스 생성 시 constructor 함수명의 첫 글자를 대문자로 강제. 기본값 { newIsCap: true, capIsNew: true, properties: true }
    'no-array-constructor': 'error', // Array() 생성자에 배열 리터럴 생성법을 사용해서 배열 생성 금지
    'no-console': ['warn', { allow: ['warn', 'error'] }], // 콘솔 사용 금지
    'no-debugger': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' ? 'error' : 'warn', // debugger 사용 금지
    'no-duplicate-imports': 'error', // 동일한 모듈에서 import를 여러 번 할 때 import문을 한 번만 사용하도록 강제. e.g. import { apple, banana } from 'fruits'
    'no-extra-semi': 'error', // 불필요한 세미콜론 사용 금지
    'no-inner-declarations': 'warn', // nested block에서 변수 또는 함수 선언 금지. 기본값 'functions'
    'no-multiple-empty-lines': 'warn', // 여러 줄 공백 금지. 기본값 { max: 2 }
    'no-nested-ternary': 'warn', // 중첩 삼항 연산자 금지
    'no-new-object': 'warn', // new Object로 객체 생성 금지
    'no-undef': 'error', // 정의하지 않은 전역 변수는 /* global ... */ 주석에 명시해야 사용 가능하도록 강제
    'no-underscore-dangle': 'error', // 식별자 뒤에 언더스코어를 붙이지 못하도록 강제. 기본값 { allowAfterThis: false, allowAfterSuper: false, allowAfterThisConstructor: false, enforceInMethodNames: false, enforceInClassFields: false, allowInArrayDestructuring: true, allowInObjectDestructuring: true, allowFunctionParams: true }
    'no-unused-vars': ['error', { args: 'after-used' }], // 사용하지 않는 변수 금지
    'no-useless-escape': 'warn', // 불필요한 escape 문자 사용 금지. extends에 eslint:recommended를 설정했을 때 동작한다
    'no-var': 'error', // var 로 변수 선언 금지
    'object-curly-spacing': ['warn', 'always'], // 중괄호 안에 간격 삽입. objectsInObjects: false 옵션은 사용할 수 없음. prettier의 bracketSpacing에 의해 덮어쓰기 되기 때문. 기본값 'never'
    'prefer-const': 'error', // 재할당이 이루어지지 않는 변수에 let을 사용했을 경우 const로 변경하도록 강제
    'prefer-rest-params': 'error', // 함수의 parameter에서 arguments 객체 대신 rest parameter를 사용하도록 강제. e.g. function (...args) {}
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto', // delete 'cr' prettier/prettier 오류를 피하기위해 윈도우 유저에게 필요한 부분
        parser: 'flow',
      },
      // {
      //   usePrettierrc: false, // vscode-prettier 익스텐션이 .prettierrc를 읽기 때문에 이 옵션을 true로 설정해도 소용없음
      // },
    ],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }], // 따옴표를 작은따옴표, 큰따옴표, 백틱 중 한 가지만 사용하도록 강제. 기본값 'double'
    // 'sort-imports': ['warn', { ignoreCase: true, memberSyntaxSortOrder: ['single', 'all', 'multiple', 'none'] }], // import 정렬. 기본값 { allowSeparatedGroups: false, ignoreCase: false, ignoreDeclarationSort: false, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'] }
    'space-before-function-paren': ['warn', 'never'], // 함수 선언 시 함수명과 괄호 사이에 간격 추가를 강제. 기본값 'always'
    /**
     * eslint-plugin-import rules start
     * https://github.com/import-js/eslint-plugin-import#rules
     */
    'import/no-unresolved': 'off', // import한 파일/모듈이 unresolved 되는 일이 없도록 방지
    'import/order': [
      'warn',
      {
        alphabetize: { caseInsensitive: true, order: 'asc', orderImportKind: 'asc' },
        // 'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: true,
      },
    ], // import 순서 정렬. vscode 설정에서 source.organizeImports를 true로 설정하면 정렬과 동시에 사용하지 않는 import까지 삭제할 수 있다. 기본값 { alphabetize: { caseInsensitive: 'false', order: 'ignore', orderImportKind: 'ignore' }, distinctGroup: true, groups: ['builtin', 'external', 'parent', 'sibling', 'index'], newlines-between: 'ignore', pathGroups: [{ patternOptions: { nocomment: true }}], pathGroupsExcludedImportTypes: ['builtin', 'external', 'object'], warnOnUnassignedImports: false }
    /**
     * eslint-plugin-jsx-a11y rules start
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#supported-rules
     */
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['Input'],
        depth: 1,
      },
    ], // 기본 html 태그가 아닌 custom component에서 웹 접근성 관련 에러 발생 방지
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그(li, div 등)에 onClick 등과 같은 이벤트를 연결할 때 필요
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'warn',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['button', 'menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ], // (웹 접근성 문제로)상호작용하지 않는 태그에 onClick 등과 같은 이벤트를 연결하고 해당 태그의 사용 목적을 role 속성으로 명시할 때 필요
    /**
     * eslint-plugin-react rules start
     */
    'react/destructuring-assignment': 'warn', // state, prop 등에 구조분해 할당 적용
    'react/jsx-curly-brace-presence': 'warn', // jsx 내 불필요한 중괄호 금지
    // 'react/jsx-curly-spacing': ['warn', { when: 'always', children: true, objectLiterals: 'never' }], // prettier와 충돌하여 사용할 수 없음
    'react/jsx-key': 'error', // 반복문으로 생성하는 요소에 key 속성 강제. 'react/recommended' 설정 시 활성화. 기본값 { { checkFragmentShorthand: false, checkKeyMustBeforeSpread: false, warnOnDuplicates: false }
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }], // 불필요한 fragment 금지
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름을 PascalCase로 강제. 기본값 ['off', { allowAllCaps: false, allowLeadingUnderscore: false, allowNamespace: false }]
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowFunctions: true,
      },
    ], // JSX에서 .bind() 또는 화살표 함수 사용 금지. 기본값 { ignoreDOMComponents: false, ignoreRefs: false, allowArrowFunctions: false, allowFunctions: false, allowBind: false },
    'react/jsx-uses-react': 'error', // react를 import한 후 JSX 사용 강제. 'react/recommended' 설정 시 활성화. 'no-unused-vars'가 활성화 된 경우 효과 발생
    'react/jsx-uses-vars': 'error', // JSX를 import한 후 해당 JSX 사용 강제. 'no-unused-vars'가 활성화 된 경우 효과 발생
    'react/no-direct-mutation-state': 'error', // state 직접 수정 금지. 'react/recommended' 설정 시 활성화
    'react/no-unescaped-entities': 'error', // JSX 안에서 escape 되지 않은 entity 코드 사용 금지. 'react/recommended' 설정 시 활성화.
    'react/no-unused-state': 'warn', // 사용하지 않는 state가 있을 시 경고 발생
    'react/prop-types': 'off', // prop의 type을 정의하도록 강제. 'react/recommended' 설정 시 활성화. typescript를 사용하면 필요없는 옵션
    'react/react-in-jsx-scope': 'off', // component에서 React를 import하지 않을 경우 오류 발생. 'react/recommended' 설정 시 활성화
    'react/self-closing-comp': ['warn', { component: true, html: false }], // JSX 태그 안에 하위 태그가 없을 경우 self-closing 태그로 변환
    'react/static-property-placement': 'warn', // 클래스에서 childContextTypes, contextTypes, contextType, defaultProps, displayName, propTypes를 정의하도록 강제. 기본값 'static public field'
    'react-hooks/rules-of-hooks': 'error', // react hooks 공식 문서에서 제공하는 규칙을 준수하도록 강제. Roles of Hooks 공식 문서: https://reactjs.org/docs/hooks-rules.html
    'react-hooks/exhaustive-deps': [
      'warn',
      // {
      //   additionHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)', // recoil 사용 시 필요
      // },
    ], // useEffect 안에서 사용하는 함수나 변수를 dependency로 등록하지 않았을 때 경고 발생
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['*.js', '*.jsx', '*.ts', '*.tsx'], // react 사용 시 활성화 필요. jsx를 import할 때 import/no-unresolved 에러가 발생하지 않도록 함
      },
    },
    react: {
      version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
    },
    next: {
      'rootDir': './src/app'
    }
  },
}
