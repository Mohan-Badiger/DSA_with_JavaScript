function stringSort(s) {

    let sa = s.split('')
    let sor = sa.sort()
    let res = sor.join('')
    return res

}
console.log(stringSort("edcab"));
