import Starry from 'starry-rating'

const starElements = document.querySelectorAll('.form-reviews__star');

if (starElements.length > 0) {
  starElements.forEach(starElement => {

    const starRating = new Starry(starElement);
  });
}

