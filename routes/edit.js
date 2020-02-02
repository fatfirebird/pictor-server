const express = require('express');
const fs = require('fs');
const path = require('path');
const gm = require('gm').subClass({imageMagick: true});
const createError = require('http-errors');

const MethodMap = new Map();

MethodMap.set('borderColor', (img, color = 'ffffff') => {
  img.borderColor('#' + color);
  return img;
})

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
  img.gaussian(radius);
  return img;
})

MethodMap.set('paint', (img, radius = 0) => {
  img.paint(radius);
  return img;
})

MethodMap.set('spread', (img, radius = 0) => {
  img.spread(radius);
  return img;
})

MethodMap.set('mode', (img, radius = 0) => {
  img.mode(radius);
  return img;
})

MethodMap.set('implode', (img, radius = 0) => {
  img.implode(radius);
  return img;
})

MethodMap.set('median', (img, radius = 0) => {
  img.median(radius);
  return img;
})

MethodMap.set('sharpenRad', (img, radius = 0) => {
  img.sharpen(radius, 0);
  return img;
})

MethodMap.set('sharpenSig', (img, sigma = 0) => {
  img.spread(0, sigma);
  return img;
})

MethodMap.set('motionRad', (img, radius = 0) => {
  img.motionBlur(radius, 0, 0);
  return img;
})

MethodMap.set('motionSig', (img, sigma = 0) => {
  img.motionBlur(0, sigma, 0);
  return img;
})

MethodMap.set('motionAng', (img, angle = 0) => {
  img.motionBlur(0, 0, angle);
  return img;
})

MethodMap.set('modulateBright', (img, brightness = 0) => {
  img.modulate(100 + +brightness, 100);
  return img;
})

MethodMap.set('modulateSat', (img, saturation = 0) => {
  img.modulate(100, 100 + +saturation);
  return img;
})

MethodMap.set('modulateHue', (img, hue = 0) => {
  img.modulate(100, 100, 100 + +hue);
  return img;
})

MethodMap.set('raiseW', (img, width = 0) => {
  img.raise(width, 0);
  return img;
})

MethodMap.set('raiseH', (img, height = 0) => {
  img.raise(0, height);
  return img;
})

MethodMap.set('shadeAz', (img, azimuth = 0) => {
  img.shade(azimuth, 0);
  return img;
})

MethodMap.set('shadeEl', (img, elevation = 0) => {
  img.shade(0, elevation);
  return img;
})

MethodMap.set('shearX', (img, xDeg = 0) => {
  img.shear(xDeg, 0);
  return img;
})

MethodMap.set('shearY', (img, yDeg = 0) => {
  img.shear(0, yDeg);
  return img;
})

MethodMap.set('colors', (img, value = 0) => {
  img.colors(value);
  return img;
})

MethodMap.set('shaveW', (img, width = 0) => {
  img.shave(width, 0);
  return img;
})

MethodMap.set('shaveH', (img, height = 0) => {
  img.shave(0, height);
  return img;
})

MethodMap.set('swirl', (img, degrees = 0) => {
  img.swirl(degrees);
  return img;
})

MethodMap.set('rotateDeg', (img, degrees = 0) => {
  img.rotate('transparent', degrees);
  return img;
})

MethodMap.set('contrast', (img, value = 0) => {
  img.contrast(value);
  return img;
})

MethodMap.set('blurRad', (img, radius = 0) => {
  img.blur(radius, 0);
  return img;
})

MethodMap.set('blurSig', (img, sigma = 0) => {
  img.blur(0, sigma);
  return img;
})

MethodMap.set('negative', (img) => {
  img.negative();
  return img;
})

MethodMap.set('poisson', (img) => {
  img.noise('poisson');
  return img;
})

MethodMap.set('monochrome', (img) => {
  img.monochrome();
  return img;
})

MethodMap.set('gaussian', (img) => {
  img.noise('gaussian');
  return img;
})

MethodMap.set('multiplicative', (img) => {
  img.noise('multiplicative');
  return img;
})

MethodMap.set('impulse', (img) => {
  img.noise('impulse');
  return img;
})

