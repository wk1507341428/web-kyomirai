/**
 * @description 类型检查
 * @param {Any} o
 * @return {String} 类型
 * */
 export function typeOf(o) {
  const { toString } = Object.prototype;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
    '[object Symbol]': 'symbol',
  };

  return map[toString.call(o)];
}

/**
 * @description sleep
 * */
 export function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time * 1000));
}