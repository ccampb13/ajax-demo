'use strict';

exports.dice = (req, res)=>{
  res.render('game/dice', {title: 'Dice'});
};

exports.roll = (req, res)=>{
    var number = Math.floor(Math.random() *6) + 1;
    res.send({roll: number});
};
