import express from 'express';
import { exec } from 'child_process';

let obj = {"hello": "hello world"}

const PORT = 4200;

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(obj);
});

app.post('/run', (req, res) => {
  const { command } = req.body;

  console.log(`[INFO] Running "${command}"`);

  const child = exec(command);

  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');

  let stdout = '';
  let stderr = '';

  child.stdout.on('data', (data) => {
    stdout += data;
  });

  child.stderr.on('data', (data) => {
    stderr += data;
  });

  child.on('exit', () => {
    res.send({ stdout, stderr });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
