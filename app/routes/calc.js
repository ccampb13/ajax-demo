

'use strict';


exports.addition = (req, res)=>{
  res.render('calc/addition', {title: 'Get Sum!'});
};

exports.sum = (req, res)=>{
  var answer = (req.body.num1 * 1) + (req.body.num2 * 1);
  res.send({sum: answer});
};

exports.power = (req, res)=>{
  res.render('calc/power', {title: 'Get Pow!'});
};

exports.pow = (req, res)=>{
  var x = (req.body.num1 * 1);
  var y = (req.body.num2 * 1);
  var total = Math.pow(x,y);
  res.send({pow: total});
};

exports.group = (req, res)=>{
  res.render('calc/list', {title: 'SumList!'});
};

exports.list = (req, res)=>{
  var nums = req.body.num1.split(',');
  var number = 0;
  for(var i = 0; i < nums.length; i++){
    number += nums[i]*1;
    console.log(number);

    }

  res.send({list: number});

};
