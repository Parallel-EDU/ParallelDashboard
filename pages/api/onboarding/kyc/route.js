"use client";

import fs from 'fs';
import path from 'path';
import { connect } from '../../../lib/db';
import Kyc from '../../../models/Onboarding/Kyc';
import jwt from 'jsonwebtoken';

async function findAllKyc() {
  console.log("Find all KYC records");
  return Kyc.find({});
}

async function createKyc(kycData) {
  const newKyc = new Kyc(kycData);
  await newKyc.save();
  return newKyc;
}

export default async function handler(req, res) {
  await connect();

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization token is required' });
    }
    
    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    const userId = decoded.id;

    switch (req.method) {
      case 'GET':
        console.log("GET request for KYC records");
        const kycRecords = await findAllKyc();
        res.status(200).json(kycRecords);
        break;

      case 'POST':
        const { panPhoto, passportPhoto, panNumber } = req.body;
        console.log("request body", req.body);
        // if (!panNumber || !panPhoto || !passportPhoto) {
        //   return res.status(400).json({ error: 'All fields are required: panNumber, panPhoto, passportPhoto' });
        // }

        //converting to base64 
        const base64ToFile = (base64String, filePath) => {
          const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
          const buffer = Buffer.from(base64Data, 'base64');
          fs.writeFileSync(filePath, buffer);
        };

        const panPhotoPath = path.join(process.cwd(), 'public', `${userId}_panPhoto.jpg`);
        const passportPhotoPath = path.join(process.cwd(), 'public', `${userId}_passportPhoto.jpg`);

        base64ToFile(panPhoto, panPhotoPath);
        base64ToFile(passportPhoto, passportPhotoPath);

        const kycData = {
          userId,
          panNumber,
          panPhoto: panPhotoPath,
          passportPhoto: passportPhotoPath
        };

        const createdKyc = await createKyc(kycData);
        res.status(201).json({ message: 'KYC details saved successfully', data: createdKyc });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      res.status(401).json({ error: 'Invalid token' });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  }
}
