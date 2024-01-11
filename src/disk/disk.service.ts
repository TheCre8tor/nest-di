import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  private readonly powerService: PowerService;

  constructor(powerService: PowerService) {
    this.powerService = powerService;
  }
}