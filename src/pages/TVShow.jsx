import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres } from '../store'
import { firebaseAuth } from '../utils/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import NotAvailable from '../components/NotAvailable'
import SelectGenre from '../components/SelectGenre'

const TVShow = () => {
    
    const [isScrolled,setIsScrolled] = useState(false)
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)
    const movies = useSelector((state)=>state.netflix.movies)
    const genres = useSelector((state)=>state.netflix.genres)
    const dispatch = useDispatch()
    //const navigate = useNavigate()

    useEffect(()=>{ 
        dispatch(getGenres())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    useEffect(()=>{
        if(genresLoaded) dispatch(fetchMovies({type: "tv"}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[genresLoaded])
    
    onAuthStateChanged(firebaseAuth,(currentUser)=> {
        //if(currentUser) navigate("/")
    }) 

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }


    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            
            <div className="data">
                <SelectGenre genres={genres} type="tv"/>
                {
                    movies.length ? <Slider movies={movies} /> : <NotAvailable />
                }
            </div>
        </Container>
    )
}

export default TVShow

const Container = styled.div`
    .data{
        margin-top: 8rem;
        .not-available{
            text-align: center;
            color: white;
            margin-top: 4rem;
        }
    }
`