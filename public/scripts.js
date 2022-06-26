const resultDiv = document.getElementById('result');

document.querySelector('#create').addEventListener('click', function(e) {
    e.preventDefault();
    const text = document.querySelector('textarea').value;
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(data => {
        document.querySelector('#download').disabled = false;
        data.pages.map((page, index) => {
            const div = document.createElement('div');
            div.className = 'page';
            div.innerHTML = `
            <p>${page}</p>
            <p style="text-align: center;">${index + 1}</p>
            `;
            resultDiv.appendChild(div);
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

