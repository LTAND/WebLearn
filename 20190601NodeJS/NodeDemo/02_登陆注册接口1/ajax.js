function Ajax(options){

  options = options || {}
  options.method = options.method || "GET"
  options.dataType = options.dataType || "text"
  let xhr = null 

  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest()
  } else if (window.ActiveXObject){
    xhr = ActiveXObject("Microsoft.XMLHTTP")
  }else{
    console.log("Ajax do not create xhr!")
  }

  /* 
  处理data参数：
    {a:1, b:2} => a=1&b=2
  */
  let arr = [] 
  for (let name in options.data){
    arr.push(name + "=" + options.data[name])
  } 
  let strData = arr.join("&")

  if (options.method === "get" || "GET"){
    /* 主要讲汉字转化
      encodeURI不编码字符有82个：!，#，$，&，'，(，)，*，+，,，-，.，/，:，;，=，?，@，_，~，0-9，a-z，A-Z
      encodeURIComponent不编码字符有71个：!， '，(，)，*，-，.，_，~，0-9，a-z，A-Z
    */
    xhr.open(options.method, options.url + "?" + encodeURI(strData),  )
  } else if (options.method === "post" || "POST"){
    xhr.open(options.method, options.url, true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(strData)
  }else{
    alert("ajax hava not PUT or DELETE ...")
  }

  xhr.onreadystatechange = function(){
    try{
      if (xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
          let data = xhr.responseText

          switch (options.dataType){
            case "json" || "JSON":
              data = window.JSON && JSON.parse ? JSON.parent(data) : eval("(" + data + ")")
              break;
            case "xml" || "XML":
              data = xhr.responseXML
          }

          options.success && options.success(data) // 成功回调
        }else{
          options.err && options.err() // 失败回调
        }
      }
    }catch(e){
      alert('Caught Exception: ' + e.description);
    } 
  }
}