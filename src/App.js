import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showtrack, setshowTracks] = useState([]);
  const [keyword, setKeyword] = useState('');

  const gettrack = async () => {
    let data = await fetch(
      `https://v1.nocodeapi.com/divyansh_gupta/spotify/LgfidokSQWVQyjNL/search?q=${keyword===''?'tera':keyword}&type=track`
    );
    let convertdata = await data.json();
    console.log(convertdata);
    setshowTracks(convertdata.tracks.items);
  };
  useEffect(function(){
  
    gettrack()
  },[])

  return (
    <div >
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           <b> D MUSIC</b>
          </a>
         
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            <input
             value={keyword}
             onChange={(event)=>setKeyword(event.target.value)}
              className="form-control me-2 w-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit" onClick={gettrack}>
              Search
            </button>
          </div>
        </div>
      </nav>
      <div className="container"  style={{marginTop:40}}>
      
    
        <div className="row">
       

          {showtrack.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6" style={{padding:20}}>
                  <div className="card" >
                    <img
                      src={item.album.images[0].url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body" >
                      <h5 className="card-title">{item.name}</h5>
                      <p class="card-text">
                        Artist:{item.album.artists[0].name}
                      <br/>
                        Release Date:{item.album.release_date}

                      </p>
                      <a href={item.external_urls.spotify} class="btn btn-primary">play Now</a>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    
    </div>
  );
}

export default App;
