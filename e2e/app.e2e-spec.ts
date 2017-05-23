import { WizRecordsPage } from './app.po';

describe('wiz-records App', () => {
  let page: WizRecordsPage;

  beforeEach(() => {
    page = new WizRecordsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
