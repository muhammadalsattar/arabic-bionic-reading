import {existsSync} from 'fs';
import path from 'path';
import { cwd } from 'process';
import generateFile from '../../utils/generate-file.js';


describe('generateFile', () => {
    it('Should accept a string or buffer as a template and return undefined', () => {
        const template = '<h1>Hello World</h1>';
        const result = generateFile(template);
        expect(result).toBeUndefined();
    });
    it('Should generate a file with the given template', () => {
        expect(existsSync(path.join(process.cwd() ,'public/arabic-bionic-text.html'))).toBe(true);
    });
});