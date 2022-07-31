const template = (pages) => {
    let pageDivs = '';
    pages.forEach((page, index) => {
        pageDivs +=`
        <div class="page">
            <p>${page}</p>
            <p style="text-align: center; font-size: .9em">${index + 1}</p>
        </div>
        `
    })
    return `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>Arabic Bionic Reading</title>

        <link rel="icon" href="/assets/favicon.ico">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;500&display=swap" rel="stylesheet">
        <style>
            body {
                width: 90%;
                color: #2d3436 !important;
                margin: auto auto;
                font-weight: 300;
                margin-bottom: 2em !important;
            }

            .page {
                height: max-content;
                padding: 0.5em;
                margin: 1em 0;
            }
            p {
                font-family: 'Noto Sans Arabic', sans-serif;
                margin: 1em;
                text-align: right;
                font-size: 1.5em;
                line-height: 1.8em;
            }
            b {
                font-weight: 500 !important;
            }
            @media screen and (max-width: 600px) {
                body {
                    width: 100%;
                }
                .page {
                    margin: 0.5em .5em;
                }
                p {
                    font-size: 1.3em;
                    line-height: 1.5em;
                }
        </style>
    </head>
    <body>
        ${pageDivs}
    </body>
    </html>
    `
}

export default template;