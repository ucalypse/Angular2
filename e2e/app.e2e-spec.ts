import { NgTownhallNinePage } from './app.po';

describe('ng-townhall-nine App', () => {
  let page: NgTownhallNinePage;

  beforeEach(() => {
    page = new NgTownhallNinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
