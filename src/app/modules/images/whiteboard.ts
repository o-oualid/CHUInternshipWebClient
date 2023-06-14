import Konva from "konva";

export class WhiteBoard {
  stage!: Konva.Stage;
  mainLayer!: Konva.Layer;
  backLayer!: Konva.Layer;


  width = 0;
  height = 0;

  initStage(width: number, height: number, containerId: string) {
    this.width = width;
    this.height = height;

    this.stage = new Konva.Stage({
      width: width,
      height: height,
      container: containerId
    });

    this.stage.draggable(true);

    this.stage.on('dragend', (e) => {
      const position = e.currentTarget.position();
    });

    const scaleBy = 1.01;
    this.stage.on('wheel', (e) => {

      e.evt.preventDefault();

      const oldScale = this.stage.scaleX() ?? 0;
      const pointer = this.stage.getPointerPosition();
      if (!pointer) return;
      const mousePointTo = {
        x: (pointer.x - this.stage.x()) / oldScale,
        y: (pointer.y - this.stage.y()) / oldScale,
      };

      // how to scale? Zoom in? Or zoom out?
      let direction = e.evt.deltaY > 0 ? -1 : 1;

      // when we zoom on trackpad, e.evt.ctrlKey is true
      // in that case lets revert direction
      if (e.evt.ctrlKey) {
        direction = -direction;
      }

      const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

      this.stage.scale({x: newScale, y: newScale});

      const newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
      this.stage.position(newPos);
    });
  }

  initMainLayer() {
    this.mainLayer = new Konva.Layer();
    this.stage.add(this.mainLayer);
    this.mainLayer.draw();
    //this.drawSimpleShapes();
  }


  drawSimpleShapes() {

    const circle = new Konva.Circle({
      x: this.stage.width() / 2,
      y: this.stage.height() / 2,
      radius: 70,
      fill: '#F9E6E0',
      stroke: '#1486F5',
      strokeWidth: 4,
    });

    const rect3 = new Konva.Rect({
      x: 550,
      y: 320,
      width: 100,
      height: 100,
      fill: '#1486F5',
      cornerRadius: [0, 10, 20, 30],
    });

    const rect4 = new Konva.Rect({
      x: 850,
      y: 120,
      width: 100,
      height: 100,
      fill: '#FF00B8'
    });


    this.mainLayer.add(rect3);
    this.mainLayer.add(rect4);
    this.mainLayer.add(circle);
    this.mainLayer.draw();
  }
}
