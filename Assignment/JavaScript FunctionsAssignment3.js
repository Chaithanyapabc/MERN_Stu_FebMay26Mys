//JSON Settings Merge Problem statement
function mergeSettings(savedSettingsJSON, defaultSettings) {
  const savedSettings = JSON.parse(savedSettingsJSON);
  const mergedObject = { ...defaultSettings, ...savedSettings };
  return {
    mergedObject: mergedObject,
    mergedJSON: JSON.stringify(mergedObject)
  };
}


const defaults = { theme: "white", volume: 20 };
const saved = '{"theme": "pink"}';

const result = mergeSettings(saved, defaults);
const jsonString = JSON.stringify(result);
console.log(jsonString);
console.log(result);