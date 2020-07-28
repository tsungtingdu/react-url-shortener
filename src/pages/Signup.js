import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Layout from '../Layout'
import { toast } from "react-toastify"

const Signup = (props) => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async (data) => {
    try {
      const { name, email, password, passwordCheck } = data

      if (password != passwordCheck) {
        toast.error('passwords are inconsistent', { autoClose: 5000 })
        return
      }

      const res = await axios.post('http://www.td.coffee/api/users/signup', { name, email, password, passwordCheck }, {
        headers: { 'Content-Type': 'application/json' }
      })

      // redirect to sign in page
      toast.success('Registering successfully! Redirect to sign in page ...', { autoClose: 5000 })
      setTimeout(function () { props.history.push("/users/signin") }, 3000);

    }
    catch (err) {
      toast.error('Something wrong, please try again or another email', { autoClose: 5000 })
    }
  }

  return (
    <Layout>
      <div className="userForm">
        <form className="userForm__container d-flex flex-column" action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="userForm__container__title">
            Sign up
          </div>
          <div className="userForm__container__field d-flex flex-column">
            <label htmlFor="" className="input__label">Name</label>
            <input type="text"
              placeholder="Name"
              className="input__field"
              name="name"
              ref={register({
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "cannot be less than 2 digits",
                },
              })} />
            {/* error message */}
            {errors.name && (
              <p className="error__message">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="userForm__container__field d-flex flex-column">
            <label htmlFor="" className="input__label">Email</label>
            <input type="text"
              placeholder="Email"
              className="input__field"
              name="email"
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/,
                  message: "invalid email",
                },
              })} />
            {/* error message */}
            {errors.email && (
              <p className="error__message">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="userForm__container__field d-flex flex-column">
            <label htmlFor="" className="input__label">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="input__field"
              name="password"
              ref={register({
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "min length is 6",
                },
              })}
            />
            {/* error message */}
            {errors.password && (
              <p className="error__message">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="userForm__container__field d-flex flex-column">
            <label htmlFor="" className="input__label">Please enter password again</label>
            <input
              type="password"
              placeholder="Please enter password again"
              className="input__field"
              name="passwordCheck"
              ref={register({
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "min length is 6",
                },
              })}
            />
            {/* error message */}
            {errors.password && (
              <p className="error__message">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="userForm__container__control d-flex flex-column">
            <button type="submit" className="submitButton">Submit</button>
            <Link to="/users/signin">
              <button className="switchButton" type='button'>
                Sign in
            </button>
            </Link>
          </div>
        </form>
      </div>
    </Layout >
  )
};

export default Signup;
