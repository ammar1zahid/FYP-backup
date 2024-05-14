import React, { useEffect, useState } from 'react';

function AdminsTableCrud() {




    // const initialRows = [

    // ];

    // const [rows, setRows] = useState(initialRows);
    // const [editingIndex, setEditingIndex] = useState(-1);
    // const [newRow, setNewRow] = useState({ name: '', department: '', phone: '' });

    // const [isAdding, setIsAdding] = useState(false);

    // const handleAddRow = () => {
    //     setRows([...rows, newRow]);
    //     setNewRow({ name: '', department: '', phone: '' });
    //     setEditingIndex(rows.length); // Set the editingIndex to the index of the newly added row
    // };

    // const handleCancelAddRow = () => {
    //     setNewRow({ name: '', department: '', phone: '' });
    // };

    // const handleSaveRow = (index) => {
    //     const newRow = { ...rows[index] };
    //     // Save the row data here, you can send it to your backend or do something else
    //     setIsAdding(false);
    // };

    // const handleEditRow = (index) => {
    //     // Implement row editing functionality
    //     setEditingIndex(index);
        
    // };

    // const handleDeleteRow = (index) => {
    //     const updatedRows = [...rows];
    //     updatedRows.splice(index, 1);
    //     setRows(updatedRows);
    // };















const initialRows = [];

    const [rows, setRows] = useState(initialRows);
    const [editingIndex, setEditingIndex] = useState(-1);
    const [newRow, setNewRow] = useState({ email: '', password: '' });
    const [isAdding, setIsAdding] = useState(false);

    const handleAddRow = () => {
        setNewRow({ email: '', password: '' });
        setIsAdding(true);
        setEditingIndex(rows.length); // Set the editingIndex to the index of the newly added row
    };

    const handleCancelAddRow = () => {
        setNewRow({ email: '', password: '' });
        setIsAdding(false);
        setEditingIndex(-1);
    };

    const handleSaveRow = (index) => {
        const newAdmin = { ...newRow };

        // Make POST request to addAdmin API
        fetch('http://localhost:8800/api/adminwork/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAdmin),
        })
            .then(response => response.json())
            .then(data => {
                if (data === "Admin added successfully!") {
                    // Fetch the updated list of admins
                    fetch('http://localhost:8800/api/adminwork/getAllAdmins')
                        .then(response => response.json())
                        .then(data => {
                            setRows(data);
                            setNewRow({ email: '', password: '' });
                            setEditingIndex(-1);
                            setIsAdding(false);
                        })
                        .catch(error => console.error('Error fetching data:', error));
                } else {
                    console.error('Error adding admin:', data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };


    const handleEditRow = (index) => {
        setEditingIndex(index);
        setNewRow(rows[index]);
    };


// NEW CODE PIECE

const handleUpdateRow = (index) => {
    const updatedAdmin = { ...rows[index], ...newRow };

    // Make POST request to updateAdmin API
    fetch('http://localhost:8800/api/adminwork/updateAdmin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAdmin),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data === "Admin updated successfully!") {
                // Fetch the updated list of admins
                fetch('http://localhost:8800/api/adminwork/getAllAdmins')
                    .then(response => response.json())
                    .then(data => {
                        setRows(data);
                        setNewRow({ email: '', password: '' });
                        setEditingIndex(-1);
                    })
                    .catch(error => console.error('Error fetching data:', error));
            } else {
                console.error('Error updating admin:', data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
// NEW CODE PIECE













    const handleDeleteRow = (index) => {
        const updatedRows = [...rows];
        updatedRows.splice(index, 1);
        setRows(updatedRows);
    };









    useEffect(() => {
        fetch('http://localhost:8800/api/adminwork/getAllAdmins')
            .then(response => response.json())
            .then(data => setRows(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    






    

  return (

    <>
    <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Bootstrap Table with Add and Delete Row Feature</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\nbody {\n    color: #404E67;\n    background: #F5F7FA;\n    font-family: 'Open Sans', sans-serif;\n}\n.table-wrapper {\n    width: 700px;\n    margin: 30px auto;\n    background: #fff;\n    padding: 20px;\t\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {\n    padding-bottom: 10px;\n    margin: 0 0 10px;\n}\n.table-title h2 {\n    margin: 6px 0 0;\n    font-size: 22px;\n}\n.table-title .add-new {\n    float: right;\n    height: 30px;\n    font-weight: bold;\n    font-size: 12px;\n    text-shadow: none;\n    min-width: 100px;\n    border-radius: 50px;\n    line-height: 13px;\n}\n.table-title .add-new i {\n    margin-right: 4px;\n}\ntable.table {\n    table-layout: fixed;\n}\ntable.table tr th, table.table tr td {\n    border-color: #e9e9e9;\n}\ntable.table th i {\n    font-size: 13px;\n    margin: 0 5px;\n    cursor: pointer;\n}\ntable.table th:last-child {\n    width: 100px;\n}\ntable.table td a {\n    cursor: pointer;\n    display: inline-block;\n    margin: 0 5px;\n    min-width: 24px;\n}    \ntable.table td a.add {\n    color: #27C46B;\n}\ntable.table td a.edit {\n    color: #FFC107;\n}\ntable.table td a.delete {\n    color: #E34724;\n}\ntable.table td i {\n    font-size: 19px;\n}\ntable.table td a.add i {\n    font-size: 24px;\n    margin-right: -1px;\n    position: relative;\n    top: 3px;\n}    \ntable.table .form-control {\n    height: 32px;\n    line-height: 32px;\n    box-shadow: none;\n    border-radius: 2px;\n}\ntable.table .form-control.error {\n    border-color: #f50000;\n}\ntable.table td .add {\n    display: none;\n}\n" }} />
  



<div className="container-lg">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Admin <b>Details</b></h2></div>
                            <div className="col-sm-4">
                                <button type="button" className="btn btn-info add-new" onClick={handleAddRow}>
                                    <i className="fa fa-plus" /> Add New
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>ADMIN ID</th>
                                <th style={{ width: '25%' }}>EMAIL</th>
                                <th style={{ width: '25%' }}>PASSWORD</th>
                                <th style={{ width: '25%' }}>ACTIONS</th>
                            </tr>
                        </thead>





{/* 
<tbody>
    {rows.map((row, index) => (
        <tr key={index}>
            <td>{editingIndex === index ? <input type="text" defaultValue={row.idadmins} style={{ width: '100%' }}/> : row.idadmins}</td>
            <td>{editingIndex === index ? <input type="text" defaultValue={row.email} style={{ width: '100%' }}/> : row.email}</td>
            

            <td>
    {editingIndex === index ? (
        <input type="text" defaultValue={row.password} style={{ width: '100%' }}/>
    ) : (
        <span style={{ display: 'inline-block', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            {row.password.replace(/./g, '*')}
        </span>
    )}
</td>
            <td>
                {editingIndex === index ? (
                    <React.Fragment>
                        <button className="btn btn-success" onClick={() => handleSaveRow(index)}>Save</button>
                        <button className="btn btn-secondary" onClick={() => setEditingIndex(-1)}>Cancel</button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <a className="edit" title="Edit" ><i className="material-icons" onClick={() => handleEditRow(index)} ></i></a>
                        <a className="delete" title="Delete" ><i className="material-icons" onClick={() => handleDeleteRow(index)} ></i></a>
                    </React.Fragment>
                )}
            </td>
        </tr>
    ))}
</tbody> */}




{/* GOOD CODE */}
<tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.idadmins}</td>
                                        <td>{row.email}</td>
                                        <td>
                                            <span style={{ display: 'inline-block', width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                                {row.password.replace(/./g, '*')}
                                            </span>
                                        </td>
                                        <td>
                                            {editingIndex === index ? (
                                                <React.Fragment>
                                                    <button className="btn btn-success" onClick={() => handleSaveRow(index)}>Save</button>
                                                    <button className="btn btn-secondary" onClick={() => setEditingIndex(-1)}>Cancel</button>
                                                </React.Fragment>
                                            ) : (
                                                <React.Fragment>
                                                    <a className="edit" title="Edit"><i className="material-icons" onClick={() => handleEditRow(index)}></i></a>
                                                    <a className="delete" title="Delete"><i className="material-icons" onClick={() => handleDeleteRow(index)}></i></a>
                                                </React.Fragment>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {isAdding && (
                                    <tr>
                                        <td>New</td>
                                        <td>
                                            <input
                                                type="text"
                                                value={newRow.email}
                                                onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
                                                style={{ width: '100%' }}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="password"
                                                value={newRow.password}
                                                onChange={(e) => setNewRow({ ...newRow, password: e.target.value })}
                                                style={{ width: '100%' }}
                                            />
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => handleSaveRow(editingIndex)}>Save</button>
                                            <button className="btn btn-secondary" onClick={handleCancelAddRow}>Cancel</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>



{/* EDIT PART CODE, NOT WORKING PROPERLY */}

{/* <tbody>
                                {rows.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.idadmins}</td>
                                        <td>{editingIndex === index ? <input type="text" defaultValue={row.email} onChange={(e) => setNewRow({ ...newRow, email: e.target.value })} /> : row.email}</td>
                                        <td>{editingIndex === index ? <input type="text" defaultValue={row.password} onChange={(e) => setNewRow({ ...newRow, password: e.target.value })} /> : '******'}</td>
                                        <td>
                                            {editingIndex === index ? (
                                                <>
                                                    <a className="add" onClick={() => handleUpdateRow(index)} title="Save" data-toggle="tooltip"><i className="material-icons">save</i></a>
                                                    <a className="cancel" onClick={() => setEditingIndex(-1)} title="Cancel" data-toggle="tooltip"><i className="material-icons">cancel</i></a>
                                                </>
                                            ) : (
                                                <>
                                                    <a className="edit" onClick={() => handleEditRow(index)} title="Edit" data-toggle="tooltip"><i className="material-icons">edit</i></a>
                                                    <a className="delete" onClick={() => handleDeleteRow(index)} title="Delete" data-toggle="tooltip"><i className="material-icons">delete</i></a>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {isAdding && (
                                    <tr>
                                        <td>{rows.length + 1}</td>
                                        <td><input type="text" value={newRow.email} onChange={(e) => setNewRow({ ...newRow, email: e.target.value })} /></td>
                                        <td><input type="text" value={newRow.password} onChange={(e) => setNewRow({ ...newRow, password: e.target.value })} /></td>
                                        <td>
                                            <a className="add" onClick={() => handleSaveRow()} title="Save" data-toggle="tooltip"><i className="material-icons">save</i></a>
                                            <a className="cancel" onClick={handleCancelAddRow} title="Cancel" data-toggle="tooltip"><i className="material-icons">cancel</i></a>
                                        </td>
                                    </tr>
                                )}
                            </tbody> */}
                            










                    </table>
                </div>
            </div>
        </div>

</div>

</>
  )
}

export default AdminsTableCrud