import { db } from "../connect.js";
 import bcrypt from "bcryptjs"; 
 import jwt from "jsonwebtoken";





// export const register = (req, res) => {
//   //CHECK USER IF EXISTS

//   const q = "SELECT * FROM users WHERE username = ?";

//   db.query(q, [req.body.username], (err, data) => {
//     if (err) return res.status(500).json(err);
//     if (data.length) return res.status(409).json("User already exists!");
//     //CREATE A NEW USER
//     //Hash the password
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(req.body.password, salt);

//     const q =
//       "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";

//     const values = [
//       req.body.username,
//       req.body.email,
//       hashedPassword,
//       req.body.name,
//     ];

//     db.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json("User has been created.");
//     });
//   });
// };



// export const login = (req, res) => {
//   const q = "SELECT * FROM users WHERE username = ?";

//   db.query(q, [req.body.username], (err, data) => {
//     if (err) return res.status(500).json(err);
//     if (data.length === 0) return res.status(404).json("User not found!");

//     const checkPassword = bcrypt.compareSync(
//       req.body.password,
//       data[0].password
//     );

//     if (!checkPassword)
//       return res.status(400).json("Wrong password or username!");

//     const token = jwt.sign({ id: data[0].id }, "secretkey");

//     const { password, ...others } = data[0];

//     res
//       .cookie("accessToken", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json(others);
//   });

// };




// export const login = (req, res) => {
//   const q = "SELECT * FROM users WHERE email = ?"; // Change to search by email

//   db.query(q, [req.body.email], (err, data) => { // Change to use email
//     if (err) return res.status(500).json(err);
//     if (data.length === 0) return res.status(404).json("User not found!"); // If no matching email, user not found

//     const checkPassword = bcrypt.compareSync(
//       req.body.password,
//       data[0].password
//     );

//     if (!checkPassword)
//       return res.status(400).json("Wrong password or email!"); // Return error message for wrong password or email

//     const token = jwt.sign({ id: data[0].id }, "secretkey"); // Sign JWT with user ID

//     const { password, ...others } = data[0]; // Exclude password from returned data

//     res
//       .cookie("accessToken", token, { // Set cookie with the JWT
//         httpOnly: true,
//       })
//       .status(200) // Return success status and user data (without password)
//       .json(others);
//   });
// };


// LOGIN CODE WORKING BEST VERSION 12/05/24
// export const login = (req, res) => {
//   const q = "SELECT * FROM users WHERE email = ?"; // Query by email

//   db.query(q, [req.body.email], (err, data) => { // Use email to query
//     if (err) return res.status(500).json(err); // Handle query errors
//     if (data.length === 0) return res.status(404).json("User not found!"); // User not found with that email

//     const user = data[0]; // Get the first result (assuming unique emails)
    
//     const checkPassword = bcrypt.compareSync(
//       req.body.password,
//       user.password
//     );
 
//     if (!checkPassword) {
//       return res.status(400).json("Wrong password or email!"); // Incorrect password
//     }

//     const token = jwt.sign({ id: user.id }, "secretkey"); // Sign JWT with user ID

//     const { password, ...others } = user; // Remove password from the response
//     console.log("User type:", user.userType); // Log the userType
//     res
//       .cookie("accessToken", token, {
//         httpOnly: true, // Cookie with the JWT
//       })
//       .status(200) // Successful login
//       .json({ ...others, userType: user.userType }); // Return data with userType
//   });

  
// };


export const login = (req, res) => {
  const userQuery = "SELECT * FROM users WHERE email = ?";
  const adminQuery = "SELECT * FROM admins WHERE email = ?";

  // First, try to authenticate using the users table
  db.query(userQuery, [req.body.email], (userErr, userData) => {
    if (userErr) {
      return res.status(500).json(userErr); // Handle query errors
    }
    
    if (userData.length > 0) {
      const user = userData[0];
      const checkUserPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      
      if (checkUserPassword) {
        const token = jwt.sign({ id: user.id }, "secretkey");
        const { password, ...others } = user;
        console.log("User type:", user.userType);
        return res
          .cookie("accessToken", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ ...others, userType: user.userType });
      }
    }

    // If authentication using the users table fails, try the admins table
    db.query(adminQuery, [req.body.email], (adminErr, adminData) => {
      if (adminErr) {
        return res.status(500).json(adminErr); // Handle query errors
      }
      
      if (adminData.length > 0) {
        const admin = adminData[0];
        const checkAdminPassword = bcrypt.compareSync(
          req.body.password,
          admin.password
        );
        
        if (checkAdminPassword) {
          const token = jwt.sign({ id: admin.id }, "secretkey");
          const { password, ...others } = admin;
          console.log("User type: admin");
          return res
            .cookie("accessToken", token, {
              httpOnly: true,
            })
            .status(200)
            .json({ ...others, userType: "admin" });
        }
      }

      // If authentication using both users and admins tables fails
      return res.status(400).json("Wrong password or email!");
    });
  });
};



