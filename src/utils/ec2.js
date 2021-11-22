const AWS = require('aws-sdk')
const EC2Client = new AWS.EC2({region: 'us-west-2'})


const parseForServerName = async (arr) => {
    try {
        arr.forEach((item) => {
            if (item.Key == 'Name'){
                serverNameFromTag = item.Value
            }
        }); return serverNameFromTag
    } catch (e) {
        console.log(e)
    }
}

const getEC2Info = async (InstanceID) => {
    let params = {Filters: [{Name: 'instance-id', Values: [InstanceID]}]}

    try {
        let data = await EC2Client.describeInstances(params).promise()
        let tags = data.Reservations[0].Instances[0].Tags
        let ImageID = data.Reservations[0].Instances[0].ImageId
        let InstanceType = data.Reservations[0].Instances[0].InstanceType
        return [{'tags': tags, 'ImageID': ImageID, 'InstanceType': InstanceType}]
    } catch (e) {
        console.log(e)
    }
}

exports.getEC2Info = getEC2Info
exports.parseForServerName = parseForServerName
