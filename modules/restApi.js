export function getData(url, callMeback) {
    fetch(url)
        .then(res => res.json())
        .then(result => {
            callMeback(result);
        })
        .catch(err => { console.log(err) });
}