import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    if (user) {
        console.log(user);
    }

    return (
        <div className=' h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">What is your name?</span>
                                <span class="label-text-alt">Alt label</span>
                            </label>
                            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                                <span class="label-text-alt">Alt label</span>
                            </label>
                        </div>





                        <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;