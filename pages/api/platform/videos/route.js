import AWS from 'aws-sdk';
// import Video from '../../models/Video';
import dbConnect from '../../lib/dbConnect';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      const { title, description, file } = req.body;

      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${Date.now()}_${file.name}`, // Use a unique key for the file
        Body: Buffer.from(file.data, 'base64'), // Convert file to buffer
        ContentType: file.type,
      };

      try {
        const data = await s3.upload(params).promise();
        const videoUrl = data.Location;

        const video = await Video.create({
          title,
          description,
          videoUrl,
        });

        res.status(201).json({ success: true, data: video });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
      break;
  }
}
