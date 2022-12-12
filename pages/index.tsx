import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { InputAdornment, TextField } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import { Box } from '@mui/system'


export default function Home() {
  return (
    <Box sx={{margin:'20px 10px', height:'100%'}}><TextField fullWidth label='Search Classromm' InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <SearchOutlined />
        </InputAdornment>
      ),
    }}></TextField>
       <div>
      <iframe src={'../assets/central-campus-map.pdf'} />
    </div></Box>
 
  )
}