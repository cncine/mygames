main.floors.sample0=
{
"floorId": "sample0",
"title": "楼梯间",
"name": "0",
"canFlyTo": true,
"canUseQuickShop": true,
"defaultGround": "ground",
"images": [],
"bgm": null,
"item_ratio": 2,
"map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,  2, 87,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,  2,  0,  0,  0,  0,  0,  0,  0,997,  0,  2,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  2,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  2,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  2,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  2,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  2,  2],
    [  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  2],
    [  2,  2, 87,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
"firstArrive": [],
"events": {
    "2,10": [
        {
            "type": "setValue",
            "name": "flag:stairNum",
            "value": "flag:stairNum-1"
        },
        {
            "type": "changeFloor",
            "floorId": "sample0",
            "loc": [
                2,
                2
            ],
            "direction": "down"
        }
    ],
    "8,3": {
        "trigger": null,
        "enable": false,
        "noPass": null,
        "displayDamage": false,
        "data": [
            {
                "type": "if",
                "condition": "!flag:seeBlood",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:seeBlood",
                        "value": "true"
                    },
                    "薛阳：\n这是，血！这里究竟发生了什么？",
                    {
                        "type": "hide"
                    }
                ],
                "false": []
            }
        ]
    },
    "7,9": null
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}