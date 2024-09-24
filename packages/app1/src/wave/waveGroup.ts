import { Wave } from "./wave";

export class WaveGroup {
  private readonly totalWaves: number = 3;
  private readonly totalPoints: number = 6;
  private readonly colors: string[] = [
    "rgba(255, 0, 0, 0.4)",
    "rgba(255, 255, 0, 0.4)",
    "rgba(0, 255, 255, 0.4)",
  ];
  private readonly waves: Wave[];

  constructor() {
    this.waves = Array.from(
      { length: this.totalWaves },
      (_, i) => new Wave(i, this.totalPoints, this.colors[i])
    );
  }

  resize(clientWidth: number, clientHeight: number): void {
    this.waves.forEach((wave) => wave.resize(clientWidth, clientHeight));
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.waves.forEach((wave) => wave.draw(ctx));
  }
}
