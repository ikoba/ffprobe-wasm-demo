const worker = new Worker('ffprobe-worker.js');

worker.onmessage = (e) => {
  const result = document.getElementById('result');
  result.innerText = JSON.stringify(e.data, null, 4);
};

document.getElementById('file').onchange = (e: any) => {
  const file = e.target.files[0];
  console.log('↓ file');
  console.log(file);
  worker.postMessage(['get_file_info', file]);
}
