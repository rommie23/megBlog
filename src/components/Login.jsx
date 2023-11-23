import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const login = async(data)=>{
        setError("")
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData));
                }
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full my-10'
    >
        <div
        className={`mx-auto w-full max-w-lg bg-gray-600 rounded-xl p-10 border border-black/10`}
        >
            <div className="mb-2 flex justify-center">
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='60px'/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-white/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label='Email:'
                placeholder="Enter your email"
                type='email'
                {...register('email', {
                    required:true,
                    validate:{
                        matchPatern:(value) => /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm.test(value) || 'Email address must be a valid address'
                    }
                })}
                />
                <Input
                label = 'Password:'
                type='password'
                placeholder='*******'
                {...register('password', {
                    required:true
                })}
                />
                <Button
                type='submit'
                className='w-2/4 rounded-lg bg-green-600 px-2 py-4'
                >Sign In</Button>
            </div>
        </form>

        </div>
    </div>
  )
}

export default Login
