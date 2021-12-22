import { DecorationSlotContainer } from './treePage/decorationSlotContainer';
import { GameContainer } from './treePage/gameContainer';
import { SettingsContainer } from './treePage/settingsContainer';
import { snowflake } from './treePage/snowflake';

export class TreePage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('tree-page');
  }

  static createSettingsTreeContainer() :HTMLDivElement {
    const div = new SettingsContainer();
    const settingsContainer = div.createSettingsContainer();
    const treeContainer = settingsContainer.querySelector('.tree-wrapper');
    treeContainer?.addEventListener('click', TreePage.selectTree);

    const backgroundContainer = settingsContainer.querySelector('.background-wrapper');
    backgroundContainer?.addEventListener('click', TreePage.selectBG);

    const snow = settingsContainer.querySelector('.snow-settings');
    snow?.addEventListener('click', TreePage.startSnow);

    return settingsContainer;
  }

  static startSnow = (event: Event): void => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('active')) {
      const snowflakeContainer = document.querySelector('.snowflake_container') as HTMLDivElement;
      snowflakeContainer?.parentNode?.removeChild(snowflakeContainer);
      target.classList.remove('active');
    } else {
      const gameContainer = document.querySelector('.game_container');
      const snowflakeContainer = document.createElement('div');
      snowflakeContainer.classList.add('snowflake_container');
      gameContainer?.append(snowflakeContainer);
      target.classList.add('active');
      snowflake();
    }
  };

  static selectTree = (event: Event): void => {
    const target = event.target as HTMLElement & {
      dataset: Record<string, string>;
    };
    if (target.classList.contains('settings-tree')) {
      const { treenumber } = target.dataset;
      const mainTree = document.querySelector('.tree-for-game') as HTMLImageElement;
      mainTree.src = `./assets/tree/${treenumber}.png`;
    }
  };

  static selectBG = (event: Event): void => {
    const target = event.target as HTMLElement & {
      dataset: Record<string, string>;
    };
    if (target.classList.contains('settings-background')) {
      const { bg } = target.dataset;
      const mainBG = document.querySelector('.game_container') as HTMLDivElement;
      mainBG.style.background = `url("./assets/bg/${bg}.jpg")`;
      mainBG.style.backgroundSize = 'cover';
      mainBG.style.backgroundPosition = 'center';
      mainBG.style.backgroundRepeat = 'no-repeat';
    }
  };

  static createGameContainer() :HTMLDivElement {
    const div = new GameContainer();
    const gameContainer = div.createGameContainer();
    return gameContainer;
  }

  static createToysAndTreeContainer() :HTMLDivElement {
    const div = document.createElement('div');
    div.classList.add('toys_tree_container');
    div.innerHTML = '<p class="filter_titles">Игрушки</p>';

    const decorationSlotContainer = new DecorationSlotContainer();
    const chosen = decorationSlotContainer.createChosenDecorationsItem();

    div.append(chosen);

    return div;
  }

  render(): HTMLElement {
    const settingsTreeContainer = TreePage.createSettingsTreeContainer();
    const gameContainer = TreePage.createGameContainer();
    const toysAndTreeContainer = TreePage.createToysAndTreeContainer();
    this.container.append(settingsTreeContainer, gameContainer, toysAndTreeContainer);
    return this.container;
  }
}
