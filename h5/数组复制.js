let a = [1,2,3,4]
let b = [].concat(a)
let c = a.slice()
b[0] = "b"
c[0] = "c"
// 
console.log("不变的a:", a)


let oa = [{name: "oa",ooa:{name:"ooa"}},1,2]
let ob = [].concat(oa)
let oc = oa.slice()

// 对象引用地址相同
ob[0]["name"] ="test 1"
ob[2]= "ob"
oc[0].ooa["name"] ="test 2"

console.log("被修改过oa:", oa)
