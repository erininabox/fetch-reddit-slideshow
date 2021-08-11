// DOM Elements
const formEl = document.getElementById('search-form')
const inputEl = document.getElementById('search-input')
const slideshowEl = document.getElementById('slideshow')

// Variables (ik any)
const url = 'http://www.reddit.com/search.json?q='

// Functions
function handleSubmit(event) {
    // 1. Stop page from refreshing
    event.preventDefault()

    // 2. Construct the URL we want to query
    let input = inputEl.value
    console.log(input)
    let searchUrl = url + input + '+nsfw:no'
    console.log(searchUrl)

    // 3. Query the API for some posts
    fetch(searchUrl) // Hit the API
        .then(response => { // Convert to JSON data
            return response.json()
        }) 
        .then((data) => { // Application logic
            // 1. Get the data
            // console.log(data.data.children)

            // 2. Process the data into a usable format
            let posts = data.data.children
            for(let i = 0; i < posts.length; i++) {
                let title = posts[i].data.title
                let thumbnail = posts[i].data.thumbnail
                console.log(title)
                console.log(thumbnail)

                // 3. Add that info into the DOM
                let h2 = document.createElement('h2')
                h2.textContent = title
                let img = document.createElement('img')
                img.setAttribute('src', thumbnail)
                slideshowEl.append(h2)
                slideshowEl.append(img)
            }
        })
}