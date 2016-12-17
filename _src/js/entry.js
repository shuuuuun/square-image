import FileSelector from './modules/FileSelector';

const MAX_FILE_SIZE = 15 * 1000 * 1000; // (byte), 5MB
const MAX_CANVAS_SIZE = 2000; // 大きすぎるとiosなどで動かない

const input = document.querySelector('.js-input-image');
const preview = document.querySelector('.js-preview');
const canvas = document.querySelector('.js-canvas');
const ctx = canvas.getContext('2d');

const fileSelector = new FileSelector({
    input: input,
});

fileSelector.on('select_file', files => {
    const file = files[0];
    if (!files || !files.length) {
        fileSelector.resetFiles();
        return;
    }
    if (!file.type || !file.type.match('image.*')) {
        fileSelector.resetFiles();
        return;
    }
    if (file.size > MAX_FILE_SIZE) {
        fileSelector.resetFiles();
        return;
    }
});

fileSelector.on('load_img', image => {
    const size = Math.min(Math.max(image.width, image.height), MAX_CANVAS_SIZE);
    console.log(image.width, image.height, size);
    setCanvasSize(size, size);
    draw(image, size);
    appendImg(canvas.toDataURL());
});

function appendImg(src) {
    const img = new Image();
    img.src = src;
    preview.appendChild(img);
}

function draw(image, size) {
    const width = image.width || size;
    const height = image.height || size;
    const x = (size - width) / 2;
    const y = (size - height) / 2;
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    ctx.beginPath();
    ctx.drawImage(image, x, y, width, height);
    ctx.restore();
}

function setCanvasSize(width, height) {
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = width * 2; // for retina
    canvas.height = height * 2; // for retina
    ctx.scale(2, 2); // for retina
}
