import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req,res){
    if(req.method==='POST'){
        const data = req.body;

        // const {title,image,description,address}=data;

       const client = await MongoClient.connect('mongodb+srv://new_user:QDrWN5Ryi4yhPMhY@cluster0.3lfixab.mongodb.net/meetups?retryWrites=true&w=majority')
       const db = client.db();

       const meetupsCollection = db.collection('meetups');

       const result = await meetupsCollection.insertOne(data);

       console.log(result);

       client.close();

       res.status(201).json({message:'Meetup inserted'})
        // QDrWN5Ryi4yhPMhY
    }
}

export default handler;