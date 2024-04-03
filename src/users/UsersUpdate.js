import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function UsersUpdate (){
  const {id} = useParams();
  const [values, setValues] = useState({
    name:'',
    email:'',
    number:''
  });

  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => async function fetchUser() {
    try {
      const response = await fetch('http://localhost:3002/users/'+ id);
      const data = await response.json();
      console.log('Download complete', data);
      setValues(data);
    } catch (error) {
      console.error(`Download error: ${error.message}`);
    }
  }, [id]);

  async function handleUpdate(event) {
    event.preventDefault();

    //form Validation
    if (!values.name || !values.email || !values.number) {
      console.log("Please provide all the required fields.")
      return;
    }

    //update user
    try {
      const response = await fetch(
        'http://localhost:3002/users/' + id,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );
      const result = await response.json();
      navigate('/users');
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
    
  }

  return (
    <div className='container'>
    <h3>Update User</h3>
    <div className="row">
      <div className="col-lg-6 mx-auto">   
        <form onSubmit={handleUpdate}>
          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">ID</label>
            <div className="col-sm-8">
              <input
                className="form-control-plaintext"
                name="name"
                readOnly
                value={values.id}
              ></input>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">{t("name")}</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="name"
                placeholder='Enter a name'
                onChange={(e)=>setValues({...values, name: e.target.value})}
                value={values.name}
              ></input>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">{t("email")}</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="email"
                placeholder='Enter an email'
                onChange={(e)=>setValues({...values, email: e.target.value})}
                value={values.email}
              ></input>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-4 col-form-label">{t("number")}</label>
            <div className="col-sm-8">
              <input
                className="form-control"
                name="number"
                placeholder='Enter a phone number'
                onChange={(e)=>setValues({...values, number: e.target.value})}
                value={values.number}
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="offset-sm-4 col-sm-4 d-grid mb-2">
              <Link to='/users' className="btn btn-outline-success btn-sm me-sm-2">
              {t("cancel")}
              </Link>
            </div>
            <div className="col-sm-4 d-grid mb-2">
              <button type="submit" className=" btn btn-success btn-sm">
              {t("update")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
