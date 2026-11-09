var APP_DATA = {
  "scenes": [
    {
      "id": "0-ceo-1",
      "name": "CEO 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.024329045124247273,
        "pitch": 0.12110759281164718,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -2.3778846876747473,
          "pitch": 0.029053490384788105,
          "rotation": 0,
          "target": "2-lounge-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ceo-2",
      "name": "CEO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.027745274974245504,
        "pitch": -0.008366138945390844,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -1.5576359130127635,
          "pitch": 0.020088124657263506,
          "rotation": 0,
          "target": "2-lounge-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lounge-area",
      "name": "LOUNGE AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.06801884085119347,
        "pitch": -0.006342263870324771,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -0.9406432264205478,
          "pitch": 0.11484793315847952,
          "rotation": 5.497787143782138,
          "target": "1-ceo-2"
        },
        {
          "yaw": -1.9037499026065614,
          "pitch": 0.12931200168728907,
          "rotation": 0,
          "target": "0-ceo-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SABA TOWER",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
