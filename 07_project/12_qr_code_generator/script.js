const input = document.querySelector('#input');
const qrCodeElement = document.querySelector('#qrcode');
const submit=document.querySelector('.submit')
// const container=document.querySelector('#container')
const download=document.querySelector('.download')
const downloadLink = document.querySelector('a');



function generateQRCode() {
    if (input.value !== '') {
        
        qrCodeElement.innerHTML = '';
        
        const qrcode = new QRCode("qrcode");
        
        qrcode.makeCode(input.value); // Generate QR code with the input value
        qrCodeElement.style.border = '8px solid #4476fb';
        download.style.visibility='visible'

        // Wait for the QR code to be generated, then set the href attribute of the download link
        setTimeout(function() {
            const qrCodeImage = qrCodeElement.querySelector('img');
            if (qrCodeImage) {
                downloadLink.href = qrCodeImage.src;
            }
        }, 500);

    } else {
        qrCodeElement.innerHTML = '';
        qrCodeElement.style.border = '0'; // Set the border to 0
        download.style.visibility='hidden'
    }
}



window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        generateQRCode();
    }
}, true);

submit.addEventListener('click', function(e) {
    e.preventDefault();
    generateQRCode();
});

generateQRCode();
