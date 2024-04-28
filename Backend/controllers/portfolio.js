// controllers/portfolio.js

import { db } from "../connect.js";
import jwt from "jsonwebtoken";




export const saveAboutData = (req, res) => {
    const userId = req.params.userId;
    console.log(userId);

    const {
        fullname,
        address,
        contact_number,
        email,
        about_paragraph,
        facebookLink,
        twitterLink,
        githubLink,
        youtubeLink,
        linkedinLink
    } = req.body;

    // Check if userId already exists in portfolio table
    const portfolioCheckQuery = `
        SELECT aboutID FROM portfolio WHERE userId = ?
    `;
    db.query(portfolioCheckQuery, [userId], (err, rows) => {
        if (err) {
            console.error('Error checking userId in portfolio table:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (rows.length > 0) {
            // UserId exists in portfolio table, update corresponding row in about table
            const aboutId = rows[0].aboutID;
            const updateAboutQuery = `
                UPDATE about SET
                fullname = ?,
                address = ?,
                contact_number = ?,
                email = ?,
                about_paragraph = ?,
                facebookLink = ?,
                twitterLink = ?,
                githubLink = ?,
                youtubeLink = ?,
                linkedinLink = ?
                WHERE aboutID = ?
            `;
            db.query(
                updateAboutQuery, 
                [
                    fullname,
                    address,
                    contact_number,
                    email,
                    about_paragraph,
                    facebookLink,
                    twitterLink,
                    githubLink,
                    youtubeLink,
                    linkedinLink,
                    aboutId
                ],
                (err, result) => {
                    if (err) {
                        console.error('Error updating about data in about table:', err);
                        return res.status(500).json({ message: 'Internal server error' });
                    }
                    console.log('About section data updated successfully');
                    res.status(200).json({ message: 'About section data updated successfully' });
                }
            );
        } else {
            // UserId does not exist in portfolio table, proceed with inserting new data
            // Start a transaction
            db.beginTransaction(function(err) {
                if (err) {
                    console.error('Error starting transaction:', err);
                    return res.status(500).json({ message: 'Internal server error' });
                }

                // about insert
                const aboutQuery = `
                    INSERT INTO about (fullname, address, contact_number, email, about_paragraph, facebookLink, twitterLink, githubLink, youtubeLink, linkedinLink )
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `;

                db.query(aboutQuery, [fullname, address, contact_number, email, about_paragraph, facebookLink, twitterLink, githubLink, youtubeLink, linkedinLink], (err, result) => {
                    if (err) {
                        console.error('Error saving About section data:', err);
                        return db.rollback(function() {
                            res.status(500).json({ message: 'Internal server error' });
                        });
                    }

                    // Retrieve the auto-generated aboutID
                    const aboutId = result.insertId;

                    // Insert aboutID into the portfolio table along with userId
                    const portfolioQuery = `
                        INSERT INTO portfolio (userId, aboutID) VALUES (?, ?)
                    `;
                    db.query(portfolioQuery, [userId, aboutId], (err, result) => {
                        if (err) {
                            console.error('Error saving About ID in Portfolio table:', err);
                            return db.rollback(function() {
                                res.status(500).json({ message: 'Internal server error' });
                            });
                        }

                        // Retrieve the auto-generated portfolioID
                        const portfolioId = result.insertId;

                        // Update the about table with portfolioID
                        const updateAboutQuery = `
                            UPDATE about SET portfolioID = ? WHERE aboutID = ?;
                        `;
                        db.query(updateAboutQuery, [portfolioId, aboutId], (err, result) => {
                            if (err) {
                                console.error('Error updating About table with Portfolio ID:', err);
                                return db.rollback(function() {
                                    res.status(500).json({ message: 'Internal server error' });
                                });
                            }

                            // Commit the transaction
                            db.commit(function(err) {
                                if (err) {
                                    console.error('Error committing transaction:', err);
                                    return db.rollback(function() {
                                        res.status(500).json({ message: 'Internal server error' });
                                    });
                                }

                                console.log('Transaction committed successfully');
                                res.status(200).json({ message: 'About section data and About ID saved successfully in Portfolio table' });
                            });
                        });
                    });
                });
            });
        }
    });
};



export const getAboutData = (req, res) => {
    const userId = req.params.userId;
    console.log("user id in get: ", userId)

    // SQL query to fetch About section data based on userId
    const q = `
        SELECT a.fullname, a.address, a.contact_number, a.email, a.about_paragraph, a.facebookLink, a.twitterLink, a.githubLink,a.youtubeLink, a.linkedinLink
        FROM about a
        JOIN portfolio p ON a.aboutID = p.aboutID
        WHERE p.userId = ?
        LIMIT 1
    `;

    // Execute the query to fetch the About section data
    db.query(q, [userId], (err, result) => {
        if (err) {
            console.error('Error fetching About section data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'About section data not found for the given user' });
        }

        const aboutData = result[0];
        res.status(200).json(aboutData);
    });
};




export const checkUserAboutid = (req, res) => {
    const userId = req.params.userId;

    // SQL query to check if userId exists in the portfolio table and get the corresponding aboutID
    const q = `
        SELECT aboutID
        FROM portfolio
        WHERE userId = ?
        LIMIT 1
    `;

    // Execute the query to check user's portfolio
    db.query(q, [userId], (err, result) => {
        if (err) {
            console.error('Error checking user portfolio:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.length === 0) {
            // If no matching userId is found in the portfolio table
            return res.status(404).json({ message: 'User portfolio not found' });
        }

        // If userId matches, get the corresponding aboutID
        const userAboutId = result[0].aboutID;
        res.status(200).json({ userAboutId });
        console.log("about id user: ", userAboutId)
    });
};









// POST API to save education data
// export const saveEducationData = (req, res) => {
//     const userId = req.params.userId;

//     const educationData = req.body;

//     // Check if userId already exists in portfolio table
//     const portfolioCheckQuery = `
//         SELECT educationID FROM portfolio WHERE userId = ?
//     `;
//     db.query(portfolioCheckQuery, [userId], (err, rows) => {
//         if (err) {
//             console.error('Error checking userId in portfolio table:', err);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//         if (rows.length > 0) {
//             // UserId exists in portfolio table, update corresponding row in education table
//             const educationId = rows[0].educationID;
//             const updateEducationQuery = `
//                 UPDATE education SET
//                 universityName = ?,
//                 degreeType = ?,
//                 courseName = ?,
//                 cgpa = ?,
//                 degreeDate = ?
//                 WHERE educationID = ?
//             `;
//             db.query(
//                 updateEducationQuery,
//                 [
//                     educationData.universityName,
//                     educationData.degreeType,
//                     educationData.courseName,
//                     educationData.cgpa,
//                     educationData.degreeDate,
//                     educationId
//                 ],
//                 (err, result) => {
//                     if (err) {
//                         console.error('Error updating education data in education table:', err);
//                         return res.status(500).json({ message: 'Internal server error' });
//                     }
//                     console.log('Education data updated successfully');
//                     res.status(200).json({ message: 'Education data updated successfully' });
//                 }
//             );
//         } else {
//             // UserId does not exist in portfolio table, proceed with inserting new data
//             // Start a transaction
//             db.beginTransaction(function(err) {
//                 if (err) {
//                     console.error('Error starting transaction:', err);
//                     return res.status(500).json({ message: 'Internal server error' });
//                 }

//                 // Insert new education entry in the education table
//                 const insertEducationQuery = `
//                     INSERT INTO education (universityName, degreeType, courseName, cgpa, degreeDate, portfolioID)
//                     VALUES (?, ?, ?, ?, ?, (SELECT portfolioID FROM portfolio WHERE userId = ?))
//                 `;
//                 db.query(
//                     insertEducationQuery,
//                     [
//                         educationData.universityName,
//                         educationData.degreeType,
//                         educationData.courseName,
//                         educationData.cgpa,
//                         educationData.degreeDate,
//                         userId
//                     ],
//                     (err, result) => {
//                         if (err) {
//                             console.error('Error inserting education data:', err);
//                             return db.rollback(function() {
//                                 res.status(500).json({ message: 'Internal server error' });
//                             });
//                         }

//                         // Retrieve the auto-generated educationID
//                         const educationId = result.insertId;

//                         // Commit the transaction
//                         db.commit(function(err) {
//                             if (err) {
//                                 console.error('Error committing transaction:', err);
//                                 return db.rollback(function() {
//                                     res.status(500).json({ message: 'Internal server error' });
//                                 });
//                             }

//                             console.log('Transaction committed successfully');
//                             res.status(200).json({ message: 'Education data saved successfully' });
//                         });
//                     }
//                 );
//             });
//         }
//     });
// };
// GGGGGOOODDDD CODE



























export const saveEducationData = (req, res) => {
    const userId = req.params.userId;
    const educationItems = req.body.educationItems;

    // Check if the user exists in the portfolio table
    const portfolioCheckQuery = `
        SELECT * FROM portfolio WHERE userID = ?
    `;
    db.query(portfolioCheckQuery, [userId], (err, rows) => {
        if (err) {
            console.error('Error checking user portfolio:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User portfolio not found' });
        }

        const portfolioId = rows[0].portfolioID;

        // Start a transaction
        db.beginTransaction(function (err) {
            if (err) {
                console.error('Error starting transaction:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            // Loop through each education item and insert/update the data
            educationItems.forEach(item => {
                const { educationSectionID, universityName, degreeType, courseName, cgpa, degreeDate } = item;

                // Check if the education section already exists for this user
                const educationCheckQuery = `
                    SELECT * FROM education WHERE portfolioID = ? AND educationSectionID = ?
                `;
                db.query(educationCheckQuery, [portfolioId, educationSectionID], (err, rows) => {
                    if (err) {
                        console.error('Error checking education section:', err);
                        return res.status(500).json({ message: 'Internal server error' });
                    }

                    if (rows.length > 0) {
                        // If the education section exists, update the data
                        const updateEducationQuery = `
                            UPDATE education
                            SET universityName = ?, degreeType = ?, courseName = ?, cgpa = ?, degreeDate = ?
                            WHERE portfolioID = ? AND educationSectionID = ?
                        `;
                        db.query(
                            updateEducationQuery,
                            [universityName, degreeType, courseName, cgpa, degreeDate, portfolioId, educationSectionID],
                            (err, result) => {
                                if (err) {
                                    console.error('Error updating education data:', err);
                                    return res.status(500).json({ message: 'Internal server error' });
                                }
                                console.log('Education data updated successfully');
                            }
                        );
                    } else {
                        // If the education section does not exist, insert a new entry
                        const insertEducationQuery = `
                            INSERT INTO education (educationSectionID, universityName, degreeType, courseName, cgpa, degreeDate, portfolioID)
                            VALUES (?, ?, ?, ?, ?, ?, ?)
                        `;
                        db.query(
                            insertEducationQuery,
                            [educationSectionID, universityName, degreeType, courseName, cgpa, degreeDate, portfolioId],
                            (err, result) => {
                                if (err) {
                                    console.error('Error inserting education data:', err);
                                    return res.status(500).json({ message: 'Internal server error' });
                                }
                                console.log('Education data inserted successfully');
                                
                                // Get the auto-generated educationID
                                const educationId = result.insertId;

                                // Update the portfolio table with the educationID
                                const updatePortfolioQuery = `
                                    UPDATE portfolio
                                    SET educationID = ?
                                    WHERE portfolioID = ?
                                `;
                                db.query(
                                    updatePortfolioQuery,
                                    [educationId, portfolioId],
                                    (err, result) => {
                                        if (err) {
                                            console.error('Error updating portfolio with educationID:', err);
                                            return res.status(500).json({ message: 'Internal server error' });
                                        }
                                        console.log('Portfolio updated with educationID');
                                    }
                                );
                            }
                        );
                    }
                });
            });

            // Commit the transaction
            db.commit(function (err) {
                if (err) {
                    console.error('Error committing transaction:', err);
                    return res.status(500).json({ message: 'Internal server error' });
                }
                console.log('Transaction committed successfully');
                res.status(200).json({ message: 'Education data saved successfully' });
            });
        });
    });
};





















export const getEducationData = (req, res) => {
    const userId = req.params.userId; // Get the user ID from request parameters
    console.log("User ID in getEducationData:", userId);

    // SQL query to fetch education data based on userId
    const q = `
    SELECT 
        e.educationID,
        e.portfolioID,
        e.educationSectionID,
        e.universityName,
        e.degreeType,
        e.courseName,
        e.cgpa,
        e.degreeDate
    FROM 
        education e
    JOIN 
        portfolio p 
    ON 
        e.portfolioID = p.portfolioID
    WHERE 
        p.userID = ?
    `; // Corrected the comment error and ensured proper syntax
    

    // Execute the query with the provided userId
    db.query(q, [userId], (err, result) => {
        if (err) { // Error handling for SQL errors
            console.error('Error fetching education data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.length === 0) { // No data found for the given userId
            return res.status(404).json({ message: 'Education data not found for this user' });
        }

        res.status(200).json(result); // Send the fetched data to the client
    });
    
   
};






export const deleteEducationSection = async (req, res) => {
    const educationSectionID = req.params.educationSectionID;
    const userId = req.body.userId; // Get the userId from the frontend

    try {
        // Verify the section to be deleted belongs to the current user's portfolio
        const verifyQuery = `SELECT e.educationSectionID 
                             FROM education e 
                             JOIN portfolio p 
                             ON e.portfolioID = p.portfolioID 
                             WHERE e.educationSectionID = ? AND p.userID = ?`;
        
        const verifyResult = await db.query(verifyQuery, [educationSectionID, userId]);
        
        if (verifyResult.length === 0) { // Section doesn't belong to the current user
            return res.status(403).json({ message: 'Forbidden: Section does not belong to the current user' });
        }

        // Delete the education section
        const deleteQuery = `DELETE FROM education WHERE educationSectionID = ?`;
        const result = await db.query(deleteQuery, [educationSectionID]);

        if (result.affectedRows === 0) { // No record was deleted
            return res.status(404).json({ message: 'Education section not found' });
        }

        res.status(200).json({ message: 'Education section deleted successfully' });
    } catch (error) {
        console.error('Error deleting education section:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};













// og code

// export const getLastEducationSectionID = async (req, res) => {
//     // const userId = req.params.userId; 
//     // Get the user ID from the request parameters

//     const userId = req.query.userId;

//     console.log("userId is: ", userId)

//     try {
//         // Query to fetch the portfolioID and educationID for the given userId
//         const portfolioQuery = `
//             SELECT portfolioID, educationID
//             FROM portfolio
//             WHERE userID = ?
//         `;


//         const [portfolioResult] = await db.query(portfolioQuery, [userId], (err, result) => {
//             if (err) {
//                 console.error('Error fetching portfolio:', err);
//                 return res.status(500).json({ message: 'Internal server error' });
//             }
//             console.log("result : ", result)
//             return result;
            
//         });
        
//         // const [portfolioResult] = await db.query(portfolioQuery, [userId]);
        
//         console.log("portfolio result: ", [portfolioResult])
        
        
        
        
//         // console.log("portfolioid: ", portfolioID)
//         // console.log("educationid: ", educationID)





//         // Validate the query result
//         // if (!portfolioResult || portfolioResult.length === 0) {
//         //     console.error('Portfolio not found for this user:', portfolioResult); // Log the unexpected result
//         //     return res.status(404).json({ message: 'Portfolio not found for this user' });
//         // }

//         // const portfolioID = portfolioResult[0].portfolioID; // Get the portfolioID
//         // const educationID = portfolioResult[0].educationID; // Get the educationID
// TILL HERE DONE BELOW




//         // // Query to fetch the latest educationSectionID using the portfolioID and educationID
//         // const educationQuery = `
//         //     SELECT educationSectionID
//         //     FROM education
//         //     WHERE portfolioID = ? AND educationID = ?
//         // `;

//         // const [educationResult] = await db.query(educationQuery, [portfolioID, educationID]);

//         // console.log("educationsectionid: ", educationSectionID)

//         // // Validate the result and check if it contains the educationSectionID
//         // if (!educationResult || educationResult.length === 0) { // Handle empty or undefined result
//         //     console.error('No education section found for this portfolio:', educationResult);
//         //     return res.status(404).json({ message: 'No education section found for this portfolio' });
//         // }

//         // const educationSectionID = educationResult[0].educationSectionID; // Get the educationSectionID
//         // res.status(200).json({ educationSectionID }); // Return the fetched educationSectionID
    
    
    
//     } 
    
    
//     catch (error) {
//         console.error('Error fetching latest education section ID:', error); // Log any other errors
//         res.status(500).json({ message: 'Internal server error' });
//     }



// };

// og code







  

// working code that is storing ids and fetching correct educationsecitionid
// export const getLastEducationSectionID = (req, res) => {
//     const q1 = "SELECT portfolioID, educationID FROM portfolio WHERE userID = ?";
    
//     db.query(q1, [req.query.userId], (err, data) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
  
//       if (data.length === 0) {
//         return res.status(404).json({ error: "No data found for this userId" });
//       }
  
//       // Store the returned data in two variables
//       const returnedportfolioID = data[0].portfolioID;
//       const returnededucationID = data[0].educationID;
  
//       // Now fetch the educationSectionID using the previous variables
//       const q2 = "SELECT educationSectionID FROM education WHERE portfolioID = ? AND educationID = ?";
      
//       db.query(q2, [returnedportfolioID, returnededucationID], (err, data) => {
//         if (err) {
//           return res.status(500).json({ error: err.message });
//         }
  
//         if (data.length === 0) {
//           return res.status(404).json({ error: "No education section found for the provided portfolioID and educationID" });
//         }
  
//         // Return only the numeric educationSectionID
//         return res.status(200).json(data[0].educationSectionID);
//       });
//     });
//   };
  



export const getLastEducationSectionID = (req, res) => {
    const q1 = "SELECT portfolioID, educationID FROM portfolio WHERE userID = ?";
  
    db.query(q1, [req.query.userId], (err, data) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      if (data.length === 0) {
        return res.status(404).json({ error: "No data found for this userId" });
      }
  
      // Store the returned data in two variables
      const returnedportfolioID = data[0].portfolioID;
      const returnededucationID = data[0].educationID;
  
      // Now fetch the educationSectionID using the previous variables
      const q2 = "SELECT educationSectionID FROM education WHERE portfolioID = ? AND educationID = ?";
      
      db.query(q2, [returnedportfolioID, returnededucationID], (err, data) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
  
        if (data.length === 0) {
          return res.status(404).json({ error: "No education section found for the provided portfolioID and educationID" });
        }
  
        // Increment the educationSectionID by 1
        const incrementedEducationSectionID = data[0].educationSectionID + 1;
  
        // Return only the numeric value
        return res.status(200).json(incrementedEducationSectionID);
      });
    });
  };
  





















// code that is fetching and storing correct eduid and portfolio id
// export const getLastEducationSectionID = (req, res) => {
//     const q = "SELECT portfolioID, educationID FROM portfolio WHERE userID = ?";
//     db.query(q, [req.query.userId], (err, data) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
  
//       if (data.length === 0) {
//         return res.status(404).json({ error: "No data found for this userId" });
//       }
  
//       // Store the returned data in two variables
//       const returnedportfolioID = data[0].portfolioID;
//       const returnededucationID = data[0].educationID;

//       console.log("returnedportfolioID: ", returnedportfolioID);
//       console.log("returnededucationID: ", returnededucationID);
  
//       // Returning the data to the client
//       return res.status(200).json({
//         portfolioID: returnedportfolioID,
//         educationID: returnededucationID,
//       });
//     });
//   };
  
  








