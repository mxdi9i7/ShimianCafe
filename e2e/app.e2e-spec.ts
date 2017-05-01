import { ShimianPage } from './app.po';

describe('shimian App', () => {
  let page: ShimianPage;

  beforeEach(() => {
    page = new ShimianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
