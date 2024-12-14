// pages/api/properties.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db/db';
import { propertiesTable } from '@/db/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, location, price, description } = req.body;

      // Insert property into the database
      const result = await db
        .insert(propertiesTable)
        .values({
          name,
          location,
          price,
          description,
        })
        .returning();

      return res.status(201).json(result);
    } catch (error) {
      console.error('Error inserting property:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    try {
      const properties = await db.select().from(propertiesTable);
      return res.status(200).json(properties);
    } catch (error) {
      console.error('Error fetching properties:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
