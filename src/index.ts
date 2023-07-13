const worker = new Worker('ffprobe-worker.js');

worker.onmessage = (e) => {
  const result = document.getElementById('result');
  result.innerText = JSON.stringify(e.data, null, 4);
};

const button = document.getElementById('execute');
button.addEventListener('click', (e) => {
  fetch("test.mp4")
    .then(response => response.blob())
    .then(blob => new File([blob], 'test.mp4'))
    .then(file => {
      worker.postMessage(['get_file_info', file]);
    })
});
