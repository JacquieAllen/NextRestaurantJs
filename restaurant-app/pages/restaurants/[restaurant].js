import Head from 'next/head'
import {useRouter} from 'next/router'
import Image from 'next/image'



export default function Restaurant() {
  const router = useRouter()
  return (
    <h1>Dynamic Restaurant Page! {router.query.restaurant}</h1>
  )
}
