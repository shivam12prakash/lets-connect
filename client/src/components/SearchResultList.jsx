import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SearchResultList = ({ result }) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const { palette } = useTheme()
  const dark = palette.neutral.dark
  const primaryLight = theme.palette.primary.light
  return (
    <Box sx={{ flexDirection: 'column', overflowY: 'scroll' }}>
      {result.map((result, id) => {
        return (
          <Typography
            key={id}
            color={dark}
            variant="h5"
            fontWeight="500"
            sx={{
              '&:hover': {
                color: primaryLight,
                cursor: 'pointer',
              },
            }}
          >
            {`${result.firstName}` + ' ' + `${result.lastName}`}
          </Typography>
        )
      })}
    </Box>
  )
}

export default SearchResultList
