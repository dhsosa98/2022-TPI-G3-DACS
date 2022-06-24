import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ShowDto } from '../dtos/Shows.dto';
import { Show } from '../entitities/shows.entity';

@Injectable()
export class ShowsService {
  constructor(
    @Inject('SHOW_REPOSITORY')
    private showRepository: typeof Show,
  ) {}

  async findOne(id: number): Promise<Show> {
    const show = await this.showRepository.findByPk(id);
    if (!show) {
      throw new NotFoundException('Show not found');
    }
    return show;
  }

  async findAll(options?: any): Promise<Show[]> {
    return await this.showRepository.findAll(options);
  }

  async create(show: ShowDto): Promise<Show> {
    const newShow = await this.showRepository.create({ ...show });
    await newShow.save();
    return newShow;
  }

  async delete(id: number): Promise<Show> {
    const show = await this.findOne(id);
    await show.destroy();
    return show;
  }

  async update(id: number, show: any): Promise<Show> {
    const showToUpdate = await this.findOne(id);

    showToUpdate.name = show.name;
    showToUpdate.seat = show.seat;
    showToUpdate.dateShow = show.dateShow;
    showToUpdate.amount = show.amount;

    await showToUpdate.update(show);
    return showToUpdate;
  }
}
