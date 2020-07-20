let url = 'https://spreadsheets.google.com/feeds/list/1-S0iSnrlC29OradtL2hbRa7mQ5LIr-P0m0kV7WKp_7s/2/public/values?alt=json'

const api = (url) =>{
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
        // console.log(data)
        const pics = data.feed.entry.map(e=>{
            // console.log(e)
            return{
                url: e.gsx$url.$t,
                desc: e.gsx$desc.$t
            }
        })
        // console.log(pics)
        about(pics)
    })
}

const about = (pics) => {

    let bgs = $('.pic')
    // console.log(bgs)

    bgs.each(function(i){
        $(this).css('background-image',`url(${pics[i].url})`)
        // console.log(this)
    })

}

api(url)