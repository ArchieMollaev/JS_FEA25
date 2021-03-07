const des = document.getElementById('des')

const promise = fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
   promise
    .then((data) => {
        return data.json()
    })

    .then((data) => {
       data.forEach(({image_url, description}) => {
           const img = document.createElement('img');
           const div = document.createElement('div');
           img.setAttribute('src', image_url);
           img.setAttribute('id', 'beer_img');
           div.innerHTML = description;
           div.setAttribute('id', 'beer')
           des.prepend(div);
           div.prepend(img);
           return img.addEventListener('click', function () {data.forEach(({id}) => {
            localStorage.setItem('id', id)
        }
        )
    })  
    })
        
})






