
const count = (r) => {

  let odds = 0;
  let fives = 0;
  let decimals = 0;
  let twentyFives = 0;

  for (let [i, v] of r.entries()) {
    const currentValue = parseInt(v);
    if (currentValue % 25 === 0) {
      twentyFives += 1;
    }
    if (currentValue % 10 === 0) {
      decimals += 1;
      continue
    }
    if (currentValue % 5 === 0) {
      fives += 1;
    }
    if (currentValue % 2 === 0) odds += 1;
  }

  return {
    odds: odds,
    fives: fives,
    decimals: decimals,
    twentyFives: twentyFives
  }
}

const zeros = (expression) => {
  const expr = expression.replace(/!!/g, '&');
  const splittedExpression = expr.split('*');

  let out = [];

  for (let [i, v] of splittedExpression.entries()) {

    if (v.endsWith('&')) {

      if ((parseInt(v) % 2) === 0) {
        for (let i = 2; i <= parseInt(v); i = i + 2) {
          out.push(i.toString());
        }
      } else {
        for (let i = 1; i <= parseInt(v); i = i + 2) {
          out.push(i.toString());
        }
      }
    }

    if (v.endsWith('!')) {
      for (let i = 1; i <= parseInt(v); i = i + 1) {
        out.push(i.toString());
      }
    }
  }

  const parsed = count(out);
  
  let zerosNumber = parsed.decimals;
  if (parsed.odds > (parsed.fives + parsed.twentyFives)) {
    zerosNumber += (parsed.fives + parsed.twentyFives);
  }
  else {
    zerosNumber += parsed.odds;
  }


  return zerosNumber;

}

//const r = zeros('45!*5!*63!*5!*28!*5!*55!!*5!*35!!*5!*45!!*5!*25!!*5!*65!!*5!*50!!*5!*40!!*5!*95!!*5!');

//console.log(r);

module.exports = zeros 