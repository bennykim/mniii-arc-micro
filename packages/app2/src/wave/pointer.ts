export class Pointer {
  private readonly speed: number = 0.1;
  private cur: number = 0;
  private readonly max: number;

  constructor(
    public x: number,
    public y: number,
    private readonly fixedY: number
  ) {
    this.max = Math.random() * 100 + 150;
  }

  update(): void {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}