import { useEffect, useRef, useState} from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/homePage/TrackCard"

const HomePage = () => {

  const [ listTracks, getListTracks ] = useFetch()
  const [inputValue, setInputValue] = useState("ricardo arjona")
  const [quantity, setQuantity] = useState(10)

  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantity}&q=${inputValue}`)
  }, [inputValue, quantity])

  const inputSearch = useRef()


  const handleSearch = (e)=>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTracksPerPage = e => {
    setQuantity(e.target.value)

  }


  return (
    <div>
      <div>
        <form onSubmit={handleSearch} action="">
          <input ref={inputSearch} type="text" />
          <select onChange={handleTracksPerPage} defaultValue={10}>
            {
              [2, 4, 6, 8, 10].map(trackPerPage => (
                <option key={trackPerPage} value={trackPerPage}>{trackPerPage}</option>
              ))
            }
          </select>
          
        </form>
        <div>
          {
            listTracks?.tracks.items.map(track => (
              <TrackCard
                key={track.id}
                track={track}
              />
            ))

          }
        </div>
      </div>
    </div>
  )
}

export default HomePage