import { AGoNewPage } from './app.po';

describe('ago-new App', () => {
  let page: AGoNewPage;

  beforeEach(() => {
    page = new AGoNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
