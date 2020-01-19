const express = require('express');
const fs = require('fs');
const path = require('path');
const gm = require('gm').subClass({imageMagick: true});

const MethodMap = new Map();
const ValuesMap = new Map();

MethodMap.set('borderW', (img, width = 0) => {
  img.border(width, 0)
  return img;
});

MethodMap.set('borderH', (img, height = 0) => {
  img.border(0, height)
  return img;
});

MethodMap.set('red', (img, r = 0) => {
  img.colorize(r, 0, 0);
  return img;
});

MethodMap.set('blue', (img, b = 0) => {
  img.colorize(0, 0, b);
  return img;
});

MethodMap.set('green', (img, g = 0) => {
  img.colorize(0, g, 0);
  return img;
});

MethodMap.set('emboss', (img, radius = 0) => {
  img.emboss(radius);
  return img;
})

MethodMap.set('gamma', (img, radius = 0) => {
  img.gamma(radius);
  return img;
})

MethodMap.set('gaussian', (img, radius = 0) => {
  img.out('-gaussian', radius);
  return img;
})


const router = express.Router();
router.get('/', (req, res, next) => {
  const date1 = Date.now(); //бенчмарк

  // const param = Object.keys(req.query)[0];
  const params = Object.keys(req.query);
  const values = Object.values(req.query);
  const image = gm(path.join(__dirname, '../uploads', 'ffb-1578909390187.png'));

  params.map((param, id) => {
    ValuesMap.set(param, values[id])
    // console.log(MethodMap.get(param)(image, values[id]));
  })

  // ValuesMap.set(...params, ...values);



  // ValuesMap.forEach((value, param) => {
  //   console.log(MethodMap.get(param)(image, value));
  //   MethodMap.get(param)(image, value)
  //   .out('-colorize', '22,0,30')
  //   .write(path.join(__dirname, '../uploads', 'ffb-1578909390187-edit.png'), (err) => {
  //     const date2 = Date.now() - date1; //бенчмарк
  //     console.log(date2); //бенчмарк
  //     // if (!err) res.json({time: date2}); //мс на операцию на фронте
  //   });
  // });
  for (const [param, value] of ValuesMap) {
    MethodMap.get(param)(image, value)
  }
  // console.log(MethodMap.get(...params)(image, ...values));
  // MethodMap.get(...params)(image, ...values)
  image
  .write(path.join(__dirname, '../uploads', 'ffb-1578909390187-edit.png'), (err) => {
    const date2 = Date.now() - date1; //бенчмарк
    console.log(date2); //бенчмарк
    if (!err) res.json({time: date2}); //мс на операцию на фронте
  });
  // console.log('___________');


  // MethodMap.get(param)(image, ...values)

});

module.exports = router;

// borderColor идет до border, иначе не раскрасится


  // .colorize(10, 121, 20) раскрасим
  // .colors(10) указать сколько цветов будет в картинке
  // .borderColor('red')
  // .shave(100, 80) //обрезает куски по углам изображения, если больше одной из сторон, перестает работать
  // .border(borderW, borderH)
  // .emboss(5) //Тиснение(radius)
  // // .enhance()
  // // .equalize() //Выровнять яркость
  // .flip() //отразить по вертикали
  // // .flop() //отразить по горизонтали
  // // .gamma(5) //гамма, должно быть 3 аргумента, с 3 оно не меняется
  // // .gaussian(0.4) //размытие по гауссу, сигма, на значениях больших задыхается
  // .implode(-1) //отрицательное взрывает центр, положительное всасывает центр
  // // .level('50%', null) //уровни, точка черного, гамма, точка белого,
  // // работает через жопу, точка черного до 50%, точка белого сосет,
  // // гамма не работает вообще. В доках должно указываться до 255, контраст от 0 до 5
  // .median(10) //50 это пиздец смажет, медианный фильтр, в фотожопе в шумах есть, называется медиана
  // // .mode(5) //тоже шум какой-то не ебу
  // // .modulate(80, 80, 50) //яркость , насыщенность (0 это -100, 200 это + 100), тон (по кругу каждые 200)
  // // .monochrome()
  // .motionBlur(40, 10, 90) //радиус, сигма, угол. радиус должен быть > сигмы, если 0, подберется автоматически в зависимости от сигмы
  // // .negative()
  // // .noise() //если число - делает шум, похож на медиану, иначе использовать gaussian, multiplicative, impulse, laplacian, poisson
  // // .normalize() //нормалайзер
  // .paint(1) //симуляция масляных красок, до 10
  // // .noProfile() //удалить exif
  // // .raise(10, 10) //создать псевдо 3д-эффект по углам, длина и высота
  // // .shade(90, 50) //азимут, наклон от севера, и его младший брат, ЕЛЕВАТИОН, наклон по вертикали, можно ограничить 360 градусами
  // // .sharpen(10, 20) //резкость, радиус и сигма, сигма сильнее влияет
  // // .shear(10, 80) //cтранно крутит картинку в 3д
  // .spread(2) //смещает пиксели рандомно, можно добиться эффекта бутылки

  // .trim() убирает бордер

  // .type('PaletteMatte') //формат, тип изображения, Bilevel Grayscale Palette PaletteMatte TrueColor TrueColor MatteColor SeparationColor SeparationMatte Optimize

  // .wave(10, 10) //синусовая волна, амплитуда и расстояние

  // cепия не работает как надо!
  // .sepia() //сепия десу
  // .modulate(115, 0, 100).colorize(7, 21, 50)
