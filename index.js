var recipes = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value })
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  var newObject = object
  delete newObjectd[key]
  return newObjectd
}