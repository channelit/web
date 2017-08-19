import { IdMakerPipe } from './id-maker.pipe';

describe('IdMakerPipe', () => {
  it('create an instance', () => {
    const pipe = new IdMakerPipe();
    expect(pipe).toBeTruthy();
  });
});
