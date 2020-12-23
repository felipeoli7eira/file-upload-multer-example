const express = require('express')
const multer = require('multer')

const app = express()
const upload = multer(
    {
        storage: multer.diskStorage(
            {
                destination: function(req, file, cb) {
                    cb(null, 'storage/')
                },
                filename: function(req, file, cb) {
                    cb(
                        null,
                        Date.now() + file.originalname
                    )
                }
            }
        )
    }
)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    res.render('index')
})

app.post('/upload', upload.single('file'), (req, res) => {

    res.send('received...')
})

app.listen(8080, () => console.log('running...'))
