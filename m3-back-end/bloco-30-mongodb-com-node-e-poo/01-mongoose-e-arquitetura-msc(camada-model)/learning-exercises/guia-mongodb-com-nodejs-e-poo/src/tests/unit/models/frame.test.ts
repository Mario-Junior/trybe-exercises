// ./src/tests/unit/models/frame.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(frameMockWithId);
    sinon.stub(Model, 'findOne').resolves(frameMockWithId);
  });

  after(async () => {
    sinon.restore();
  });

  describe('Creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('Searching a frame', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
			  await frameModel.readOne('123eRrAdO');
			} catch (error:any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});

// Porque não conseguimos cobrir a Branch do Erro!? //

// describe('Searching a frame', () => {
//   const frameModel = new FrameModel();
//   before(async () => {
//     sinon.stub(Model, 'findOne').resolves('InvalidMongoId');
//   });

//   after(async () => {
//     sinon.restore();
//   });
  
//   it('_id not found', async () => {
//     const test = await frameModel.readOne('123456ERRADO');
//     console.log(test);
//     // expect(test).to.be.eq('Error: InvalidMongoId');
//   });
// });
