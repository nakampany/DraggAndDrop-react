import { v4 as uuidv4 } from "uuid";

const dummyData =[
    {
    id:uuidv4(),
    title:'今後やること',
    tasks: [
        {
            id:uuidv4(),
            title:"pythonの勉強",
        },
        {
            id:uuidv4(),
            title:"お風呂",
        },{
            id:uuidv4(),
            title:"散歩",
        },
    ],
},
{
    id:uuidv4(),
    title:'終わったこと',
    tasks: [
        {
            id:uuidv4(),
            title:"機械学習の勉強",
        },
        {
            id:uuidv4(),
            title:"研究",
        },{
            id:uuidv4(),
            title:"ゴルフ",
        },
    ],
},
{
    id:uuidv4(),
    title:'今からやること',
    tasks: [
        {
            id:uuidv4(),
            title:"unityの勉強",
        },
        {
            id:uuidv4(),
            title:"カフェ",
        },{
            id:uuidv4(),
            title:"reactの勉強",
        },
    ],
}
];

export default dummyData;