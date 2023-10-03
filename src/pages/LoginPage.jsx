import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import "../pages/styles/loginPage.css"



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
    <div className="login__container">
        <img className="login__image" src="/images/iniciar-sesion.svg" alt="" />
        <article className="login">
            <h1 className="login__title">Login</h1>
            <form className="login__form" onSubmit={handleSubmit(submit)}>
                <div className="login__items__container">
                    <label htmlFor="email">Email</label>
                    <input {...register("email")} type="email" id="email" />
                </div>
                <div className="login__items__container">
                    <label htmlFor="password">Password</label>
                    <input {...register("password")} type="password" id="password" />
                </div>
                <button className="login__container__button">Get in</button>
            </form>
            <p className="login__text">Create a new account <Link to="/auth/register">Go to Register</Link></p>
        </article>
    </div>
  )
}

export default LoginPage