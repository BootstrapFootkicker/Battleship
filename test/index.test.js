
import go from '../src';

console.log('test')

test('say go', () => {
  expect(go()).toBe('go')
});