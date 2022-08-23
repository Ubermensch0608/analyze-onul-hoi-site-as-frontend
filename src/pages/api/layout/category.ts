// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { CategoryInterface } from 'src/@types/layout';
import { CATEGORY_DATA } from 'src/mocks/layout/category';

type Data = {
	categories: CategoryInterface[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json(CATEGORY_DATA);
}
