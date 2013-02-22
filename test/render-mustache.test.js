define(['render-mustache'],
function(mustache) {

  describe("render-mustache", function() {
    
    it('shoud export setup function', function() {
      expect(mustache).to.exist;
      expect(mustache).to.be.a('function');
    });
    
  });
  
  describe("engine", function() {
  
    var engine = mustache();
    
    it('shoud return compiled template function', function() {
      var template = engine('Hello {{name}}');
      expect(template).to.be.a('function');
      
      var output = template({ name: 'World' });
      expect(output).to.be.equal('Hello World');
    });
    
  });
  
  return { name: "test.render-mustache" }
});
