const notifier = require('./wsnotifier');
const kk = require('./krispyKreme')

function main() {
  notifier.init();
  // kk.setInterval;
  // kk.addHotListener(notifier.broadcast)
  // kk.addNoneListener(notifier.broadcast)
  kk.addHotListener(()=>{
    notifier.broadcast("DONUTS WOOOOOO")
  });
  kk.addNoneListener(()=>{
    notifier.broadcast("NO DONUTS FOOL")
  });

  //function to use that sensor information
}
main();