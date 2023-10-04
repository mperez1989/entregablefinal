import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import "../shared/shared-style/headerMusic.css"
import { useNavigate } from "react-router-dom"

const HeaderMusic = () => {

    const tracksplayList = useSelector(store => store.tracks)


    
  return (
    <header className="header__container">
        <h1>Gift Music</h1>
        <p>Mi Cuenta</p>

        <div>
            <form action="">
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div>
                    <label htmlFor="to">To</label>
                    <input type="text" id="to" />
                </div>
                <div>
                    <label htmlFor="message">For</label>
                    <textarea id="message" />
                </div>
                <div>
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