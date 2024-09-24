import { Wave } from "./wave";

export class WaveGroup {
  private readonly totalWaves: number = 3;
  private readonly waves: Wave[];

  constructor() {
    this.waves = Array.from({ length: this.totalWaves }, () => new Wave());
  }

  resize(clientWidth: number, clientHeight: number): void {
    this.waves.forEach((wave) => wave.resize(clientWidth, clientHeight));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.waves.forEach((wave) => wave.draw(ctx));
  }
}
