export class Point {
  private readonly speed: number = 0.1;
  private cur: number;
  private readonly max: number;

  constructor(
    index: number,
    public x: number,
    public y: number,
    private readonly fixedY: number
  ) {
    this.cur = index;
    this.max = Math.random() * 100 + 150;
  }

  update(): void {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}