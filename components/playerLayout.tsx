import {Box} from '@chakra-ui/layout'
import Sidebar from './sidebar'
export default function PlayerLayout({children}) {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250" marginBottom="100px" > {children}</Box>
      <Box width="100%" height="100px" position="absolute" left="0" bottom="0" bg="green">
        player
      </Box>
    </Box>
  )
}