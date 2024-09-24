import { Pointer } from "./pointer";

export class Wave {
  private centerX: number = 0;
  private centerY: number = 0;
  private pointer: Pointer | null = null;

  resize(stageWidth: number, stageHeight: number): void {
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;
    this.init();
  }

  private init(): void {
    this.pointer = new Pointer(this.centerX, this.centerY, this.centerY);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.pointer) return;

    ctx.beginPath();
    ctx.fillStyle = "#ff0000";

    this.pointer.update();

    ctx.arc(this.pointer.x, this.pointer.y, 30, 0, 2 * Math.PI);
    ctx.fill();
  }
}
