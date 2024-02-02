import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const inputPath = 'src/assets/original'; // путь к вашим изображениям
const outputPath = 'src/assets/converted';

(async () => {
    await imagemin([`${inputPath}/*.{jpg,png}`], {
        destination: outputPath,
        plugins: [
            imageminWebp({ quality: 75 }) // настройте качество по своему усмотрению
        ]
    });

    console.log('Изображения успешно сконвертированы в формат WebP!');
})();