import {Box, List, ListItem, ListIcon, LinkBox, LinkOverlay} from '@chakra-ui/layout'
import NextLink from 'next/link'

export default function MenuItem({menulist}) {
  return (
    <Box>
      <List spacing={2}>
        {menulist.map(menu => (
        <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
          <LinkBox>
            <NextLink href={menu.route} passHref>
              <LinkOverlay>
                <ListIcon as={menu.icon} color={menu.color} marginRight="20px" />
                {menu.name}
              </LinkOverlay>
            </NextLink>
          </LinkBox>
        </ListItem>))}
      </List>
    </Box>
  )}