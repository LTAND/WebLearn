// eg: https://www.baidu.com:8080/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1
const querystring = require("querystring")

let data = querystring.parse("ie=utf-8&f=3&rsv_bp=1&rsv_idx=1")
// 返回 { ie: 'utf-8', f: '3', rsv_bp: '1', rsv_idx: '1' }
console.log("data:", data)

/** stringify(obj)
 * 序列化类型的值：<string> | <number> | <boolean> | <string[]> | <number[]> | <boolean[]>。 
 * 任何其他输入值都将被强制转换为空字符串。
 * 格式默认 "&", "=""
*/

let str1 = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='
console.log("str1:", str1)

let str2 = querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');  
// 返回 'foo:bar;baz:qux'
console.log("str2:", str2)

