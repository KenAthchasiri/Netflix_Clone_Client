import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLikedMovies } from '../store'
import { firebaseAuth } from '../utils/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const UserLiked = () => {
    const [isScrolled,setIsScrolled] = useState(false)
    const [email, setEmail] = useState(undefined)
    const movies = useSelector((state)=>state.netflix.movies)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    onAuthStateChanged(firebaseAuth,(currentUser)=> {
        if(currentUser) {
            setEmail(currentUser.email)
        } 
        else navigate("/login")
    })

    useEffect(()=>{ 
        if(email) {
            console.log("dispatch");
            dispatch(getUserLikedMovies(email))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[email])
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    return (
        <Container>
            <Navbar isScrolled={isScrolled}/>
            <div className="content flex column">
                <h1>My list</h1>
                <div className="grid flex">
                    {movies.map((movie,i)=>{
                        return <Card moviesData={movie} index={i} key={movie.id} isLiked={true} />
                    })}
                </div>
            </div>
        </Container>
    )
}

export default UserLiked

const Container = styled.div`
    .content{
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
        h1{
            margin-left: 3rem;
        }
        .grid{
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`