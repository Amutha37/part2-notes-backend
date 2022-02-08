import React from 'react'
// === login form ===

const LoginForm = ({
  handleSubmit,
  handleUserNameChange,
  handlePasswordChange,
  username,
  password,
}) => {
  return (
    <div className='login_form_container'>
      <form className='login_form' onSubmit={handleSubmit}>
        <div>
          username
          <input
            type='text'
            value={username}
            // defaultValue={username}
            name='Username'
            onChange={handleUserNameChange}
            placeholder='User Name'
          />
        </div>
        <div>
          password
          <input
            type='password'
            value={password}
            name='Password'
            autoComplete='off'
            onChange={handlePasswordChange}
            placeholder='password'
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default LoginForm
