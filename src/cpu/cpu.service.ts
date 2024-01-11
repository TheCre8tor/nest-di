import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  private readonly powerService: PowerService;

  constructor(powerService: PowerService) {
    this.powerService = powerService;
  }

  compute(a: number, b: number): number {
    console.log('Drawing 10 watts of power from power service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
