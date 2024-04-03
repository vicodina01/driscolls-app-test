import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function UsersList() {
  const [users, setUsers] = useState([]);
  const { t } = useTranslation();

  async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:3002/users');
      const data = await response.json();
      console.log('Download complete', data);
      setUsers(data);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  }

  useEffect(() => fetchUsers, []);

  async function handleDelete(id){
    const confirm = window.confirm("Would you like to delete the user?");
    if(confirm){
      try {
        const response = await fetch('http://localhost:3002/users/' + id, {
          method: 'DELETE',
        });
        const result = await response.json();
        fetchUsers();
        console.log('Success Deleted:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  return (
    <div className='container'>
      <h3>{t("users_list")}</h3>
        <Link to='/users/create' className="btn btn-success me-2">
          {t("create")}
        </Link>
        <button
          onClick={() => fetchUsers()}
          type="button"
          className="btn btn-outline-success me-2"
        >
          {t("refresh")}
        </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">{t("name")}</th>
            <th scope="col">{t("email")}</th>
            <th scope="col">{t("number")}</th>
            <th scope="col">{t("actions")}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td style={{ width: '10px', whiteSpace: 'nowrap' }}>
                  <Link to={`/users/${user.id}`} 
                    className="btn btn-success btn-sm me-sm-2">
                    {t("edit")}
                  </Link>
                  <button onClick={(event) => handleDelete(user.id)}
                    className="btn btn-secondary btn-sm">
                    {t("delete")}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

