function checkPanagram(str) {
  let obj = new Set(str);

  return obj.size === 26
}

console.log(checkPanagram("thequickbrownfoxjumpsoverthelazydog"))
