class Log extends BaseClass{
  constructor(x,y,height,angle){
    var options = {
      isStatic: true
  }
    super(x,y,20,height,angle);
    Matter.Body.setAngle(this.body, angle);
  }
}