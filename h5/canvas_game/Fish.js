import Spirit from "./Spirit";

class Fish extends Spirit{
  // type 鱼的类型
  constructor(type) {
    if(type>=1 && type<=5){
      throw new Error("鱼的类型不在范围内")
    }
    const data = __g_resouce["fish"]
    
    super({
      img: data.img,
      w: data.x,
      h: data.y,
      sx: data.sx,
      sy:data.sy,
      rotation: 90, 
      speed: Math.random*2.5+0.5 // 随机速度
    })

    this.max_tick = 5
    this.max_frame = 4

  }

  draw(gd){
    // 重写父级方法,改变鱼的转向问题?
    this.rotation -= 90
    super.draw(gd)
    this.rotation +=90
  }

}