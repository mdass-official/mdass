const links = document.querySelector('.links')

fetch('data.json').then(data => data.json())
.then(data => {
    document.title = data.title
    document.querySelector('.title').innerHTML = data.title
    let li = ''
    data.links.forEach(ele => {
        li += `
            <li class="flex">
                <p>${ele.title}</p>
                <a href="${ele.link}">Book Now</a>
            </li>
        `       
    });
    links.innerHTML = li
}).catch(err => {
    console.log('Error : ', err)
})