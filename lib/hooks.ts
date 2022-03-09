import useSWR from 'swr'
import fetcher from './fetcher'

export const useMe = () => {
  console.log("Hello from useMe")
  const { data, error } = useSWR('/me', fetcher)

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export const usePlaylist = () => {
  console.log("Hello from usePlaylist")
  const { data, error } = useSWR('/playlist', fetcher)
  console.log(data)
  console.log(error)
  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  }
}