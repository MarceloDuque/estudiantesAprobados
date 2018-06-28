import { AprobadosPage } from './app.po';

describe('aprobados App', function() {
  let page: AprobadosPage;

  beforeEach(() => {
    page = new AprobadosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
