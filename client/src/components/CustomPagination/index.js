import React from 'react'

import { Stack } from '@mui/material'
import Pagination from '@mui/material/Pagination';


const CustomPagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary"  size="small"  />
    </Stack>

  )
}

export default CustomPagination