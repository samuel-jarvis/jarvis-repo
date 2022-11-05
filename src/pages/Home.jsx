import React from 'react'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero/Hero'

// get all repositories of github user
const getRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const data = await response.json()
  console.log(data)
  return data
}

const Home = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    getRepos("samuel-jarvis").then((repos) => {
      setRepos(repos)
    })
  }, [])

  return (
    <div>
      <Hero />

      <ul>
        {repos.map((repo) => (
          <div key={repo.id}>
            <p>
              <p>{repo.name}</p>
            </p>
          </div>
        ))}
      </ul>

    </div>
  )
}

export default Home