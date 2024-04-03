import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function UsersCreate() {
  const [values, setValues] = useState({
    name:'',
    email:'',
    number:''
  });
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function handleSubmit(event) {
    event.preventDefault();

    //form Validation
    if (!values.name || !values.email || !values.number) {
      console.log("Please provide all the required fields.")
      return;
    }
   
    try {
      const response = await fetch('http://localhost:3002/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      navigate('/users');
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
    
  }

  return (
    <div className='container'>
      <h3>{t("create_user")}</h3>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">{t("name")}</label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  name="name"
                  defaultValue={''}
                  onChange={(e)=>setValues({...values, name: e.target.value})}
                  placeholder='Enter a name'
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">{t("email")}</label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  name="email"
                  defaultValue={''}
                  onChange={(e)=>setValues({...values, email: e.target.value})}
                  placeholder='Enter an email'
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">{t("number")}</label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  name="number"
                  defaultValue={''}
                  placeholder='Enter a phone number'
                  onChange={(e)=>setValues({...values, number: e.target.value})}
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
                {t("save")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
