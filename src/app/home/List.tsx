import React from 'react'
import { swapiItem, swapiRes } from './page'
import Link from 'next/link'

interface ListProps {
  data: swapiRes
}

const List = ({data} : ListProps) => {
  return (
    <ul>
    {data.results?.map((obj: swapiItem, index: number) => (
      <li key={index}>
        <Link href={`/person/${obj.name.replace(" ", "_")}`} >{obj.name}</Link>
      </li>
    ))}
  </ul>
  )
}

export default List