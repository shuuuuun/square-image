import FileSelector from './modules/FileSelector';

const MAX_CANVAS_SIZE = 1500; // (px), 大きすぎるとiosなどで動かない
const PADDING = 0; // (px)
const BG_COLOR = '#ffffff';
const RATIO = 0.8;

const sizeInput = document.querySelector('.js-input-size');
const paddingInput = document.querySelector('.js-input-padding');
const colorInput = document.querySelector('.js-input-color');
const ratioInput = document.querySelector('.js-input-ratio');
const input = document.querySelector('.js-input-image');
const preview = document.querySelector('.js-preview');
const canvas = document.querySelector('.js-canvas');
const ctx = canvas.getContext('2d');

const fileSelector = new FileSelector({
    input: input,
});

sizeInput.value = MAX_CANVAS_SIZE;
paddingInput.value = PADDING;
colorInput.value = BG_COLOR;
ratioInput.value = RATIO;

fileSelector.on('load_img', (image, file) => {
    const maxSize = sizeInput.value || MAX_CANVAS_SIZE;
    const size = Math.min(Math.max(image.width, image.height), maxSize);
    // console.log(file);
    console.log(image.width, image.height, size);
    // setCanvasSize(size, size);
    draw(image, size);
    appendImg(canvas.toDataURL(), file.name);
});

function appendImg(src, alt) {
    const img = new Image();
    img.src = src;
    img.alt = alt;
    // preview.appendChild(img);
    preview.insertBefore(img, preview.firstChild)
}

function draw(image, size) {
    const padding = paddingInput.value || PADDING;
    const bgColor = colorInput.value || BG_COLOR;
    const ratio = ratioInput.value || RATIO;
    const aspect = image.width / image.height;
    const imgSize = size - padding * 2;
    let width = image.width || size;
    let height = image.height || size;
    if (width > imgSize) {
        width = imgSize;
        height = width / aspect;
    }
    if (height > imgSize) {
        height = imgSize;
        width = height * aspect;
    }
    console.log(width, height);
    const isYokonaga = image.width > image.height;
    const canvasWidth = isYokonaga ? size : size * ratio;
    const canvasHeight = !isYokonaga ? size : size * ratio;
    console.log(canvasWidth, canvasHeight);
    setCanvasSize(canvasWidth, canvasHeight);
    const x = (canvasWidth - width) / 2;
    const y = (canvasHeight - height) / 2;
    ctx.save();
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.drawImage(image, x, y, width, height);
    ctx.restore();
}

function setCanvasSize(width, height) {
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = width;
    canvas.height = height;
}
