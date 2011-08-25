/*
Draws straight lines between points sampled with mouseMove event
*/
function simple(context){
  this.init( context );
}
simple.prototype = {
  prevPoint: null,
  context: null,
  init: function(context) {
    this.context = context;
    this.context.globalCompositeOperation = 'source-over';
  },
  strokeStart: function(point, opts) { 
      this.prevPoint = point;
  },
  stroke: function(point, opts) {
      this.context.lineWidth = opts.brushSize;
      this.context.strokeStyle = "rgba("+opts.color[0]+", "+opts.color[1]+", "+opts.color[2]+", "+opts.opacity+")";
      this.context.beginPath();
      this.context.moveTo(this.prevPoint.x, this.prevPoint.y);
      this.context.lineTo(point.x, point.y);
      this.context.stroke();
      this.prevPoint = point;
  },
  strokeEnd: function(points, opts) {
  }
};

