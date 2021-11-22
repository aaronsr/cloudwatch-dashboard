const CWModule = require('./utils/cloudwatch')
const EC2Module = require('./utils/ec2')
const prodOpsParams = require('./json_templates/prodOpsSqlServer')

const allInstanceIDs = ['i-123456789', 'i-123456789', 'i-123456789', 'i-123456789']

allInstanceIDs.forEach((InstanceID) => {
    
    EC2Module.getEC2Info(InstanceID)
        .then((EC2Info) => {console.log(EC2Info)
            EC2Module.parseForServerName(EC2Info[0].tags)
            .then((serverName) => {console.log(serverName)
                params = prodOpsParams.params(InstanceID, EC2Info[0].ImageID,  EC2Info[0].InstanceType )
                CWModule.putBoard({DashboardName: serverName, DashboardBody: params.DashboardBody})
                .then(console.log)

        })})
        .catch(console.log)
})

