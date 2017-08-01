import { LogMeInBookStorePage } from './app.po';

describe('log-me-in-book-store App', () => {
  let page: LogMeInBookStorePage;

  beforeEach(() => {
    page = new LogMeInBookStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
