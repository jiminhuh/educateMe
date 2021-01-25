//Load HTTP module
const https = require('https');

const req = https.get("https://cat-fact.herokuapp.com/facts", (res) => {
    // console.log(`STATUS: ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    res.on('data', (res) => {
        let parsedData = JSON.parse(res);
        for (let i = 0; i < parsedData.length; i++) {
            console.log(parsedData[i]["text"]);
        } 
    });

    res.on('end', () => {
    // console.log('No more data in response.');
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
})

req.end();
