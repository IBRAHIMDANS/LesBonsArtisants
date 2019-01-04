import { getShortMessage } from './getShortMessage';

describe('test funct', () => {
  test('item in array sup 50 ', () => {
    expect(getShortMessage(['abracadabbra bbababababbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabababab', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabracadabbra', 'abrac'])).toEqual(['abrac']);
  });
  test('empty ', () => {
    expect(getShortMessage(['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint animi culpa dolore natus! Adipisci', ', nostrum sint! Consequatur, incidunt maiores optio aut quis officiis corrupti. Reiciendis', 'abrac, nostrum sint! Consequatur, incidunt maiores optio aut quis officiis corrupti. Reiciendis'])).toEqual([]);
  });
  test('empty array ', () => {
    expect(getShortMessage([])).toEqual([]);
  });
  test('it not a array ', () => {
    expect(getShortMessage(1)).toEqual('it not a Array');
  });
});
