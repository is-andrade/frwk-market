import React, { useState } from 'react';
import { useAuth } from '../../contexts/Auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email);
  };

  return (
    <div className={'flex h-screen w-screen items-center justify-center'}>
      <div className={'w-1/2 min-w-[300px] max-w-[550px] rounded-2xl bg-[#5f3473] p-10 text-white drop-shadow-2xl'}>

        <form className={'flex flex-col'} onSubmit={handleSubmit}>
          <div className={'mb-6 flex w-full justify-start'}>
            <img src={"images/framework_logo.webp"} alt="Framework" className={'h-8 min-w-[219px]'}/>
          </div>
          <label>
            Email:
          </label>
          <input
            type="email"
            value={email}
            className={'h-10 rounded-md px-2 text-black outline-none'}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br/>
          <label>
            Password:
          </label>
          <input
            type="password"
            value={password}
            className={'h-10 rounded-md px-2 text-black outline-none'}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br/>
          <button className={'h-11 rounded-md bg-[#33004a] text-white hover:bg-[#210030]'} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;