MethodMap.set('laplacian', (img) => {
  img.noise('laplacian');
  return img;
})

const imgPath = file => path.join(__dirname, '../uploads', file);

const router = express.Router();
router.post('/', async (req, res, next) => {
  try {
    const date1 = Date.now(); //бенчмарк
    const { fileName, filters } = req.body.params;
    /* Имя и расширение файла */
    const name = fileName.slice(0, fileName.indexOf('.'));
    const extension = fileName.slice(fileName.indexOf('.'), fileName.length);

    /* Путь к оригинальному и измененному файлам */
    const originalImgPath = imgPath(`${name}${extension}`);
    const editedImgPath = imgPath(`${name}-edit${extension}`);

    const image = gm(originalImgPath);

    for (const filter in filters) {
      if (+filters[filter].value !== 0) {
       await MethodMap.get(filters[filter].name)(image, +filters[filter].value);
      }
    }

    image.write(editedImgPath, async (err) => {
      fs.readFile(editedImgPath, 'base64', async (err, base64img) => {
        const dataUrl = `data:image/jpeg;base64, ${base64img}`
        const date2 = Date.now() - date1; //бенчмарк
        console.log(date2); //бенчмарк
        if (!err) res.json({dataUrl, fileName});
      })

    });
  } catch (e) {
    return next(createError(401, 'Internal server error'))
  }

});

module.exports = router;

// borderColor идет до border, иначе не раскрасится


  // .colorize(10, 121, 20) раскрасим
  // .colors(10) указать сколько цветов будет в картинке
  // .borderColor('red')
  // .shave(100, 80) //обрезает куски по углам изображения, если больше одной из сторон, перестает работать
  // .border(borderW, borderH)
  // .emboss(5) //Тиснение(radius)
  // // .gamma(5) //гамма, должно быть 3 аргумента, с 3 оно не меняется
  // // .gaussian(0.4) //размытие по гауссу, сигма, на значениях больших задыхается
  // .implode(-1) //отрицательное взрывает центр, положительное всасывает центр
  // // .level('50%', null) //уровни, точка черного, гамма, точка белого,
  // // работает через жопу, точка черного до 50%, точка белого сосет,
  // // гамма не работает вообще. В доках должно указываться до 255, контраст от 0 до 5
  // .median(10) //50 это пиздец смажет, медианный фильтр, в фотожопе в шумах есть, называется медиана
  // // .mode(5) //тоже шум какой-то не ебу
  // // .modulate(80, 80, 50) //яркость , насыщенность (0 это -100, 200 это + 100), тон (по кругу каждые 200)
  // .motionBlur(40, 10, 90) //радиус, сигма, угол. радиус должен быть > сигмы, если 0, подберется автоматически в зависимости от сигмы
  // .paint(1) //симуляция масляных красок, до 10
  // // .raise(10, 10) //создать псевдо 3д-эффект по углам, длина и высота
  // // .shade(90, 50) //азимут, наклон от севера, и его младший брат, ЕЛЕВАТИОН, наклон по вертикали, можно ограничить 360 градусами
  // // .sharpen(10, 20) //резкость, радиус и сигма, сигма сильнее влияет
  // // .shear(10, 80) //cтранно крутит картинку в 3д
  // .spread(2) //смещает пиксели рандомно, можно добиться эффекта бутылки

  // .trim() убирает бордер

  // // .monochrome()
  // .type('PaletteMatte') //формат, тип изображения, Bilevel Grayscale Palette PaletteMatte TrueColor TrueColor MatteColor SeparationColor SeparationMatte Optimize
  // .flip() //отразить по вертикали
  // // .noise() //если число - делает шум, похож на медиану, иначе использовать gaussian, multiplicative, impulse, laplacian, poisson
  // // .negative()
  // // .flop() //отразить по горизонтали
  // // .equalize() //Выровнять яркость
  // // .enhance()
  // // .normalize() //нормалайзер
  // // .noProfile() //удалить exif

  // .wave(10, 10) //синусовая волна, амплитуда и расстояние

  // cепия не работает как надо!
  // .sepia() //сепия десу
  // .modulate(115, 0, 100).colorize(7, 21, 50)
