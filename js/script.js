function LoadScript(src){
    const script = document.createElement('script')
    script.src = src
    document.body.append(script)
}


const arr = [5, 8, 7, -55, 6, 1];

sorted = arr.sort(compare)

function compare(a,b){
    return a-b;
}
console.log(sorted)