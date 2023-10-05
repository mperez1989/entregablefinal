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
        <h1>Gift Music</h1>
        <div className="header__music__form__container">
            <form onSubmit={handleSubmit(submit)} className="header__music__form">
                
                <div>
                    <label htmlFor="title">Title</label>
                    <input {...register("title")} type="text" id="title" />
                    <span></span>
                </div>
                
                <div>
                    <label htmlFor="to">To</label>
                    <input {...register("to")} type="text" id="to" />
                    <span></span>
                </div>
                <div>
                    <label htmlFor="message">For</label>
                    <textarea {...register("message")} id="message" />
                    <span></span>
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
                <button>Create</button>
            </form>
        </div>
        
    </header>
  )
}

export default HeaderMusic