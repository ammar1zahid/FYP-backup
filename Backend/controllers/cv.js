import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const addCVData = (req, res) => {
    // const formData = req.body;

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
    console.log(req.cookies)
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      console.log(userInfo)

      console.log(userInfo.id)
  
    // Insert form data into MySQL database
    const q = "INSERT INTO `cvdata` (`Name_First`, `Name_Last`, `Email`, `cgpa`, `course`, `university`, `experience`, `cocurriculars`, `cvTemplateType`, `CVuserid`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";
    const values = [
      req.body.Name_First,
      req.body.Name_Last,
      req.body.Email,
      req.body.cgpa,
      req.body.course,
      req.body.university,
      req.body.experience,
      req.body.cocurriculars,
      req.body.cvTemplateType,
      userInfo.id
    ];
    console.log(values);

    db.query(q, values, (err, result) => {
      if (err) {
        res.status(500).send('Error inserting data into database');
        throw err;
      }
      console.log('Data inserted into database:', result);
      res.status(200).send('Form data submitted successfully');
    });
  });
};


export const getCVData = (req, res) => {
  // Query to fetch all CV data from the database
  const q = 'SELECT * FROM cvdata';

  db.query(q, (err, result) => {
    if (err) {
      res.status(500).send('Error fetching CV data from database');
      throw err;
    }
    console.log('CV data fetched from database:', result);
    res.status(200).json(result);
  });
};