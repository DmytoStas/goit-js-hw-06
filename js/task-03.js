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

const galleryListRef = document.querySelector('.gallery');

const makeImgMurkup = ({ url, alt }) => {
  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.alt = alt;

  return imgEl;
};

const makeItemMurkup = imgInfo => {
  const itemEl = document.createElement('li');
  itemEl.appendChild(makeImgMurkup(imgInfo));

  return itemEl.outerHTML;
};

const listItemMurkup = images.map(makeItemMurkup).join('');

galleryListRef.insertAdjacentHTML('afterbegin', listItemMurkup);
