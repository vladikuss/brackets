module.exports = function check(str, bracketsConfig) {
  const data = [...str];

  for (let ext = 0; ext < bracketsConfig.length; ext++) {
    let counter = 0;
    let isPaired = null;
    let alien = 0;

    for (let int = 0; int < data.length; int++) {
      if (bracketsConfig[ext][0] !== bracketsConfig[ext][1]) {
        isPaired = true;

        if (data[int] === bracketsConfig[ext][0]) {
          counter++;
          continue;
        };

        if (counter > 0 && data[int] !== bracketsConfig[ext][0] && data[int] !== bracketsConfig[ext][1]) {
          alien++;
        };

        if (data[int] === bracketsConfig[ext][1]) {
          counter--;
        };

        if (counter < 0) return false;
      };

      if (bracketsConfig[ext][0] === bracketsConfig[ext][1]) {
        isPaired = false;

        if (data[int] === bracketsConfig[ext][0]) counter++;

        if (counter % 2 !== 0 && data[int] !== bracketsConfig[ext][0]) {
          alien++;
        };
      };
    };

    if (isPaired && counter !== 0) return false;
    if (!isPaired && counter % 2 !== 0) return false;
    if (alien % 2 !== 0) return false;
  };

  return true;
}

