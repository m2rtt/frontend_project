import Counter from '../application/Counter';
const counter = new Counter();
const startCount = counter.getCount();

describe('increase', () => {
  it('increases count by 1', () => {
    counter.increase();
    expect(counter.getCount()).to.eql(startCount + 1);
  });
});

describe('getcount', () => {
  it('is zero in the beginning', () => {
    expect(startCount).to.eql(0);
  });

  it('increases after calling increase function', () => {
    let prev = counter.getCount();
    counter.increase();
    expect(counter.getCount()).to.eql(prev + 1);
  });
});
