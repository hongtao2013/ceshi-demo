Page({
    data: {
        markers: [{
            iconPath: "../../../images/others.png",
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 30,
            height: 30
        }],
        polyline: [{
            points: [{
                longitude: 113.3245211,
                latitude: 23.10229
            }, {
                longitude: 113.324520,
                latitude: 23.21229
            }],
            color:"#FF0000DD",
            width: 2,
            dottedLine: true
        }],
        controls: [{
            id: 1,
            iconPath: '../../../images/location.png',
            position: {
                left: 20,
                top: 300 - 50,
                width: 30,
                height: 30
            },
            clickable: true
        }]
    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
        wx.getLocation({
            type: 'gcj02',
            success: function(res){
                console.log(res)
                wx.openLocation({
                  latitude: res.latitude,
                  longitude: res.longitude,
                  scale: 28
                })
            }
        })
    }
})