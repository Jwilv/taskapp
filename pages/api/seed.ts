import { db, seedData } from "@/database"
import { Entry } from "@/models";
import { NextApiRequest, NextApiResponse } from "next"

type Data = {
    ok: boolean,
    message: string,
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') {
        res.status(401).json({
            ok: false,
            message: 'No tiene acceso a este servicio'
        })
    }

    await db.connect();

    await Entry.deleteMany();
    await Entry.insertMany( seedData.entries );

    await db.disconnect();

    res.status(200).json({
        ok: true,
        message: 'Task created'
    })

}