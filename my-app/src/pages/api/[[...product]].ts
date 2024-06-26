import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: Number;
  data: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log('req.query.products', req.query)
  if (req.query.product![1]) {
    const data = await retrieveDataById("products", req.query.product![1]);
    res.status(200).json({ status: true, statusCode: 200, data });
  } else {
    const data = await retrieveData("products");
    res.status(200).json({ status: true, statusCode: 200, data });
  }
}