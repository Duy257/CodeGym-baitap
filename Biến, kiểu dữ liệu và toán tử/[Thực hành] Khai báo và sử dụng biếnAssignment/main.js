let a = 20;
let b = 20.5;
let c = true;
let d = 'Hà Nội';

document.write(a, '</br>');
document.write(b, '</br>');
document.write(c, '</br>');
document.write(d, '</br>');



let weight = 20;
let height = 10;
let area = weight * height;
document.write('area = '+ area)


// Bài 3*/
let aa = prompt('nhập số');
let bb = prompt('nhập số');

if (aa % bb == 0) {
    alert(aa + ' là bội số của ' + bb)
}
else {
    alert(aa + ' không phải là bội số của '+ bb);
};