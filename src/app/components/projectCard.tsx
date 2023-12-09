import Image from 'next/image';
import { Repo } from '../types'
import { convertString, parseDate } from '../utils'

type Props = {
  repo: Repo;
  key: number;
}

export default function ProjectCard({repo, key}: Props) {

  return(
  <div className="project-card" key={key}>
    <div className="project-content">
      <p className="text-3xl pb-2"><a href={repo.url}>{convertString(repo.name)}</a></p>
      <div className="text-xl flex justify-start owner-info">
        <Image src={repo.avatar_url} alt="owner avatar"width={32} height={32}/>|
        <hr />
        <p>{repo.owner}</p>
      </div>
      <p className="text-xl">{repo.description}</p>
    </div>
    <div 
      className="
        flex flex-wrap
        items-center
        justify-between
        py-4 md:py-0 px-12
        "
    >
      <div className="text-sm">{"Updated " + parseDate(repo.updated)}</div>
      <div className="text-sm">{"Created " + parseDate(repo.created)}</div>
    </div>
  </div>
  )
}
