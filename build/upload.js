const Client = require('ftp')
const ora = require('ora')
const path = require('path')
const glob = require('glob')
const c = new Client()

// 本地目录
const localPath = path.join(__dirname, '../dist').replace(/\\/g, '/')
// 远程目录
const remotePath = '/webroot/vue-test'
// 允许上传的文件扩展名
const allowFiles = ['html', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'eot', 'svg', 'ttf', 'woff']

const spinner = ora('开始上传...').start()

c.on('ready', function () {
    // 上传所有匹配到的文件
    const files = glob.sync(`${localPath}/**/*.{${allowFiles.join(',')}}`)
    Promise.all(
        files.map(localFile => {
            const remoteFile = localFile.replace(localPath, remotePath)
            return c.put(localFile, remoteFile, function(err) {
                if (err) throw err;
                c.end();
            })
        })
    ).then(() => {
            spinner.succeed('上传完成')
            process.exit()
        }).catch(err => {
            spinner.fail('上传失败')
            process.exit()
        })
})
c.connect({
    host: 'xiaofan.ftp-gz01.bcehost.com',
    port: '8010',
    user: 'xiaofan',
    password: 'hj19931009'
})

// 连接 ftp
// c.connect({
//     host: 'xiaofan.ftp-gz01.bcehost.com',
//     port: '8010',
//     username: 'xiaofan',
//     password: 'hj19931009'
// }).then(() => {
//     // 先删除目录
//     return ftp.rmdir(remotePath, true)
// }).then(() => {
//     // 再创建目录
//     return Promise.all([
//         ftp.mkdir(`${remotePath}/static/fonts`, true),
//         ftp.mkdir(`${remotePath}/static/img`, true),
//         ftp.mkdir(`${remotePath}/static/css`, true),
//         ftp.mkdir(`${remotePath}/static/js`, true)
//     ])
// }).then(() => {
//     // 上传所有匹配到的文件
//     const files = glob.sync(`${localPath}/**/*.{${allowFiles.join(',')}}`)
//     return Promise.all(
//         files.map(localFile => {
//             const remoteFile = localFile.replace(localPath, remotePath)
//             return ftp.put(localFile, remoteFile)
//         })
//     )
// }).then(() => {
//     spinner.succeed('上传完成')
//     process.exit()
// }).catch(err => {
//     spinner.fail('上传失败')
//     process.exit()
// })
