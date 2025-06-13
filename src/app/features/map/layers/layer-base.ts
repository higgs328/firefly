import { DrawService } from '../../../core/services/draw/draw.service';

export abstract class LayerBase {
  protected abstract layerId: string;

  protected drawService: DrawService;

  constructor(drawService: DrawService) {
    this.drawService = drawService;
  }
}
