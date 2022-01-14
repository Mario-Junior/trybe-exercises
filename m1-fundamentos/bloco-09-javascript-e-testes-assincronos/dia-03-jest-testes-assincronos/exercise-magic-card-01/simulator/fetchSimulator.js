const cardInfo = require('./card');

const ENDPOINT = 'https://api.magicthegathering.io/v1/cards/130550';

const TIME_IN_MILLISECONDS = 200;

const fetchSimulator = (url) => {
  const splitUrl = url.split('/');
  const checkIdUrl = Number(splitUrl[splitUrl.length - 1]);

  if (typeof url === undefined || url.endsWith('undefined') || !checkIdUrl) {
    return Promise.reject(new Error('Id is not found!'));
  }

  const validUrl = ENDPOINT === url ? true : false;

  return Promise.resolve({
    status: validUrl ? 200 : 400,
    ok: validUrl,
    json: () => new Promise((resolve) => {
      setTimeout(() => {
        if (url === ENDPOINT) {
          return resolve(cardInfo);
        }
    
        return resolve({ results: [] });
      }, TIME_IN_MILLISECONDS);
    }),
  });
};

window.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);

module.exports = fetchSimulator;
