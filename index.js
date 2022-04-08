var getData= require('./computeData.js');
var saveData = require('./saveFileToJSON.js');

// taking input as a JSON object
const clicks_object=require('./clicks.json');

// for storing the final result set
const result= getData.clicksComputeSubset(clicks_object);

// Save the final computed result into a new file 
saveData.saveFile(result);
