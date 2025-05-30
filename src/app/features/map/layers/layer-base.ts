import { DrawService } from '../../../core/services/draw.service';

export abstract class LayerBase {
  abstract layerId: string;

  protected drawService: DrawService;

  constructor(drawService: DrawService) {
    this.drawService = drawService;
  }
}
