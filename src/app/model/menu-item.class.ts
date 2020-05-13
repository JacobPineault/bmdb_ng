export class MenuItem {
  display: string; // text displayed on the menu
  href: string; // url
  tooltip: string; // display more info about link

  constructor(display: string = '', href: string = '', tooltip: string = '') {
    this.display = display;
    this.href = href;
    this.tooltip = tooltip;
  }
}
