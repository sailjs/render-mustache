define(['render-mustache'],
function(mustache) {

  describe("render-mustache", function() {
    
    it('shoud export setup function', function() {
      expect(mustache).to.exist;
      expect(mustache).to.be.a('function');
    });
    
  });
  
  return { name: "test.render-mustache" }
});
