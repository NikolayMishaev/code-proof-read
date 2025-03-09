"use strict";

/* 

данные на вход: 
строка

данные на выход: 
строка

задача:
заменить в строке "ie" на "ei"

ограничения:
заглавная только первая буква
остальные буквы в нижнем регистре
каждое новое предложение начинается с большой буквы

псевдокод:
    заменить в строке все вхождения "ie" на "ei"
    разделить предложения по точкам на элементы, сохранить в массив
    пройтись по каждому элементу и сделать первую букву заглавной

*/

function proofread (str) {
    str = str.toLowerCase().replaceAll('ie' ,'ei')
    return str.split('. ').map(el=>el[0].toUpperCase() + el.slice(1)).join('. ').trim()
}

console.log(proofread("He haD iEght ShOTs of CAffIEne."))
console.log(proofread("THe neIghBour's ceiLing FEll on His Head. The WiEght of It crusHed him To thE gROuNd."))
