/**
 * This script clones the installed mdi icons (`@mdi/svg`) into the hugo install with the proper fill-color tag.
 */
import fs from 'fs/promises';
import path from 'path';

(async () => {
    let files = await fs.readdir('./node_modules/@mdi/svg/svg', { recursive: false });
    for (let f of files) {
        if (f.match(/.svg$/i)) {
            let sourcePath = path.resolve(path.join('./node_modules/@mdi/svg/svg/', f));
            let targetPath = path.resolve(path.join('./assets/icons/', f));
            let svgContent = (await fs.readFile(sourcePath)).toString();
            //add fill color to svg text.
            let match = svgContent.match(/<svg\s(.+?)>/i);
            if (match) {
                svgContent = `<svg ${match[1]} fill="currentColor">${svgContent.substring(match.index + match[0].length)}`;
                //write
                await fs.writeFile(targetPath, svgContent, { encoding: 'utf8' });
            } else {
                console.warn(`File "${f}" skipped. Unable to find svg XML element.`);
            }
        }
    }
})();