import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Movies from './pages/Movies'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Signup from './pages/Signup'
import TVShow from './pages/TVShow'
import UserLiked from './pages/UserLiked'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/player" element={<Player />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TVShow />} />
          <Route path="/mylist" element={<UserLiked />} />
          <Route path="/" element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App