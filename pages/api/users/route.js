import {connect} from '../../lib/db';
import User from '../../models/User';
import Course from '../../models/Onboarding/Course'


async function findAllUsers() {
  console.log("find all user");
  return User.find({}).populate("selectedCourse");
}

async function createUser(user) {
  const newUser = new User(user);
  await newUser.save();
  return newUser;
}

export default async function handler(req, res) {
  await connect();

  try {
    switch (req.method) {
      case 'GET':
        console.log("GET test");
        const users = await findAllUsers();
        res.status(200).json(users);
        break;

      case 'POST':
        const newUser = req.body;
        const createdUser = await createUser(newUser);
        res.status(201).json(createdUser);
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
        break;
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
