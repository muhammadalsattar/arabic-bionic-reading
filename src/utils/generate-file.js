import fs from 'fs'
import path from 'path';

const generateFile = (template) => {
  return fs.writeFileSync(path.join(process.cwd(), 'public/arabic-bionic-text.html'), template);
}

export default generateFile;