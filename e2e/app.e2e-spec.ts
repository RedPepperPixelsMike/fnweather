import { FnweatherPage } from './app.po';

describe('fnweather App', () => {
  let page: FnweatherPage;

  beforeEach(() => {
    page = new FnweatherPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
