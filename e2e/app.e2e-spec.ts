import { FearFrontPage } from './app.po';

describe('fear-front App', function() {
  let page: FearFrontPage;

  beforeEach(() => {
    page = new FearFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
