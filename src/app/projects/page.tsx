'use client'
import { Octokit } from 'octokit'
import { useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'
import { Repo } from '../types'
import ProjectCard from '../components/projectCard'

export default function Page() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  const octokit = new Octokit({
    auth: process.env.AUTH_KEY
  })

  // get and parse repos from github
  const handleGetRepos = async () => {
    const result = await octokit.request("GET /users/d1ppingsauce/repos", {})
    const temp: Repo[] = []

    // map repo data to Repo Type
    result.data.map((r: any) => temp.push({
      name: r.name,
      url: r.html_url,
      owner: r.owner.login,
      avatar_url: r.owner.avatar_url,
      description: r.description,
      created: r.created_at,
      updated: r.updated_at,
      language: r.language,
      watchers: r.watchers_count
      }))

    // sort Repos by latest update
    temp.sort(function(a: Repo,b: Repo): any { return (new Date(b.updated).getTime() - new Date(a.updated).getTime())})
    
    setRepos(temp)
  }

  // display Repos as cards, or show loading bar
  const handleDisplayRepos = () => {
    if (loading) {
      return (
      <div className='loading'>
        <BarLoader color="#609EA2"/>
      </div> )
    } else if (repos.length > 0) {
      console.log(repos)
      return (
        <div className="project-cards">
          {repos.map((r: Repo, i: number) => 
            (<ProjectCard repo={r} key={i}/>)
          )}
        </div>)
    }

  }

  // pull repos list from github api
  useEffect(() => {
    handleGetRepos()
  }, [])

  // toggle loading
  useEffect(() => {
    setLoading(false)
  }, [repos])

  return( 
    <div className="main-content">
      <h1 className="text-4xl">GitHub Repositories</h1>
      <br />
      <p className="text-xl">Listed here are (currently) the repositories on GitHub that I am the
        creator of or am actively working on. If I have work elsewhere, this will be updated to
        display other content as needed.</p>
      {handleDisplayRepos()}
    </div>
    )
}