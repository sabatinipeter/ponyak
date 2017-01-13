import { PonyakPage } from './app.po';

describe('ponyak App', function() {
  let page: PonyakPage;

  beforeEach(() => {
    page = new PonyakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
