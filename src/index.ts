const worker = new Worker('ffprobe-worker.js');

fetch("test.mp4")
  .then(response => response.blob())
  .then(blob => new File([blob], "test.mp4"))
  .then(file => {
    worker.postMessage(['get_file_info', file]);
  })
worker.onmessage = (e) => {
  console.log(e.data)
};
console.log("Hello World!");
