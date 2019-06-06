const a = new Buffer("abc")
const b = new Buffer("ddd")
const c = Buffer.concat([a,b])

console.log("a", a, "\nb",b)
console.log("c", c)