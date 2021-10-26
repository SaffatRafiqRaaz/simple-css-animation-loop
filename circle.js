function randvalue() {
  return Math.floor(Math.random() * 255);
}
// red
// >
// >
// >
setTimeout(
  setInterval(function set() {
    red.style.setProperty(
      "--rcolor",
      "rgb(" + randvalue() + "," + randvalue() + "," + randvalue() + ")"
    );
  }, 2000),
  0
);
setTimeout(function k() {
  function randvalue() {
    return Math.floor(Math.random() * 255);
  }

  setInterval(function set() {
    red.style.setProperty(
      "--rcolor2",
      "rgb(" + randvalue() + "," + randvalue() + "," + randvalue() + ")"
    );
  }, 2000);
}, 2000);
// yellow
// >
// >
// >
setTimeout(
  setInterval(function set2() {
    yellow.style.setProperty(
      "--ycolor",
      "rgb(" + randvalue() + "," + randvalue() + "," + randvalue() + ")"
    );
  }, 2000),
  1332
);
setTimeout(function k2() {
  function randvalue() {
    return Math.floor(Math.random() * 255);
  }

  setInterval(function set() {
    yellow.style.setProperty(
      "--ycolor2",
      "rgb(" + randvalue() + "," + randvalue() + "," + randvalue() + ")"
    );
  }, 2000);
}, 3332);
// green
// >
// >
// >
setTimeout(
  setInterval(function set3() {
    green.style.setProperty(
      "--gcolor",
      "rgb(" + randvalue() + "," + randvalue() + "," + randvalue() + ")"
    );
  }, 2000),
  2664
);
setTimeout(function k3() {
  function randvalue() {
    return Math.floor(Math.random() * 255);
  }

  setInterval(function set() {
    green.style.setProperty(
      "--gcolor2",
      "rgb(" + randvalue() + "," + randvalue() + "," + randvalue() + ")"
    );
  }, 2000);
}, 4664);
