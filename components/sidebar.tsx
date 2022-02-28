import { Box, Divider, List, ListItem, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { MdFavorite, MdHome, MdLibraryMusic, MdPlaylistAdd, MdSearch } from 'react-icons/md'
import MenuItem from './menuItem'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    color: 'white',
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    color: 'white',
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    color: 'white',
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    color: 'orange',
    route: '/',
  },
  {
    name: 'Favourites',
    icon: MdFavorite,
    color: 'blue',
    route: '/favourites',
  },
]

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

export default function Sidebar() {
  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
      <Box paddingY="20px" height="100%">
        <Box paddingX="20px" width="120px" marginBottom="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <MenuItem menulist={navMenu} />
        </Box>
        <Box marginY="20px">
          <MenuItem menulist={musicMenu} />
        </Box>
        <Divider color="gray.800" />
        <Box height="60%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem paddingX="20px" key={playlist}>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>
                    {playlist}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
              ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}