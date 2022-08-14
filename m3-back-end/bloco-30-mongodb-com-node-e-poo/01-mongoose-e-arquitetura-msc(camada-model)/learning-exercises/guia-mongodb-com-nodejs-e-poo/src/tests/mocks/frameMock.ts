// ./src/tests/mocks/frameMock.ts

import IFrame from '../../interfaces/Frame';

const frameMock:IFrame = {
  material: 'Ouro',
  color: 'Brilhoso demais'
};

const frameMockWithId:IFrame & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Brilhoso demais'
};

export { frameMock, frameMockWithId };
