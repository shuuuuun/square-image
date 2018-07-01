import EventEmitter from 'events';
import loadImage from 'blueimp-load-image';
import { parseMetaData } from 'blueimp-load-image';

export default class FileSelector extends EventEmitter {
  constructor(opts = {}) {
    super();

    if (!this.isSupport()) {
      return false;
    }

    this.input = opts.input || document.querySelector('input[type=file]');

    if (!this.input) {
      return;
    }

    this.input.addEventListener('change', this._handleFileSelect.bind(this), false);
  }

  _handleFileSelect(e) {
    const files = e.target.files;
    if (files.length <= 0) {
      // ファイルがないときは無視
      return;
    }
    for (let i = 0, len = files.length; i < len; i++) {
      const file = files[i];
      if (file.type && !file.type.match('image.*')) {
        // file.typeが入っていない場合はスキップ(Android対策)
        continue;
      }
      this._handleFileReader(file);
    }
    this.emit('select_file', files);
  }

  _handleFileReader(file) {
    parseMetaData(file, data => {
      const orientation = data.exif ? parseInt(data.exif.get('Orientation'), 10) : 0;
      loadImage(file, image => {
        this.emit('load_img', image, file);
      }, {
        orientation,
      });
    });
  }

  isSupport() {
    return (window.File != null) && (window.FileReader != null) && (window.FileList != null) && (window.Blob != null);
  }

  resetFiles() {
    this.input.value = '';
  }
}
