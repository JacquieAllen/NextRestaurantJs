import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const restaurants = [
    {name: "WoodsHill"},
    {name: "Fiorellas"},
    {name: "Karma"}
  ]

  const restaurantList = restaurants.map((item,index) => {
    return (
      <div>
        <Link keys={index} as={'restaurants/'+item.name} href="restaurants/[restaurant]">
          {item.name}
        </Link>
      </div>
    )
  })
  return (
    <div>
    <h1>Restaurant List!</h1>

      {restaurantList}
    
    </div>
  )

    

}