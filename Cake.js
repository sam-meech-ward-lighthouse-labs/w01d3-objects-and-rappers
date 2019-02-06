var chocolateCake = {
  icing: 'chocolate',
  birthday: true,
  wedding: true
};

console.log(chocolateCake.size);

chocolateCake.size = '70 inches';

console.log(chocolateCake.size);

chocolateCake['size'] = '2';

console.log(chocolateCake.size);

console.log(chocolateCake);