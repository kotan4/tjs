const a = parseFloat(prompt('Введите значение A'));
writeMsg('Если A = ' + a);

const b = parseFloat(prompt('Введите значение B'));
writeMsg('Если B = ' + b);

const c = parseFloat(prompt('Введите значение C'));
writeMsg('Если C = ' + c);

writeMsg('Решим уравнение a·x² + b·x + c = 0');

function square(a,b,c,x) {
    let d = b*b - 4*a*c;

    if (d < 0 && (x === true||x===false)) {
        return "нет корня"
    } else if (x === true) {
        return ((b * -1) + Math.sqrt(d))/ 2*a
    }  else if (x === false) {
        return ((b * -1) - Math.sqrt(d))/ 2*a
    }
}


writeMsg('Непонимаю как но x = ' + square(a,b,c, true) + ', а x² = ' + square(a,b,c, false));


function writeMsg(inf) {
    document.write(inf + '<br>');
}
