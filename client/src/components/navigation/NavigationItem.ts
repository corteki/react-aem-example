export class NavigationItem {
  constructor(
    public url: string,
    public title: string,
    public children: Array<NavigationItem>
  ) {}
}
