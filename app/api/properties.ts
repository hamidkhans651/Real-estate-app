// // /pages/api/properties.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import {connect} from "../db/drizzle"; // Import the Drizzle instance
// import { eq } from "drizzle-orm"; // Import the equality condition

// // Define the model/schema for properties
// const Property = db.table("properties", {
//   id: connect.integer("id").primary(),
//   seller: db.text("seller"),
//   img: db.text("img"),
//   price: db.text("price"),
//   address: db.text("address"),
//   bed: db.text("bed"),
// });

// // API handler to fetch all properties
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const properties = await db.select().from(Property).all(); // Fetch all properties
//     res.status(200).json(properties);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching properties", error });
//   }
// }
