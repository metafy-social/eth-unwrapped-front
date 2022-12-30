import React from 'react'
import { GithubLogo, LinkedInLogo, TwitterLogo } from '../../assets'
import HomeComp from './HomeComp'

const Home = () => {
    return (
        <div>
            <HomeComp />
            <div className="flex items-center space-x-7 mt-[13vh] justify-center">
                <a href="https://www.linkedin.com/company/metafy01/" target="_blank" rel="noopener noreferrer">
                    <LinkedInLogo />
                </a>
                <a href="https://github.com/metafy-social" target="_blank" rel="noopener noreferrer">
                    <GithubLogo />
                </a>
                <a href="https://twitter.com/MetafySocial" target="_blank" rel="noopener noreferrer">
                    <TwitterLogo />
                </a>


            </div>
        </div>
    )
}

export default Home