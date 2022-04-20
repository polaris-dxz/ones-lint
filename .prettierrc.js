module.exports = {
  /**
   * @description 文本换行长度
   * @default 80
   * @link https://www.prettier.cn/docs/options.html#print-width
   */
  printWidth: 100,
  /**
   * @description tab 宽度
   * @default 2
   * @link https://www.prettier.cn/docs/options.html#tab-width
   */
  tabWidth: 2,
  /**
   * @description 分号
   * @default true
   * @see semi: ['error', 'never'],
   * @link https://www.prettier.cn/docs/options.html#semicolons
   */
  semi: false,
  /**
   * @description 字符串优先单引号
   * @default false
   * @see quotes: ['error', 'single', { avoidEscape: true }]
   * @link https://www.prettier.cn/docs/options.html#quotes
   */
  singleQuote: true,
  /**
   * @description 尾逗号
   * @default es5
   * @see 'comma-dangle': ['error', 'never']
   * @link https://www.prettier.cn/docs/options.html#trailing-commas
   */
  trailingComma: 'none',
  /**
   * @description 箭头函数-函数参数始终加上小括号
   * @default always
   * @see 'arrow-parens': ['warn', 'always']
   * @link https://www.prettier.cn/docs/options.html#arrow-function-parentheses
   */
  arrowParens: 'always'
}
