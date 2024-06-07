import React from 'react';
// import fs from 'fs';
// import path from 'path';
import Home from './Home';

// const { readFile } = require('node:fs/promises');
// const { resolve } = require('node:path');
export default async function page() {
  // const dataPath = path.join(process.cwd(), './data/data.json');
  // const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  

    // const dataPath  = resolve('.app/data.json');
    // const data = await readFile(dataPath, { encoding: 'utf8' });
    // console.log(data);
  

  return <Home  />;
}
