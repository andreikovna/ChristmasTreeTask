export class ChristmasDecorationItem {
  num: string;

  name: string;

  count: string;

  year: string;

  shape: string;

  color: string;

  size: string;

  favorite: boolean;

  constructor(
    num: string,
    name: string,
    count: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favorite: boolean,
  ) {
    this.num = num;
    this.name = name;
    this.count = count;
    this.year = year;
    this.shape = shape;
    this.color = color;
    this.size = size;
    this.favorite = favorite;
  }

  createElement(chosenItems: number[]): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('toy-container');
    div.setAttribute('data-number', this.num);
    div.innerHTML = `
    <h2 class="toy-name">${this.name}</h2>
    <img class="toy-image" src="./assets/toys/${this.num}.png" alt="">
    <p class="toy-text" data-count="${this.count}">Количество: ${this.count}</p>
    <p class="toy-text" data-year="${this.year}">Год покупки: ${this.year}</p>
    <p class="toy-text" data-shape="${this.shape}">Форма: ${this.shape}</p>
    <p class="toy-text" data-color="${this.color}">Цвет: ${this.color}</p>
    <p class="toy-text" data-size="${this.size}">Размер: ${this.size}</p>
    `;
    const favorite = document.createElement('p');
    favorite.classList.add('toy-text');
    const dataAttribute = this.favorite.toString();
    favorite.setAttribute('data-favourite', dataAttribute);
    if (this.favorite === true) {
      favorite.textContent = 'Любимая: да';
    } else {
      favorite.textContent = 'Любимая: нет';
    }
    const imageFavorite = document.createElement('div');
    imageFavorite.classList.add('imageFavourite');
    if (chosenItems.includes(Number(this.num))) {
      imageFavorite.classList.add('active');
    }
    imageFavorite.setAttribute('data-number', this.num);

    div.append(favorite);
    div.append(imageFavorite);

    return div;
  }
}
