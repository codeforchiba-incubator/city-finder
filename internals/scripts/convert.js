const path = require('path');
const fs = require('fs');
const csv = require('csvtojson');

if (process.argv.length < 3) {
  process.stderr.write('missing argument.');
  process.exit();
}

const csvFile = process.argv[2];
const jsonFile = path.join(path.dirname(csvFile), path.basename(csvFile, '.tsv') + '.json');

const out = fs.createWriteStream(jsonFile);

csv({
  delimiter: "\t",
  noheader: false,
  headers: [
    'id', 'out.type', 'out.catalog', 'out.auther', 'title', 'location.address',
    'description', 'comment',
    'tags.pokestop', 'tags.historical', 'tags.temple', 'tags.monumental',
    'tags.railway', 'tags.battleSite', 'tags.art', 'tags.scenic', 'tags.building',
    'out.other1', 'out.picture.0', 'pictures.0', 'out.picture.1', 'pictures.1',
    'out.picture.2', 'pictures.2', 'out.picture.x', 'out.picture.x2',
    'tags.traditional', 'tags.cool', 'tags.nightScene', 'tags.fujiyama', 'out.other2',
    'out.picture.d', 'location.lat', 'location.long',
    'monument.yearJP', 'monument.yearAD', 'monument.type',
    'monument.class1', 'monument.class2',
  ],
  toArrayString: true,
})
  .fromFile(csvFile)
  .on('json', (jsonObj, rowIndex) => {
    delete jsonObj.out;

    for (let key in jsonObj.tags) {
      jsonObj.tags[key] = jsonObj.tags[key] == 1;
    }

    if (jsonObj.hasOwnProperty('pictures')) {
      jsonObj.pictures = jsonObj.pictures.filter(name => name.length > 0);
    }
  })
  .pipe(out);

process.stdout.write(jsonFile + ' created.\n');
