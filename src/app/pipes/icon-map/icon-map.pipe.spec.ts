import {IconMapPipe} from './icon-map.pipe';

describe('IconMapPipe', () => {
  it('create an instance', () => {
    const pipe = new IconMapPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform 04d icon to cloud', () => {
    const pipe = new IconMapPipe();
    expect(pipe.transform('04d')).toBe('cloud');
  });

  it('transform 01n icon to circle', () => {
    const pipe = new IconMapPipe();
    expect(pipe.transform('01n')).toBe('circle');
  });

  it('transform undefined icon to fallback', () => {
    const pipe = new IconMapPipe();
    expect(pipe.transform('xyz')).toBe('cloud-moon');
  });
});
