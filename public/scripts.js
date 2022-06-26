const browseLink = document.querySelector('#browse');
const downloadLink = document.querySelector('#download');
const scrolly = document.querySelector("#generated").getBoundingClientRect().top;

document.querySelector('#create').addEventListener('click', function(e) {
    e.preventDefault();
    const text = document.querySelector('textarea').value;
    if(text.length === 0) {
        return
    }
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(() => {
        browseLink.href = '/arabic-bionic-text.html';
        browseLink.setAttribute('target', '_blank');
        downloadLink.removeAttribute('disabled');
        window.scrollTo({
            top: window.scrollY + scrolly,
            left: 0,
            behavior: 'smooth'
          });
    })
    .catch(err => console.log(err));
});

document.querySelector('#download').addEventListener('click', function(e) {
    e.preventDefault();
    fetch('/download', {
        method: 'GET'
    })
    .then(res => res.blob()).then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Arabic-bionic-text.html';
        link.click();
    });
});

