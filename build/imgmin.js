const path = require('path')
const ora = require('ora')
const imagemin = require('imagemin')
const imageminPngquant = require('imagemin-pngquant')
const imageminOptipng = require('imagemin-optipng')
const imageminGifsicle = require('imagemin-gifsicle')
const imageminJpegtran = require('imagemin-jpegtran')

const spinner = ora('开始压缩图片...').start()
const imgdir = path.join(__dirname, '../dist/static/img')

imagemin([`${imgdir}/*.{png,jpg,jpeg,gif}`], imgdir, {
    plugins: [
        imageminPngquant({
            quality: '70-80'
        }),
        imageminOptipng(),
        imageminGifsicle(),
        imageminJpegtran()
    ]
}).then(res => {
    spinner.succeed('压缩图片完成')
    process.exit()
}).catch(err => {
    spinner.fail('压缩图片失败')
    process.exit()
})