// // Function to hash the password
// const hashPassword = (password) => {
//   return bcrypt.hashSync(password, 10); // Hash the password with salt rounds of 10
// };

// // Example query to insert data into the admins table
// export const addAdmin = (req, res) => {
//   const { email, password } = req.body;
//   const hashedPassword = hashPassword(password); // Hash the password before inserting
  
//   const query = "INSERT INTO admins (email, password) VALUES (?, ?)";
//   db.query(query, [email, hashedPassword], (err, result) => {
//     if (err) {
//       return res.status(500).json(err); // Handle query errors
//     }
    
//     return res.status(200).json("Admin added successfully!"); // Successful insertion
//   });
// };






// NNNNEEEEWWWW COOODDEEEEE
// export const register = (req, res) => {
//   const { username, email, password, name, role } = req.body; // Assuming "role" is provided from the frontend to distinguish between student and recruiter
  
//   // Check if user already exists by username
//   const queryCheckUsername = "SELECT * FROM users WHERE username = ?";
//   db.query(queryCheckUsername, [username], (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: 'Database error', err });
//     }
//     if (data.length > 0) {
//       return res.status(409).json({ message: 'Username already exists!' });
//     }
    
//     // Hash the password
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     if (role === "student") {
//       // Check in `unidomains` if the provided email and password match
//       const queryCheckUniDomain = "SELECT * FROM unidomains WHERE uniEmail = ? AND uniPass = ?";
//       const hashedUniPassword = bcrypt.hashSync(password, salt);



//       db.query(queryCheckUniDomain, [email, hashedUniPassword], (err, data) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error', err });
//         }
        
//         if (data.length === 0) {
//           return res.status(404).json({ message: 'Email and password do not match with unidomains!' });
//         }
        
//         // Insert new user as "student"
//         const queryInsertStudent = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?)";
//         const values = [username, email, hashedPassword, name, "student"];
        
//         db.query(queryInsertStudent, [values], (err, data) => {
//           if (err) {
//             return res.status(500).json({ message: 'Database error', err });
//           }
//           return res.status(200).json({ message: 'User registered as student!' });
//         });
//       });

//     } else if (role === "recruiter") {
//       // Insert new user as "recruiter"
//       const queryInsertRecruiter = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?)";
//       const values = [username, email, hashedPassword, name, "recruiter"];
      
//       db.query(queryInsertRecruiter, [values], (err, data) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error', err });
//         }
//         return res.status(200).json({ message: 'User registered as recruiter!' });
//       });

//     } else {
//       return res.status(400).json({ message: 'Invalid role provided!' });
//     }
//   });
// };




// new working code sending correct data of stu and rec
// export const register = (req, res) => {
//   const { username, email, password, name, role } = req.body;
  
//   // Check if a user with the same username already exists
//   const queryCheckUsername = "SELECT * FROM users WHERE username = ?";
//   db.query(queryCheckUsername, [username], (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: 'Database error', error: err });
//     }
//     if (data.length > 0) {
//       return res.status(409).json({ message: 'Username already exists!' });
//     }

//     // Hash the user's entered password
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     if (role === "student") {
//       // Check in `unidomains` for a match by email
//       const queryCheckUniDomain = "SELECT * FROM unidomains WHERE uniEmail = ?";
      
//       db.query(queryCheckUniDomain, [email], (err, data) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error', error: err });
//         }

//         if (!data || data.length === 0) {
//           return res.status(404).json({ message: 'Email not found in unidomains!' });
//         }

//         // Compare the stored hashed password with the entered password
//         const storedHashedPassword = data[0].uniPass; // The hashed password from the `unidomains` table
//         const isPasswordMatch = bcrypt.compareSync(password, storedHashedPassword);

//         if (!isPasswordMatch) {
//           return res.status(404).json({ message: 'Email and password do not match with unidomains!' });
//         }

//         // Insert new user as "student" into the `users` table if passwords match

// const queryInsertStudent = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?, ?, ?, ?, ?)";

// // Ensure the `values` array has the correct number of elements
// const values = [username, email, hashedPassword, name, "student"];

// // Execute the corrected query
// db.query(queryInsertStudent, values, (err, result) => {
//   if (err) {
//     console.error("Database error:", err); // Log the error for debugging
//     return res.status(500).json({ message: "Database error", error: err });
//   }
//   return res.status(200).json({ message: "User registered as student!" });
// });

        

//       });

//     } else if (role === "recruiter") {
//       // Insert new user as "recruiter"
//       const queryInsertRecruiter = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?, ?, ?, ?, ?)";
//       const values = [username, email, hashedPassword, name, "recruiter"];
      
//       db.query(queryInsertRecruiter, [values], (err, data) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error', error: err });
//         }
//         return res.status(200).json({ message: 'User registered as recruiter!' });
//       });

//     } else {
//       return res.status(400).json({ message: 'Invalid role provided!' });
//     }
//   });
// };



// GOOD CODE 05 11
// export const register = (req, res) => {
//   const { username, email, password, name, role } = req.body;

//   // Check if a user with the same username already exists
//   const queryCheckUsername = "SELECT * FROM users WHERE username = ?";
//   db.query(queryCheckUsername, [username], (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: 'Database error', error: err });
//     }
//     if (data.length > 0) {
//       return res.status(409).json({ message: 'Username already exists!' });
//     }

//     // Hash the password for secure storage
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     if (role === "student") {
//       // Check in `unidomains` for a match by email
//       const queryCheckUniDomain = "SELECT * FROM unidomains WHERE uniEmail = ?";
      
//       db.query(queryCheckUniDomain, [email], (err, uniData) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error', error: err });
//         }

//         if (uniData.length === 0) {
//           return res.status(404).json({ message: 'Email not found in unidomains!' });
//         }

//         // Compare the stored hashed password with the user's entered password
//         const storedHashedPassword = uniData[0].uniPass;
//         const isPasswordMatch = bcrypt.compareSync(password, storedHashedPassword);

//         if (!isPasswordMatch) {
//           return res.status(404).json({ message: 'Email and password do not match with unidomains!' });
//         }

//         // Insert new user with `userType` as "student"
//         const queryInsertStudent = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?, ?, ?, ?, ?)";
//         const values = [username, email, hashedPassword, name, "student"];

//         db.query(queryInsertStudent, values, (err, result) => {
//           if (err) {
//             console.error("Database error:", err);
//             return res.status(500).json({ message: "Database error", error: err });
//           }
//           return res.status(200).json({ message: "User registered as student!" });
//         });
//       });

//     } else if (role === "recruiter") {
//       // Insert new user with `userType` as "recruiter"
//       const queryInsertRecruiter = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?, ?, ?, ?, ?)";
//       const values = [username, email, hashedPassword, name, "recruiter"];

//       db.query(queryInsertRecruiter, values, (err, result) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error', error: err });
//         }
//         return res.status(200).json({ message: 'User registered as recruiter!' });
//       });

//     } else if (role === "admin") {
//       // Insert new user with `userType` as "admin"
//       const queryInsertAdmin = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?, ?, ?, ?, ?)";
//       const values = [username, email, hashedPassword, name, "admin"];

//       db.query(queryInsertAdmin, values, (err, result) => {
//         if (err) {
//           return res.status(500).json({ message: 'Database error', error: err });
//         }
//         return res.status(200).json({ message: 'User registered as admin!' });
//       });

//     } else {
//       return res.status(400).json({ message: 'Invalid role provided!' });
//     }
//   });
// };




// SIGNING UP AND SENDING CORRECT USERTYPE AND 
// USERID TO STU AND REC TBLE AS FOREIGN KEY
export const register = (req, res) => {
  const { username, email, password, name, role } = req.body;




  // Check if a user with the same email already exists
  const queryCheckEmail = "SELECT * FROM users WHERE email = ?";
  db.query(queryCheckEmail, [email], (err, emailData) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (emailData.length > 0) {
      console.log("User with this email already exists!");
      return res.status(409).json({ message: 'User with this email already exists!' });
      
    }



  // // Check if a user with the same username already exists
  // const queryCheckUsername = "SELECT * FROM users WHERE username = ?";
  // db.query(queryCheckUsername, [username], (err, data) => {
  //   if (err) {
  //     return res.status(500).json({ message: 'Database error', error: err });
  //   }
  //   if (data.length > 0) {
  //     return res.status(409).json({ message: 'Username already exists!' });
  //   }


    // Hash the password for secure storage
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    if (role === "student") {
      // Check in `unidomains` for a match by email
      const queryCheckUniDomain = "SELECT * FROM unidomains WHERE uniEmail = ?";
      
      db.query(queryCheckUniDomain, [email], (err, uniData) => {
        if (err) {
          return res.status(500).json({ message: 'Database error', error: err });
        }

        if (uniData.length === 0) {
          return res.status(404).json({ message: 'Email not found in unidomains!' });
        }

        // Compare the stored hashed password with the user's entered password
        const storedHashedPassword = uniData[0].uniPass;
        const isPasswordMatch = bcrypt.compareSync(password, storedHashedPassword);

        if (!isPasswordMatch) {
          return res.status(404).json({ message: 'Email and password do not match with unidomains!' });
        }

        // Insert new user with `userType` as "student"
        const queryInsertStudent = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?, ?, ?, ?, ?)";
        const values = [username, email, hashedPassword, name, "student"];

        db.query(queryInsertStudent, values, (err, result) => {
          if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ message: "Database error", error: err });
          }

          const userId = result.insertId; // Get the ID of the inserted user

          // Insert the user ID into the students table
          const queryInsertStudentId = "INSERT INTO students (`FK_userIDStudent`) VALUES (?)";
          db.query(queryInsertStudentId, [userId], (err, result) => {
            if (err) {
              console.error("Database error:", err);
              return res.status(500).json({ message: "Database error", error: err });
            }
            return res.status(200).json({ message: "User registered as student!" });
          });
        });
      });

    } else if (role === "recruiter") {
      // Insert new user with `userType` as "recruiter"
      const queryInsertRecruiter = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?, ?, ?, ?, ?)";
      const values = [username, email, hashedPassword, name, "recruiter"];

      db.query(queryInsertRecruiter, values, (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Database error', error: err });
        }

        const userId = result.insertId; // Get the ID of the inserted user

        // Insert the user ID into the recruiters table
        const queryInsertRecruiterId = "INSERT INTO recruiters (`FK_userIDRecruiter`) VALUES (?)";
        db.query(queryInsertRecruiterId, [userId], (err, result) => {
          if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ message: "Database error", error: err });
          }
          return res.status(200).json({ message: "User registered as recruiter!" });
        });
      });

    } 
    
    // else if (role === "admin") {
    //   // Insert new user with `userType` as "admin"
    //   const queryInsertAdmin = "INSERT INTO users (`username`, `email`, `password`, `name`, `userType`) VALUES (?, ?, ?, ?, ?)";
    //   const values = [username, email, hashedPassword, name, "admin"];

    //   db.query(queryInsertAdmin, values, (err, result) => {
    //     if (err) {
    //       return res.status(500).json({ message: 'Database error', error: err });
    //     }

    //     const userId = result.insertId; // Get the ID of the inserted user

    //     // Insert the user ID into the admin table
    //     const queryInsertAdminId = "INSERT INTO admins (`FK_userIDAdmin`) VALUES (?)";
    //     db.query(queryInsertAdminId, [userId], (err, result) => {
    //       if (err) {
    //         console.error("Database error:", err);
    //         return res.status(500).json({ message: "Database error", error: err });
    //       }
    //       return res.status(200).json({ message: "User registered as admin!" });
    //     });
    //   });

    // } 
    
    
    else {
      return res.status(400).json({ message: 'Invalid role provided!' });
    }
  });
};




















