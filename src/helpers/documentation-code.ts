export const nodejs = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://recommendations-spotify-api.vercel.app/api/v1/querySpotify',

    // max 5 genres
    genreList: ["hip-hop",],
    
    // value is between 0 and 1 inclusive and label is lowercase
    sliders: [{ label: "energy", value: 0.5 }], 
    Authorization: 'YOUR API KEY',
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`

export const python = `import requests

url = 'https://similarityapi.com/api/v1/similarity'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'

headers = {
    'Authorization': api_key
}

payload = {
    'text1': text1,
    'text2': text2
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`
