var pow_value=require('../../js/script.js');


describe("pow_value", function() {
  it("Возведение в степень - функция pow", function() {
		//prepare
		var result;
		//act
		result = pow_value(3,2); 
		//assert
    expect(result).toBe(9);
  });
});

