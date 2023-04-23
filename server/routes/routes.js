const express = require('express');
const router = express.Router();

const courses = [1,2,3,4,5,6,7].map(id => ({
  id: id,
  title: 'Course ' + id,
  description: `This is the ${id} course`,
  instructor: 'John Doe',
  image: 'https://source.unsplash.com/random/400x300?sig='+id,
  rating:4,
  price: '33$'
}));

console.log(courses)

router.get('/courses', (req, res, next) => {
  try {
    res.json(courses);
  } catch (error) {
    next(error);
  }
});

router.get('/home', (req, res, next) => {
  try {
    res.send({ message: 'Welcome to the homepage!' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;