const fs = require('fs')
const path = require('path')
const folderpath = './artifact'
const extension = '.jpg'
const newext = '.png'

fs.readdirSync(folderpath).forEach(f => {
  // console.log(f);
  if(path.extname(f) === extension){
    // console.log(folderpath + '/' + f,folderpath + '/' + f.replace(extension,newext));
    fs.rename(folderpath + '/' + f,folderpath + '/' + f.replace(extension,newext))
  }
})