// new login 
// PREVIOUS LOGIN API
// export const login = (req, res) => {
//   // First, try to find the user in the students table.
//   let q = "SELECT * FROM students WHERE uniEmail = ?";

//   db.query(q, [req.body.email], (err, data) => {
//     if (err) {
//       return res.status(500).json(err);
//     }

//     if (data.length > 0) {
//       const checkPassword = bcrypt.compareSync(req.body.password, data[0].uniPass);
//       if (!checkPassword) {
//         return res.status(400).json("Wrong password!");
//       }

//       // Student found, continue with login process...
//       const token = jwt.sign({ id: data[0].id, type: "student" }, "secretkey");
//       const { uniPass, ...others } = data[0];
//       return res.cookie("accessToken", token, { httpOnly: true }).status(200).json(others);

//     } else {
//       // If not found in students, try the recruiters table.
//       q = "SELECT * FROM recruiters WHERE RecEmail = ?";

//       db.query(q, [req.body.email], (err, data) => {
//         if (err) {
//           return res.status(500).json(err);
//         }

//         if (data.length === 0) {
//           // If not found in recruiters, try the admins table.
//           q = "SELECT * FROM admins WHERE adminEmail = ?";

//           db.query(q, [req.body.email], (err, data) => {
//             if (err) {
//               return res.status(500).json(err);
//             }

