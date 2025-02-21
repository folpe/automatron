"use client"

import { useEffect, useState } from "react"
import { nhost } from "app/lib/nhost"

const getMovies = `
  query {
    movies {
      id
      title
      genre
      rating
    }
  }
`

interface Imovies {
  id: string
  title: string
  genre: string
  rating: string
}
export function Home() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<Imovies[]>([])

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true)
      const { data } = await nhost.graphql.request(getMovies)

      setMovies(data.movies)
      setLoading(false)
    }

    fetchMovies()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
