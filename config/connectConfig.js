/**
 * default config information
 */

// HPC02 json_KDBC2022
// const workspaceId = "d93c45a9-d2b6-4261-808c-20344a8f824b"
// const operationId = "7b8810d0-e3ff-4bd3-9096-4e2a437b3b14"
// const defaultUrl = "http://114.70.235.40:28000/api/v1/"

// HPC02 KDBC_demo_scale
const workspaceId = '23f0e1d1-2eae-4774-bc2e-878c610c9528'
const operationId = 'a36aede6-33d4-40ee-82e0-98612c2fb842'
const defaultUrl = 'http://114.70.235.40:28000/api/v1/'

const destinationDefinitionId = '25c5221d-dce2-4163-ade9-739ef790f503'
const sourceDefinitionId = 'decd338e-5647-4c0b-adf4-da0e75f5a750'
const csvSourceDefinitnionId = '778daa7c-feaf-4db6-96f3-70fd645acc77'
const status = 'active'

const jsonConnectSource = {
    url: 'http://geoserver.nottinghamcity.gov.uk/opendata/geojson/ncc_Recycling_Centres.json',
    format: 'json',
    provider: {
        storage: 'HTTPS'
    },
    dataset_name: 'json_table_1'
}

exports.workspaceId = workspaceId
exports.defaultUrl = defaultUrl
exports.destinationDefinitionId = destinationDefinitionId
exports.sourceDefinitionId = sourceDefinitionId
exports.csvSourceDefinitnionId = csvSourceDefinitnionId
exports.jsonConnectSource = jsonConnectSource
exports.operationId = operationId
exports.status = status