//             if (data.length === 0) {
//               return res.status(404).json("User not found!");
//             }

//             const checkPassword = bcrypt.compareSync(req.body.password, data[0].adminPassword);
//             if (!checkPassword) {
//               return res.status(400).json("Wrong password!");
//             }

//             // Admin found, continue with login process...
//             const token = jwt.sign({ id: data[0].idadmins, type: "admin" }, "secretkey");
//             const { adminPassword, ...others } = data[0];
//             return res.cookie("accessToken", token, { httpOnly: true }).status(200).json(others);

//           });

//         } else {
//           const checkPassword = bcrypt.compareSync(req.body.password, data[0].RecPass);
//           if (!checkPassword) {
//             return res.status(400).json("Wrong password!");
//           }

//           // Recruiter found, continue with login process...
//           const token = jwt.sign({ id: data[0].id, type: "recruiter" }, "secretkey");
//           const { RecPass, ...others } = data[0];
//           return res.cookie("accessToken", token, { httpOnly: true }).status(200).json(others);

//         }
//       });
//     }
//   });
// };


// login is being done correctly using username and pass
// should be done using email and pass?
//backend login tested and working with username and pass

// LOGIN USING USERNAME AND PASS
// export const login = (req, res) => {
//   // Query to fetch user by username
//   const q = "SELECT * FROM users WHERE username = ?";

