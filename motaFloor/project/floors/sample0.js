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
    [  2,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  2],
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
    ]
},
"changeFloor": {},
"afterBattle": {},
"afterGetItem": {},
"afterOpenDoor": {},
"cannotMove": {},
}