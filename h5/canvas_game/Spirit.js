export default class Spirit{

  constructor(options) {
    this.img = options.img

    this.w = options.w||this.img.width
    this.h = options.h || this.img.height

    this.x = options.x||0
    this.y = options.y||0

    this.sx = options.sx||0
    this.sy = options.sy||0

    this.scale = options.scale || 1
    this.rotation = options.rotation || 0

    // 速度 speed
    this.speed = option.speed || 0

    // 帧动画速度
    this.tick = 0
    this.max_tick = 0
    this.frame = 0
    this.max_frame = 0
  }

  draw(gd){
    this.save()

    this.transalte(this.x, this.y)
    this.rotation(this.rotation)
    
    gd.drawImage(
      this.img,
      this.x, this.y,
      this.sx, this.sy,
      -this.w/2, -this.h/2,
      this.x, this.y
    )
  
    this.restore()
  }

  move(){
    this.speed_x = this.speed * Math.sin(this.rotation * Math.PI /180)
    this.speed_y = this.speed * Math.cos(this.rotation * Math.PI /180)
    this.x += this.speed_x
    this.y -= this.speed_y
  }

  setFrame(){
    this.sy = this.h
  }

  nextFrame(){
    this.tick++

    if (this.tick === this.max_tick){
      this.tick = 0
      
      if(this.frame === this.max_frame){
        this.frame = 0
      }

      this.frame++
      this.setFrame(this.frame)
    }

  }
}

