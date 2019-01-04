import express from 'express'
import fs from 'fs'
import path from 'path'
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    title: 'Express'
  });
});
let cpt =0
router.post('/upload', (req, res, next) => {
  let uploadFile = req.files.file
  const fileName = req.files.file.name

  let dir = `${path.join(__dirname, '../upload')}/${fileName}`
  let ext = path.extname(dir)
  let basename = path.basename(dir,ext)

  if (fs.existsSync(dir)) {
  uploadFile.mv(
    `${path.join(__dirname, '../upload')}/${basename}(${++cpt})${ext}`,
    function (err) {
      if (err) {
        console.log(err.message);

        return res.status(500).send(err)
      }
      console.log('ok');
      res.json({
        file: `upload/${req.files.file.name}`,
      })
    },
  )
  }else{
 uploadFile.mv(

   `${path.join(__dirname, '../upload')}/${fileName}`,
   function (err) {
     if (err) {
       console.log(err.message);
       
       return res.status(500).send(err)
     }
     console.log('ok');
     
     res.json({
       file: `upload/${req.files.file.name}`,
     })
   },
 )
  }
 
})
module.exports = router;