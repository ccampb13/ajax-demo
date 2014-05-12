'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calc = traceur.require(__dirname + '/../routes/calc.js');
  var game = traceur.require(__dirname + '/../routes/game.js');

  app.get('/', dbg, home.index);
  app.get('/help', dbg, home.help);

  app.get('/sum', dbg, calc.addition);
  app.post('/sum', dbg, calc.sum);

  app.get('/power', dbg, calc.power);
  app.post('/power', dbg, calc.pow);

  app.get('/list', dbg, calc.group);
  app.post('/list', dbg, calc.list);

  app.get('/dice', dbg, game.dice);
  app.post('/dice', dbg, game.roll);



  console.log('Routes Loaded');
  fn();
}
