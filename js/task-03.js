const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const pics = document.querySelector('#gallery')

images.forEach(el => {
    pics.insertAdjacentHTML('afterbegin',
    `<li><img src="${el.url}" alt="${el.alt}" width = "450" height = "300"></li>`);
})

// for(let el of images) 
// document.querySelector('#gallery').insertAdjacentHTML('afterbegin',
//  `<li><img src="${el.url}" alt="${el.alt}"></li>`);


const makeGallary = ({url, alt}) => `
  <li>
    <img src=${url} alt=${alt}>
  </li>`
;

const lists = images.map(makeGallary).join('+')

const gallary = document.querySelector('#gallery');
gallary.insertAdjacentHTML("afterbegin", lists);
console.log(lists)

