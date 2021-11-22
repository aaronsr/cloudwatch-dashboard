const AWS = require('aws-sdk')
const CW = new AWS.CloudWatch({region: 'us-west-2'})


let putBoard = async (params) => {
    try {
        let $ = await CW.putDashboard(params).promise()
        return $
    } catch (e) {
        return e
    }
}

exports.putBoard = putBoard