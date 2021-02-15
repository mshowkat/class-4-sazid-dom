const getID = id => document.getElementById(id)

const heading = getID('blog-heading').value
const content = getID('blog-content').value
getID('full-post').style.display = 'none'

getID('post-it').addEventListener('click', () => {
    getID('card-heading').innerText = heading
    getID('card-content').innerText = content.slice(0, 200) + '...'
})

getID('card-btn').addEventListener('click', () => {
    getID('blog-card').style.display = 'none'
    getID('full-post').style.display = 'block'

    getID('full-post-heading').innerText = heading
    getID('full-post-content').innerText = content

    getID('full-post-btn').addEventListener('click', () => {
        getID('blog-card').style.display = 'block'
        getID('full-post').style.display = 'none'
    })
})