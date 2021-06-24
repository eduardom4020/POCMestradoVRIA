const os = require('os');
const qrcode = require('qrcode-terminal');

const networkInterfaces = os.networkInterfaces();
const ipv4List = networkInterfaces['Wi-Fi'].filter(x => x.family === 'IPv4' && !x.internal);

if(ipv4List && ipv4List.length > 0) {
    const { address } = ipv4List.pop();
    const connectionPrefix = process.env.HTTPS ? 'https' : 'http';
    const port = process.env.PORT || '3000';
    const link = `${connectionPrefix}://${address}:${port}`;
    
    console.log('Please connect your cellphone in the same wifi network of this computer. Then navigate to the following address or scan the qr code bellow to test your application.');

    console.log(link);
    qrcode.generate(link, {small: true});

    console.log('\n\n\n\n\n\n\n\n');
}