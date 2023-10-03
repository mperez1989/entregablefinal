import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"



const LoginPage = () => {

    const {reset, handleSubmit, register}= useForm()
    const { loginUser }= useAuth()


    const submit = data => {
        loginUser(data)
        reset ({
            email: "",
            password: ""
        })

    }

  return (
    <div>
        <img src="/images/login-img.png" alt="" />
        <article>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} type="password" id="password" />
                </div>
                <button>Get in</button>
            </form>
            <p>Create a new account <Link to="/auth/register">Go to Register</Link></p>
        </article>
    </div>
  )
}

export default LoginPage