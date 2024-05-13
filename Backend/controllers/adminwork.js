import { db } from "../connect.js";
 import bcrypt from "bcryptjs"; 
 import jwt from "jsonwebtoken";



export const addToUniDomains = (req, res) => {
    const { uniEmail, uniPass, uniName } = req.body;
  
    // Hash the uniPass before storing it in the database
    const salt = bcrypt.genSaltSync(10);
    const hashedUniPass = bcrypt.hashSync(uniPass, salt);
  
    // SQL query to insert into unidomains
    const query = 'INSERT INTO unidomains (uniEmail, uniPass, uniName) VALUES (?, ?, ?)';
  
    // Execute the query and handle errors
    db.query(query, [uniEmail, hashedUniPass, uniName], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Error adding data to unidomains', error: err });
      }
  
      // If successful, return a 200 response
      return res.status(200).json({ message: 'Data added successfully', result: result });
    });
  };





// ADMIN TABLE CRUD APIS

// GET all admins


export const getAllAdmins = (req, res) => {
  const sql = 'SELECT * FROM admins';
  db.query(sql, (err, result) => {
      if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal server error' });
      } else {
          res.status(200).json(result);
      }
  });
};

// ADMIN TABLE CRUD APIS

