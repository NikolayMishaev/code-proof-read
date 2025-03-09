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
в конце предложения точка

псевдокод:
    заменить в строке все вхождения "ie" на "ei"
    сделать первую букву заглавной
    проверить, что в конце точка, если нет, добавить ее

*/

function proofread (str) {
    str = str.toLowerCase().replaceAll('ie' ,'ei')
    if (str.slice(-1) !== '.') str = str + '.'
    let firstLetter = str[0].toUpperCase()
    return firstLetter + str.slice(1)

}

console.log(proofread("He haD iEght ShOTs of CAffIEne."))
console.log(proofread("He haD iEght ShOTs of CAffIEne"))