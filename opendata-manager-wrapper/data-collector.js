const axios = require('axios').default

module.exports = { getCatalog, getRealDataToFile }

function getCatalog(sourceInfo) {

    const url = sourceInfo.defaultUrl + "catalog.rdf"

    const result = axios.post(url)
        .then(function (response) {
            const data = response.data
            return data

        }).catch(function (error) {
            console.log(error)
        })
    return result
}

async function getRealDataToFile(url) {

    const result = axios.get(url, { responseType: 'arraybuffer' })
        .then(function (response) {
            const data = response.data
            return data

        }).catch(function (error) {
            console.log(error)
        })
    return result
}