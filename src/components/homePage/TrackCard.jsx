import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracksSlice"
import { Link, useNavigate } from "react-router-dom"

const TrackCard = ({ track }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleAddTrack = () => {
        dispatch(addTrack(track))

    }
    const handleArtist = (id) => {
        navigate(`/artist/${id}`)

    }

    
  return (
    <section>
        <header>
            <img src={track.album.images[0].url} alt="" />
        </header>
        <article>
            <Link to={`/tracks/${track.id}`}><h3>{track.name}</h3></Link>
            <ul>
                {
                    track.artists.map(art => (
                        <li onClick={() => handleArtist(art.id)} key={art.id}>{art.name}</li>
                    ))
                }
            </ul>
        </article>
        <footer>   
            <a target="_blank" href={track.external_urls.spotify}>
                <i className='bx bxl-spotify'></i>
            </a>
            <button onClick={handleAddTrack}>
                <i className='bx bx-plus-circle'></i>
            </button>
        </footer>
    </section>
  )
}

export default TrackCard