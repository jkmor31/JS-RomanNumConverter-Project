const main = document.querySelector("main");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.createElement("p");

function convertToRoman(num) {
  let romanStr = [];

if (num >= 4000) {null}   
if (num >= 1000 && num < 4000) {do {romanStr.push('M');num -= 1000; } while (num >= 1000);} 
if (num >= 900 && num < 1000) {romanStr.push('CM');num -= 900;} 
if (num >= 500 && num < 900) {romanStr.push('D');num -= 500;} 
if (num >= 400 && num < 500) {romanStr.push('CD');num -= 400;} 
if (num >= 100 && num < 400) {do {romanStr.push('C');num -= 100;} while (num >= 100); } 
if (num >= 90 && num < 100) {romanStr.push('XC');num -= 90;} 
if (num >= 50 && num < 90) {romanStr.push('L');num -= 50;}
if (num >= 40 && num < 50) {romanStr.push('XL');num -= 40;} 
if (num >= 10 && num < 40) {do {romanStr.push('X');num -= 10;} while (num >= 10); } 
if (num === 9) {romanStr.push('IX');num -= 9;} 
if (num >= 5 && num < 9) {romanStr.push('V');num -= 5;}
if (num === 4) { romanStr.push('IV');num -= 4;}
if (num >= 1 && num < 4) {do {romanStr.push('I');num -= 1;} while (num >= 1); } 

 return romanStr.join("");
}

function changeNum() {
  if (input.value > 0 && input.value < 4000){
  para.innerText = convertToRoman(input.value);}
  else if (input.value == 0) {para.innerText = `Nulla!`}
  else {para.innerText = `Too High!`}
  main.appendChild(para);
}
