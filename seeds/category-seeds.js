const { Category } = require('../models');

const categoryData = [
  {
    name: 'Shirts', // Changed from category_name to name
  },
  {
    name: 'Shorts',
  },
  {
    name: 'Music',
  },
  {
    name: 'Hats',
  },
  {
    name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;