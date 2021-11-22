let params = (InstanceID, ImageId, InstanceType) => {

    let parameters = {
        DashboardBody: JSON.stringify({
            "widgets": [
                {
                    "height": 6,
                    "width": 6,
                    "y": 0,
                    "x": 0,
                    "type": "metric",
                    "properties": {
                        "view": "timeSeries",
                        "stacked": false,
                        "metrics": [
                            [ "AWS/EC2", "EBSReadBytes", "InstanceId", ""+InstanceID+"" ],
                            [ ".", "EBSReadOps", ".", "." ],
                            [ ".", "EBSWriteBytes", ".", "." ],
                            [ ".", "EBSWriteOps", ".", "." ],
                            [ ".", "DiskWriteBytes", ".", "." ],
                            [ ".", "DiskWriteOps", ".", "." ],
                            [ ".", "DiskReadBytes", ".", "." ],
                            [ ".", "DiskReadOps", ".", "." ]
                        ],
                        "region": "us-west-2",
                        "title": "Disk & EBS Read\\Writes"
                    }
                },
                {
                    "height": 6,
                    "width": 6,
                    "y": 0,
                    "x": 6,
                    "type": "metric",
                    "properties": {
                        "view": "timeSeries",
                        "stacked": false,
                        "metrics": [
                            [ "AWS/EC2", "CPUUtilization", "InstanceId", ""+InstanceID+"" ]
                        ],
                        "region": "us-west-2"
                    }
                },
                {
                    "height": 6,
                    "width": 6,
                    "y": 0,
                    "x": 12,
                    "type": "metric",
                    "properties": {
                        "view": "timeSeries",
                        "stacked": false,
                        "metrics": [
                            [ "AWS/EC2", "NetworkOut", "InstanceId", ""+InstanceID+"" ],
                            [ ".", "NetworkPacketsOut", ".", "." ],
                            [ ".", "NetworkPacketsIn", ".", "." ],
                            [ ".", "NetworkIn", ".", "." ]
                        ],
                        "region": "us-west-2",
                        "title": "Network"
                    }
                },
                {
                    "height": 6,
                    "width": 6,
                    "y": 0,
                    "x": 18,
                    "type": "metric",
                    "properties": {
                        "view": "timeSeries",
                        "stacked": false,
                        "metrics": [
                            [ "CWAgent", "LogicalDisk % Free Space", "instance", "K:", "InstanceId", ""+InstanceID+"", "ImageId", ""+ImageId+"", "objectname", "LogicalDisk", "InstanceType", ""+InstanceType+"" ],
                            [ "...", "J:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "F:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "E:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "C:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "O:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "L:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "U:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "D:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "G:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "H:", ".", ".", ".", ".", ".", ".", ".", "." ],
                            [ "...", "T:", ".", ".", ".", ".", ".", ".", ".", "." ]
                        ],
                        "region": "us-west-2",
                        "title": "Disk % Free Space"
                    }
                },
                {
                    "height": 6,
                    "width": 6,
                    "y": 6,
                    "x": 0,
                    "type": "metric",
                    "properties": {
                        "view": "timeSeries",
                        "stacked": false,
                        "metrics": [
                            [ "CWAgent", "Memory % Committed Bytes In Use", "InstanceId", ""+InstanceID+"", "ImageId", ""+ImageId+"", "objectname", "Memory", "InstanceType", ""+InstanceType+"" ]
                        ],
                        "region": "us-west-2"
                    }
                }
            ]
        })
    }

    return parameters
}

exports.params = params
