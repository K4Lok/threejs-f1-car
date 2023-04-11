import React from 'react'
import '../index.css'
import { useMediaQuery } from 'react-responsive'
import PacmanLoader from 'react-spinners/PacmanLoader'

export default function LoadingScreen() {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

    return (
        <div className='loading-screen'>
            <PacmanLoader size={isMobile ? 50 : 70} color='#B8C4C2' />
        </div>
    )
}
