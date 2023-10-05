import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import "../shared/shared-style/headerMusic.css"
import { useForm } from "react-hook-form"
import usePlayList from "../../hooks/usePlayList"


const HeaderMusic = () => {

    const tracksplayList = useSelector(store => store.tracks)

    const { reset, handleSubmit, register}= useForm()

    const { postPlayList} = usePlayList()

    const submit = data => {
        const obj = {
            ...data,
            tracks: tracksplayList.map(e => ({id: e.id}))
        }
        postPlayList(obj)

        reset({
            title: "",
            to: "",
            massage: ""
        })

    }


    
  return (
    <header className="header__container">
        <h1 className="header__text">Gift Music</h1>
        <p className="header__cuenta">Mi Cuenta</p>
        <div className="header__icon__container">
            <img src="/icons/header-icon.png" alt="" />
            <span>0</span>
        </div>
        <div className="header__music__form__container">
            <form onSubmit={handleSubmit(submit)} className="header__music__form">  
                <div className="form__title">
                    <label htmlFor="title">Title:</label>
                    <input {...register("title")} type="text" id="title" placeholder="" />
                    <span className="vector"></span>
                </div>
                <div className="header__form__image__container">
                    <img className="casete1" src="/public/images/casete.png" alt="" />
                    <span className="casete"></span>
                    <span className="trush"></span>
                    <span className="share"></span>
                    <p className="header__form__btn">Lado A <p className="row"></p></p>
                </div>
                <div className="header__form__imageb__container">
                    <img className="casete2" src="/public/images/casete.png" alt="" />
                </div>
                
                <div className="header__form__to">
                    <label htmlFor="to">To</label>
                    <input {...register("to")} type="text" id="to" />
                    <span className="vector"></span>
                </div>
                <div className="header__form__massage">
                    <label htmlFor="message">For</label>
                    <textarea className="textarea__form" {...register("message")} id="message" />
                    <span className="vector3"></span>
                </div>
                <div className="header__music__trackList">
                    {
                        tracksplayList.map(track => (
                            <TrackList
                                key={track.id}
                                track={track}
                            />
                            
                            
                        ))
                    }
                </div>
                <button className="header__create__btn">Create</button>
            </form>
        </div>
        
    </header>
  )
}

export default HeaderMusic