
/**
 * @description 常用的js封装
 */

// typeof 类型判断

function isString(o) { //是否字符串
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

function isNumber(o) { //是否数字
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

function isBoolean(o) { //是否boolean
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

function isFunction(o) { //是否函数
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

function isNull(o) { //是否为null
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

function isUndefined(o) { //是否undefined
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

function isObj(o) { //是否对象
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

function isArray(o) { //是否数组
  if (Array.isArray) {
    return Array.isArray(arr)
  } else {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
}

/**
 * @description格式化时间
 * @param  {time} 时间
 * @param  {cFormat} 格式
 * @return {String} 字符串
 *
 * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
 */
function formatTime(time, cFormat) {
  if (arguments.length === 0) {}
  if ((time + '').length === 10) {
    time = +time * 1000
  }

  var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}', date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(time)
  }

  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    var value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @description 判断字符串是否为空
 * @param  {String} str 字符串
 * @return {Boolean} 布尔值 是空字符串返回true
 */
function isNullString(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "").length === 0
}


/**
 * @description 判断手机号是否合法
 * @param  {String} str 字符串
 * @return {Boolean} 布尔值 合法返回true
 */
function isTrueTel(str) {
  return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
}


/**
 * @description 判断身份证是否合法
 * @param  {String} str 字符串
 * @return {Boolean} 布尔值 合法返回true
 */
function isTrueIDCard(str) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
}


/**
 * @description 将伪数组转为数组
 * @param  {Object} pseudoArray 伪数组
 * @return {Array} 返回数组对象
 */
function formArray(pseudoArray) {
  var arr = [];
  if (Array.isArray(pseudoArray)) {
    arr = pseudoArray;
  } else {
    arr = Array.prototype.slice.call(pseudoArray);
  };
  return arr;
}


/**
 * @description 增加cookie
 * @param  {String} objName 指定cookie的名称
 * @param  {String} objValue 指定cookie的值
 * @param  {Number} objHours cookie的存在时间,为0时不设定过期时间，浏览器关闭时cookie自动消失
 */
function addCookie(objName, objValue, objHours) {
  let str = objName + "=" + escape(objValue);
  if (objHours > 0) {
    let date = new Date();
    let ms = objHours * 3600 * 1000;
    date.setTime(date.getTime() + ms);
    str += "; expires=" + date.toGMTString();
  }
  document.cookie = str;
}


/**
 * @description 获取指定名称的cookie值
 * @param  {String} objName 指定cookie的名称
 */
function getCookie(objName) {
  const arrStr = document.cookie.split("; ");
  for (let i = 0; i < arrStr.length; i++) {
    const temp = arrStr[i].split("=");
    if (temp[0] === objName)
      return unescape(temp[1]);
  }
}

/**
 * @description 设置指定名称的localStorage
 * @param  {String} name localStorage
 * @param  {Object} obj 指定名称的值
 */
function setLocalStorageObject(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj))
}


/**
 * @description 获取指定名称的localStorage
 * @param  {String} name localStorage
 */
function getLocalStorageObject(name) {
  if (!localStorage.getItem(name)) {
    localStorage.setItem(name, JSON.stringify({}))
  }
  return JSON.parse(localStorage.getItem(name))
}

/**
 * @description 数组去重
 * @param  {Array} arr 数组对象
 */

function unique(arr) {
  var tmparr = [];
  var tmp = {};
  for (var i = 0; i < arr.length; i++) {
    if (typeof tmp[arr[i]] === "undefined") {
      tmp[arr[i]] = 1
      tmparr.push(arr[i])
    }
  }
  return tmparr
}

/**
 * @description es6数组去重
 * @param  {Array} arr 数组对象
 */

function unique(arr){
  return Array.from(new Set(arr))
}