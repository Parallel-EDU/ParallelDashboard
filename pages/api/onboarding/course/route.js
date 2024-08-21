"use client";

import { connect } from '../../../lib/db';
import Course from '../../../models/Onboarding/Course';
import jwt from 'jsonwebtoken';

async function findAllCourses() {
  console.log("Find all courses");
  return Course.find({});
}

async function createCourse(courseData) {
  const newCourse = new Course(courseData);
  await newCourse.save();
  return newCourse;
}

export default async function handler(req, res) {
  await connect();

  try {
    switch (req.method) {
      case 'GET':
        console.log("GET request for courses");
        const courses = await findAllCourses();
        res.status(200).json(courses);
        break;

      case 'POST':
        console.log("POST request for courses");

        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).json({ error: 'Authorization token is required' });
        }

        const token = authHeader.split(' ')[1];

        try {
          const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
          const userId = decoded.id;

          const newCourse = req.body;
          newCourse.userId = userId;

          const createdCourse = await createCourse(newCourse);
          res.status(201).json(createdCourse);
        } catch (error) {
          return res.status(401).json({ error: 'Invalid token' });
        }

        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
