describe('urlify filter', function() {
  var urlify;

  beforeEach(module('sportsApp'));

  beforeEach(inject(function($injector) {
    urlify = $injector.get('urlifyFilter');
  }));

  it('should change spaces to dashes',function(){
    expect(urlify('one two three')).toBe('one-two-three');
  });

  it('should change uppcase to lower case', function(){
    expect(urlify('UpperCase')).toBe('uppercase');
  });

  it('should remove non alpha-num chars', function(){
    expect(urlify('string"with*some%other#chars')).toBe('stringwithsomeotherchars');
  });
});