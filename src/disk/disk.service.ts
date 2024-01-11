import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  private readonly powerService: PowerService;

  constructor(powerService: PowerService) {
    this.powerService = powerService;
  }

  getData(): string {
    console.log('Drawing 20 watts of power from power service');
    this.powerService.supplyPower(20);
    return 'data!';
  }
}
