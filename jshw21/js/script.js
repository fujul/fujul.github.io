var pow_value = function pow(value,exp) {
  var result = 1;
  for(var i = 0; i < exp; i++){
	result*=value;
  }
  return result;
};

try{
	module.exports = pow_value;
	}
catch(e){};
