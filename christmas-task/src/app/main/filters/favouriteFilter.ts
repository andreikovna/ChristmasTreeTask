import { savings } from '../savings';
import { IDecorations } from '../interfaces/decorations.interface';
import { isChecked } from '../utilities/checkFavouriteFilters';

export class FavouriteFilter {
  container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('filter_favourite');
  }

  createFavouriteFilter(): HTMLDivElement {
    const checked = isChecked(savings.settings.favorite);
    this.container.innerHTML = `
      <div class="favourite-toys">
        <input type="checkbox" class="favourite" id="favourite-toys" name="favourite-toys" ${checked}/>
        <label for="favourite-toys">Только любимые</label>
      </div>
      `;
    return this.container;
  }

  static filterFavorite(items: IDecorations[]): IDecorations[] {
    const filteredItems = items.filter((item) => item.favorite === true);
    return filteredItems;
  }
}
