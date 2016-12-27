import { ManWithPlanPage } from './app.po';

describe('man-with-plan App', function() {
  let page: ManWithPlanPage;

  beforeEach(() => {
    page = new ManWithPlanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
