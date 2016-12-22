!function e(t,i,n){function r(a,s){if(!i[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=i[a]={exports:{}};t[a][0].call(c.exports,function(e){var i=t[a][1][e];return r(i?i:e)},c,c.exports,e,t,i,n)}return i[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new Image;t.src=e,g.appendChild(t)}function o(e,t){var i=d.value||c,n=e.width/e.height,r=e.width||t,o=e.height||t;r>t&&(r=t,o=r/n),o>t&&(o=t,r=o*n),console.log(r,o);var a=(t-r)/2,s=(t-o)/2;m.save(),m.fillStyle=i,m.fillRect(0,0,t,t),m.beginPath(),m.drawImage(e,a,s,r,o),m.restore()}function a(e,t){p.style.width=e+"px",p.style.height=t+"px",p.width=e,p.height=t}var s=e("./modules/FileSelector"),l=n(s),u=1080,c="#ffffff",f=document.querySelector(".js-input-size"),d=document.querySelector(".js-input-color"),h=document.querySelector(".js-input-image"),g=document.querySelector(".js-preview"),p=document.querySelector(".js-canvas"),m=p.getContext("2d"),v=new l.default({input:h});f.value=u,d.value=c,v.on("load_img",function(e){var t=f.value||u,i=Math.min(Math.max(e.width,e.height),t);console.log(e.width,e.height,i),a(i,i),o(e,i),r(p.toDataURL())})},{"./modules/FileSelector":2}],2:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=e("events"),u=n(l),c=e("blueimp-load-image"),f=n(c),d=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(!i.isSupport()){var n;return n=!1,o(i,n)}return i.input=e.input||document.querySelector("input[type=file]"),i.input?(i.input.addEventListener("change",i._handleFileSelect.bind(i),!1),i):o(i)}return a(t,e),s(t,[{key:"_handleFileSelect",value:function(e){var t=e.target.files;if(!(t.length<=0)){for(var i=0,n=t.length;i<n;i++){var r=t[i];r.type&&!r.type.match("image.*")||this._handleFileReader(r)}this.emit("select_file",t)}}},{key:"_handleFileReader",value:function(e){var t=this;(0,c.parseMetaData)(e,function(i){var n=i.exif?parseInt(i.exif.get("Orientation"),10):0;(0,f.default)(e,function(e){t.emit("load_img",e)},{orientation:n})})}},{key:"isSupport",value:function(){return null!=window.File&&null!=window.FileReader&&null!=window.FileList&&null!=window.Blob}},{key:"resetFiles",value:function(){this.input.value=""}}]),t}(u.default);i.default=d},{"blueimp-load-image":3,events:9}],3:[function(e,t,i){t.exports=e("./load-image"),e("./load-image-meta"),e("./load-image-exif"),e("./load-image-exif-map"),e("./load-image-orientation")},{"./load-image":8,"./load-image-exif":5,"./load-image-exif-map":4,"./load-image-meta":6,"./load-image-orientation":7}],4:[function(e,t,i){!function(i){"use strict";"function"==typeof define&&define.amd?define(["./load-image","./load-image-exif"],i):"object"==typeof t&&t.exports?i(e("./load-image"),e("./load-image-exif")):i(window.loadImage)}(function(e){"use strict";e.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},e.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},e.ExifMap.prototype.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":if(!t)return;return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":if(!t)return;return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":if(!t)return;return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return String(t)},function(e){var t,i=e.tags,n=e.map;for(t in i)i.hasOwnProperty(t)&&(n[i[t]]=t)}(e.ExifMap.prototype),e.ExifMap.prototype.getAll=function(){var e,t,i={};for(e in this)this.hasOwnProperty(e)&&(t=this.tags[e],t&&(i[t]=this.getText(t)));return i}})},{"./load-image":8,"./load-image-exif":5}],5:[function(e,t,i){!function(i){"use strict";"function"==typeof define&&define.amd?define(["./load-image","./load-image-meta"],i):"object"==typeof t&&t.exports?i(e("./load-image"),e("./load-image-meta")):i(window.loadImage)}(function(e){"use strict";e.ExifMap=function(){return this},e.ExifMap.prototype.map={Orientation:274},e.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.getExifThumbnail=function(e,t,i){var n,r,o;if(!i||t+i>e.byteLength)return void console.log("Invalid Exif data: Invalid thumbnail data.");for(n=[],r=0;r<i;r+=1)o=e.getUint8(t+r),n.push((o<16?"0":"")+o.toString(16));return"data:image/jpeg,%"+n.join("%")},e.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,i){return e.getUint16(t,i)},size:2},4:{getValue:function(e,t,i){return e.getUint32(t,i)},size:4},5:{getValue:function(e,t,i){return e.getUint32(t,i)/e.getUint32(t+4,i)},size:8},9:{getValue:function(e,t,i){return e.getInt32(t,i)},size:4},10:{getValue:function(e,t,i){return e.getInt32(t,i)/e.getInt32(t+4,i)},size:8}},e.exifTagTypes[7]=e.exifTagTypes[1],e.getExifValue=function(t,i,n,r,o,a){var s,l,u,c,f,d,h=e.exifTagTypes[r];if(!h)return void console.log("Invalid Exif data: Invalid tag type.");if(s=h.size*o,l=s>4?i+t.getUint32(n+8,a):n+8,l+s>t.byteLength)return void console.log("Invalid Exif data: Invalid data offset.");if(1===o)return h.getValue(t,l,a);for(u=[],c=0;c<o;c+=1)u[c]=h.getValue(t,l+c*h.size,a);if(h.ascii){for(f="",c=0;c<u.length&&(d=u[c],"\0"!==d);c+=1)f+=d;return f}return u},e.parseExifTag=function(t,i,n,r,o){var a=t.getUint16(n,r);o.exif[a]=e.getExifValue(t,i,n,t.getUint16(n+2,r),t.getUint32(n+4,r),r)},e.parseExifTags=function(e,t,i,n,r){var o,a,s;if(i+6>e.byteLength)return void console.log("Invalid Exif data: Invalid directory offset.");if(o=e.getUint16(i,n),a=i+2+12*o,a+4>e.byteLength)return void console.log("Invalid Exif data: Invalid directory size.");for(s=0;s<o;s+=1)this.parseExifTag(e,t,i+2+12*s,n,r);return e.getUint32(a,n)},e.parseExifData=function(t,i,n,r,o){if(!o.disableExif){var a,s,l,u=i+10;if(1165519206===t.getUint32(i+4)){if(u+8>t.byteLength)return void console.log("Invalid Exif data: Invalid segment size.");if(0!==t.getUint16(i+8))return void console.log("Invalid Exif data: Missing byte alignment offset.");switch(t.getUint16(u)){case 18761:a=!0;break;case 19789:a=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}if(42!==t.getUint16(u+2,a))return void console.log("Invalid Exif data: Missing TIFF marker.");s=t.getUint32(u+4,a),r.exif=new e.ExifMap,s=e.parseExifTags(t,u,u+s,a,r),s&&!o.disableExifThumbnail&&(l={exif:{}},s=e.parseExifTags(t,u,u+s,a,l),l.exif[513]&&(r.exif.Thumbnail=e.getExifThumbnail(t,u+l.exif[513],l.exif[514]))),r.exif[34665]&&!o.disableExifSub&&e.parseExifTags(t,u,u+r.exif[34665],a,r),r.exif[34853]&&!o.disableExifGps&&e.parseExifTags(t,u,u+r.exif[34853],a,r)}}},e.metaDataParsers.jpeg[65505].push(e.parseExifData)})},{"./load-image":8,"./load-image-meta":6}],6:[function(e,t,i){!function(i){"use strict";"function"==typeof define&&define.amd?define(["./load-image"],i):i("object"==typeof t&&t.exports?e("./load-image"):window.loadImage)}(function(e){"use strict";var t=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[]}},e.parseMetaData=function(t,i,n,r){n=n||{},r=r||{};var o=this,a=n.maxMetaDataSize||262144,s=!(window.DataView&&t&&t.size>=12&&"image/jpeg"===t.type&&e.blobSlice);!s&&e.readFile(e.blobSlice.call(t,0,a),function(t){if(t.target.error)return console.log(t.target.error),void i(r);var a,s,l,u,c=t.target.result,f=new DataView(c),d=2,h=f.byteLength-4,g=d;if(65496===f.getUint16(0)){for(;d<h&&(a=f.getUint16(d),a>=65504&&a<=65519||65534===a);){if(s=f.getUint16(d+2)+2,d+s>f.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(l=e.metaDataParsers.jpeg[a])for(u=0;u<l.length;u+=1)l[u].call(o,f,d,s,r,n);d+=s,g=d}!n.disableImageHead&&g>6&&(c.slice?r.imageHead=c.slice(0,g):r.imageHead=new Uint8Array(c).subarray(0,g))}else console.log("Invalid JPEG file: Missing JPEG marker.");i(r)},"readAsArrayBuffer")||i(r)},e.hasMetaOption=function(e){return e.meta};var i=e.transform;e.transform=function(t,n,r,o,a){e.hasMetaOption(n||{})?e.parseMetaData(o,function(a){i.call(e,t,n,r,o,a)},n,a):i.apply(e,arguments)}})},{"./load-image":8}],7:[function(e,t,i){!function(i){"use strict";"function"==typeof define&&define.amd?define(["./load-image"],i):i("object"==typeof t&&t.exports?e("./load-image"):window.loadImage)}(function(e){"use strict";var t=e.hasCanvasOption,i=e.hasMetaOption,n=e.transformCoordinates,r=e.getTransformedOptions;e.hasCanvasOption=function(i){return!!i.orientation||t.call(e,i)},e.hasMetaOption=function(t){return t.orientation===!0||i.call(e,t)},e.transformCoordinates=function(t,i){n.call(e,t,i);var r=t.getContext("2d"),o=t.width,a=t.height,s=t.style.width,l=t.style.height,u=i.orientation;if(u&&!(u>8))switch(u>4&&(t.width=a,t.height=o,t.style.width=l,t.style.height=s),u){case 2:r.translate(o,0),r.scale(-1,1);break;case 3:r.translate(o,a),r.rotate(Math.PI);break;case 4:r.translate(0,a),r.scale(1,-1);break;case 5:r.rotate(.5*Math.PI),r.scale(1,-1);break;case 6:r.rotate(.5*Math.PI),r.translate(0,-a);break;case 7:r.rotate(.5*Math.PI),r.translate(o,-a),r.scale(-1,1);break;case 8:r.rotate(-.5*Math.PI),r.translate(-o,0)}},e.getTransformedOptions=function(t,i,n){var o,a,s=r.call(e,t,i),l=s.orientation;if(l===!0&&n&&n.exif&&(l=n.exif.get("Orientation")),!l||l>8||1===l)return s;o={};for(a in s)s.hasOwnProperty(a)&&(o[a]=s[a]);switch(o.orientation=l,l){case 2:o.left=s.right,o.right=s.left;break;case 3:o.left=s.right,o.top=s.bottom,o.right=s.left,o.bottom=s.top;break;case 4:o.top=s.bottom,o.bottom=s.top;break;case 5:o.left=s.top,o.top=s.left,o.right=s.bottom,o.bottom=s.right;break;case 6:o.left=s.top,o.top=s.right,o.right=s.bottom,o.bottom=s.left;break;case 7:o.left=s.bottom,o.top=s.right,o.right=s.top,o.bottom=s.left;break;case 8:o.left=s.bottom,o.top=s.left,o.right=s.top,o.bottom=s.right}return o.orientation>4&&(o.maxWidth=s.maxHeight,o.maxHeight=s.maxWidth,o.minWidth=s.minHeight,o.minHeight=s.minWidth,o.sourceWidth=s.sourceHeight,o.sourceHeight=s.sourceWidth),o}})},{"./load-image":8}],8:[function(e,t,i){!function(e){"use strict";function i(e,t,n){var r,o=document.createElement("img");if(o.onerror=function(r){return i.onerror(o,r,e,t,n)},o.onload=function(r){return i.onload(o,r,e,t,n)},i.isInstanceOf("Blob",e)||i.isInstanceOf("File",e))r=o._objectURL=i.createObjectURL(e);else{if("string"!=typeof e)return!1;r=e,n&&n.crossOrigin&&(o.crossOrigin=n.crossOrigin)}return r?(o.src=r,o):i.readFile(e,function(e){var i=e.target;i&&i.result?o.src=i.result:t&&t(e)})}function n(e,t){!e._objectURL||t&&t.noRevoke||(i.revokeObjectURL(e._objectURL),delete e._objectURL)}var r=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;i.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},i.transform=function(e,t,n,r,o){n(i.scale(e,t,o),o)},i.onerror=function(e,t,i,r,o){n(e,o),r&&r.call(e,t)},i.onload=function(e,t,r,o,a){n(e,a),o&&i.transform(e,a,o,r,{})},i.transformCoordinates=function(){},i.getTransformedOptions=function(e,t){var i,n,r,o,a=t.aspectRatio;if(!a)return t;i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i.crop=!0,r=e.naturalWidth||e.width,o=e.naturalHeight||e.height,r/o>a?(i.maxWidth=o*a,i.maxHeight=o):(i.maxWidth=r,i.maxHeight=r/a),i},i.renderImageToCanvas=function(e,t,i,n,r,o,a,s,l,u){return e.getContext("2d").drawImage(t,i,n,r,o,a,s,l,u),e},i.hasCanvasOption=function(e){return e.canvas||e.crop||!!e.aspectRatio},i.scale=function(e,t,n){function r(){var e=Math.max((l||x)/x,(u||w)/w);e>1&&(x*=e,w*=e)}function o(){var e=Math.min((a||x)/x,(s||w)/w);e<1&&(x*=e,w*=e)}t=t||{};var a,s,l,u,c,f,d,h,g,p,m,v=document.createElement("canvas"),y=e.getContext||i.hasCanvasOption(t)&&v.getContext,b=e.naturalWidth||e.width,S=e.naturalHeight||e.height,x=b,w=S;if(y&&(t=i.getTransformedOptions(e,t,n),d=t.left||0,h=t.top||0,t.sourceWidth?(c=t.sourceWidth,void 0!==t.right&&void 0===t.left&&(d=b-c-t.right)):c=b-d-(t.right||0),t.sourceHeight?(f=t.sourceHeight,void 0!==t.bottom&&void 0===t.top&&(h=S-f-t.bottom)):f=S-h-(t.bottom||0),x=c,w=f),a=t.maxWidth,s=t.maxHeight,l=t.minWidth,u=t.minHeight,y&&a&&s&&t.crop?(x=a,w=s,m=c/f-a/s,m<0?(f=s*c/a,void 0===t.top&&void 0===t.bottom&&(h=(S-f)/2)):m>0&&(c=a*f/s,void 0===t.left&&void 0===t.right&&(d=(b-c)/2))):((t.contain||t.cover)&&(l=a=a||l,u=s=s||u),t.cover?(o(),r()):(r(),o())),y){if(g=t.pixelRatio,g>1&&(v.style.width=x+"px",v.style.height=w+"px",x*=g,w*=g,v.getContext("2d").scale(g,g)),p=t.downsamplingRatio,p>0&&p<1&&x<c&&w<f)for(;c*p>x;)v.width=c*p,v.height=f*p,i.renderImageToCanvas(v,e,d,h,c,f,0,0,v.width,v.height),c=v.width,f=v.height,e=document.createElement("canvas"),e.width=c,e.height=f,i.renderImageToCanvas(e,v,0,0,c,f,0,0,c,f);return v.width=x,v.height=w,i.transformCoordinates(v,t),i.renderImageToCanvas(v,e,d,h,c,f,0,0,x,w)}return e.width=x,e.height=w,e},i.createObjectURL=function(e){return!!r&&r.createObjectURL(e)},i.revokeObjectURL=function(e){return!!r&&r.revokeObjectURL(e)},i.readFile=function(e,t,i){if(window.FileReader){var n=new FileReader;if(n.onload=n.onerror=t,i=i||"readAsDataURL",n[i])return n[i](e),n}return!1},"function"==typeof define&&define.amd?define(function(){return i}):"object"==typeof t&&t.exports?t.exports=i:e.loadImage=i}(window)},{}],9:[function(e,t,i){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function o(e){return"number"==typeof e}function a(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!o(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,i,n,o,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(i=this._events[e],s(i))return!1;if(r(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),i.apply(this,o)}else if(a(i))for(o=Array.prototype.slice.call(arguments,1),u=i.slice(),n=u.length,l=0;l<n;l++)u[l].apply(this,o);return!0},n.prototype.addListener=function(e,t){var i;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(i=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var n=!1;return i.listener=t,this.on(e,i),this},n.prototype.removeListener=function(e,t){var i,n,o,s;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=this._events[e],o=i.length,n=-1,i===t||r(i.listener)&&i.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(i)){for(s=o;s-- >0;)if(i[s]===t||i[s].listener&&i[s].listener===t){n=s;break}if(n<0)return this;1===i.length?(i.length=0,delete this._events[e]):i.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i=this._events[e],r(i))this.removeListener(e,i);else if(i)for(;i.length;)this.removeListener(e,i[i.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},{}]},{},[1]);