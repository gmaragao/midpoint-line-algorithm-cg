import lineMP from './midpoint.mjs';

// #TODO --> Check code coverage

describe('Test lineMP', () => {
  it('Should calculate correctly testing Y', () => {
    let P = { x: 2, y: 2 };
    let Q = { x: 8, y: 4 };

    expect(lineMP(P, Q)).toStrictEqual([
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 4, y: 3 },
      { x: 5, y: 3 },
      { x: 6, y: 3 },
      { x: 7, y: 4 },
      { x: 8, y: 4 },
    ]);
  });
  it('Should calculate correctly testing Y', () => {
    let P = { x: 1, y: 6 };
    let Q = { x: 8, y: 4 };

    expect(lineMP(P, Q)).toStrictEqual([
      { x: 1, y: 6 },
      { x: 2, y: 6 },
      { x: 3, y: 5 },
      { x: 4, y: 5 },
      { x: 5, y: 5 },
      { x: 6, y: 5 },
      { x: 7, y: 4 },
      { x: 8, y: 4 },
    ]);
  });

  it('Should calculate correctly testing Y', () => {
    let P = { x: -2, y: -2 };
    let Q = { x: -8, y: -4 };

    expect(lineMP(P, Q)).toStrictEqual([
      { x: -8, y: -4 },
      { x: -7, y: -4 },
      { x: -6, y: -3 },
      { x: -5, y: -3 },
      { x: -4, y: -3 },
      { x: -3, y: -2 },
      { x: -2, y: -2 },
    ]);
  });
});
