import { Point } from "./point";

export class Wave {
  private points: Point[] = [];
  private stageWidth: number = 0;
  private stageHeight: number = 0;
  // private centerX: number = 0;
  private centerY: number = 0;
  private pointGap: number = 0;

  constructor(
    private readonly index: number,
    private readonly totalPoints: number,
    private readonly color: string
  ) {}

  resize(stageWidth: number, stageHeight: number): void {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    // this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  private init(): void {
    this.points = Array.from(
      { length: this.totalPoints },
      (_, i) =>
        new Point(this.index + i, this.pointGap * i, this.centerY, this.centerY)
    );
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update();
      }

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}
