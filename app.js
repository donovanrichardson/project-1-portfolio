let url = `https://spreadsheets.google.com/feeds/list/1-S0iSnrlC29OradtL2hbRa7mQ5LIr-P0m0kV7WKp_7s/od6/public/values?alt=json`

const proj = (url) =>{
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
        const projects = data.feed.entry.map(e=>{
            console.log(e)
            return{
                title: e.gsx$title.$t,
                image: e.gsx$image.$t,
                description: e.gsx$description.$t,
                url: e.gsx$url.$t
            }
        })
        app(projects)
    })
}

const app = (projects) => {

    // creates a jQuery DOM element based on an individual project object
    const createProjectElement = (project) => {
        const $art = $('<article>').addClass("gray")
        $art.append($('<h3>').text(project.title))
        // $div.append($('<img>').attr('src', project.image))
        $art.append($('<p>').addClass("description").text(project.description))
        $art.append($('<img>').attr('src',project.image).attr('alt',project.title))
        // $div.append($('<a>').attr('href', project.url).text("LINK >>"))
        return $art
    }

    // adds each project element to <body>
    projects.forEach(project => {
        const $projectArt = createProjectElement(project)
        $('.projects').append($projectArt)
    })

}

proj(url)