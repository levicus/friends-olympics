import { FriendsOlympicsPage } from './app.po';

describe('friends-olympics App', () => {
  let page: FriendsOlympicsPage;

  beforeEach(() => {
    page = new FriendsOlympicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
