### 一、常用的js封装
1、typeof 类型判断
```
function isString (o) { //是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

function isNumber (o) { //是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

function isBoolean (o) { //是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

function isFunction (o) { //是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

function isNull (o) { //是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

function isUndefined (o) { //是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

function isObj (o) { //是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

function isArray (o) { //是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}
```
2、格式化时间
```
/**
 * @description格式化时间
 * @param  {time} 时间
 * @param  {cFormat} 格式
 * @return {String} 字符串
 *
 * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
 */
formatTime(time, cFormat) {
    if (arguments.length === 0) return null
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

```
3、判断字符串是否为空
```
/**
 * @description 判断字符串是否为空
 * @param  {String} str 字符串
 * @return {Boolean} 布尔值 是空字符串返回true
 */
function isNullString(str){
  return str.replace(/(^\s*)|(\s*$)/g, "").length === 0
}
```