//   // Execute the query
//   db.query(q, [req.body.username], (err, data) => {
//     if (err) {
//       // Return a 500 error in case of database issues
//       return res.status(500).json(err);
//     }

//     if (data.length === 0) {
//       // If no user is found, return a 404 error
//       return res.status(404).json("User not found!");
//     }

//     // Compare the provided password with the stored hashed password
//     const checkPassword = bcrypt.compareSync(
//       req.body.password,
//       data[0].password
//     );

//     if (!checkPassword) {
//       // Return a 400 error if the password doesn't match
//       return res.status(400).json("Wrong password or username!");
//     }

//     // Generate a JWT token with the user's ID
//     const token = jwt.sign({ id: data[0].id, userType: data[0].userType }, "secretkey");

//     // Extract userType and other data (excluding the password)
//     const { password, ...others } = data[0];
//     const userType = data[0].userType;

//     // Set an HTTP-only cookie for token authentication
//     res
//       .cookie("accessToken", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ ...others, userType }); // Return the user data along with userType
//   });
// };












// export const login = (req, res) => {
//   // Query to fetch user by email
//   const q = "SELECT * FROM users WHERE email = ?";

//   // Execute the query with the provided email
//   db.query(q, [req.body.email], (err, data) => {
//     if (err) {
//       // Return a 500 error in case of database issues
//       console.error("Database error:", err);
//       return res.status(500).json({ message: "Database error", error: err });
//     }

//     if (data.length === 0) {
//       // If no user is found with the given email
//       return res.status(404).json({ message: "User not found!" });
//     }

//     // Compare the provided password with the stored hashed password
//     const checkPassword = bcrypt.compareSync(
//       req.body.password,
//       data[0].password
//     );

//     if (!checkPassword) {
//       // Return a 401 error if the password doesn't match
//       return res.status(401).json({ message: "Invalid email or password!" });
//     }

//     // Generate a JWT token with the user's ID and userType
//     const token = jwt.sign(
//       { id: data[0].id, userType: data[0].userType },
//       "secretkey", // Replace with your secret key
//       { expiresIn: "1h" } // Token expiration time
//     );

//     // Extract userType and other data (excluding the password)
//     const { password, ...others } = data[0];

//     // Set an HTTP-only cookie for token authentication
//     res
//       .cookie("accessToken", token, {
//         httpOnly: true, // Secure the cookie
//       })
//       .status(200)
//       .json({ ...others, userType }); // Return the user data along with userType
//   });
// };
















export const logout = (req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")
};
