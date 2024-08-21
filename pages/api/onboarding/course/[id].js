"use client";

import { connect } from '../../../lib/db';
import Course from '../../../models/Onboarding/Course';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

async function findCourseById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Course.findById(id);
}

async function updateCourseById(id, updates) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Course.findByIdAndUpdate(id, updates, { new: true });
}

async function deleteCourseById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Course.findByIdAndDelete(id);
}

export default async function handler(req, res) {
  await connect();

  const { id } = req.query;

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decoded.id;

    try {
      switch (req.method) {
        case 'GET':
          const course = await findCourseById(id);
          if (!course) {
            return res.status(404).json({ message: 'Course not found' });
          }
          res.status(200).json(course);
          break;

        case 'PUT':
          const updates = req.body;
          updates.userId = userId;
          const updatedCourse = await updateCourseById(id, updates);
          if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
          }
          res.status(200).json(updatedCourse);
          break;

        case 'DELETE':
          const deletedCourse = await deleteCourseById(id);
          if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
          }
          res.status(204).end();
          break;

        default:
          res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
          res.status(405).end(`Method ${req.method} Not Allowed`);
          break;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}
