const createLyrics = require('../../exercises/hard/ex5-template-lyrics');

describe('Template Literals Lyrics function', () => {
  test('should create lyrics using template literals', () => {
    const songData = {
      artist: 'Test Artist',
      title: 'Test Song',
      verse: 'This is a test verse',
      chorus: 'This is a test chorus'
    };
    
    const result = createLyrics(songData);
    
    expect(result).toContain(songData.artist);
    expect(result).toContain(songData.title);
    expect(result).toContain(songData.verse);
    expect(result).toContain(songData.chorus);
    
    const functionString = createLyrics.toString();
    expect(functionString).toMatch(/`.*\${.*}.*`/s);
  });
});
