define(['main'], function(main){
  describe('check mocha and chai', function() {
    it('should be obvious', function() {
      var uno = 1;
      main.abs(-uno).should.equal(uno);
    });
  });
});