export class ChristmasDecorationItem {
  num: string;

  name: string;

  count: string;

  year: string;

  shape: string;

  color: string;

  size: string;

  favourite: boolean;

  constructor(
    num: string,
    name: string,
    count: string,
    year: string,
    shape: string,
    color: string,
    size: string,
    favourite: boolean,
  ) {
    this.num = num;
    this.name = name;
    this.count = count;
    this.year = year;
    this.shape = shape;
    this.color = color;
    this.size = size;
    this.favourite = favourite;
  }

  createElement(chosenItems: number[]): HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('toy-container');
    div.setAttribute('data-number', this.num);
    div.innerHTML = `
    <h2 class="toy-name">${this.name}</h2>
    <img class="toy-image" src="../../assets/toys/${this.num}.png" data-number="${this.num}>
    <p class="toy-text" data-count="${this.count} data-number="${this.num}">Количество: ${this.count}</p>
    <p class="toy-text" data-year="${this.year}" data-number="${this.num}">Год покупки: ${this.year}</p>
    <p class="toy-text" data-shape="${this.shape}" data-number="${this.num}">Форма: ${this.shape}</p>
    <p class="toy-text" data-color="${this.color}" data-number="${this.num}">Цвет: ${this.color}</p>
    <p class="toy-text" data-size="${this.size}" data-number="${this.num}">Размер: ${this.size}</p>
    `;
    const favourite = document.createElement('p');
    favourite.classList.add('toy-text');
    const dataAttribute = this.favourite.toString();
    favourite.setAttribute('data-favourite', dataAttribute);
    if (this.favourite === true) {
      favourite.textContent = 'Любимая: да';
    } else {
      favourite.textContent = 'Любимая: нет';
    }
    const imageFavourite = document.createElement('div');
    imageFavourite.classList.add('imageFavourite');
    if (chosenItems.includes(Number(this.num))) {
      imageFavourite.classList.add('active');
    }
    imageFavourite.setAttribute('data-number', this.num);

    div.append(favourite);
    div.append(imageFavourite);

    return div;
  }
}
