import { TutoOneAngularPage } from './app.po';

describe('tuto-one-angular App', () => {
  let page: TutoOneAngularPage;

  beforeEach(() => {
    page = new TutoOneAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
