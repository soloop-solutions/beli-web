'use client'

import React from 'react'
import useSWR from 'swr'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PackageCard } from './package-card'
import { Card, CardContent } from "@/components/ui/card"

interface TravelPackage {
  id: number
  title: string
  days: number
  country: string
  price: number
  image: string
  description: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function TravelSlider() {
  const { data, error, isLoading } = useSWR<{ packages: TravelPackage[] }>('/data/db.json', fetcher)

  if (isLoading) {
    return <Card className="w-full"><CardContent className="flex items-center justify-center h-[300px]">Loading travel packages...</CardContent></Card>
  }

  if (error) {
    return <Card className="w-full"><CardContent className="flex items-center justify-center h-[300px] text-red-500">Error fetching travel packages. Please try again later.</CardContent></Card>
  }

  const packages = data?.packages || []

  return (
    <Carousel className="w-full max-w-5xl mx-auto pb-10">
      <CarouselContent>
        {packages.map((pkg) => (
          <CarouselItem key={pkg.id} className="basis-[90%] md:basis-1/2 lg:basis-1/3 mx-auto sm:mx-0">
            <div className="p-1">
              <PackageCard package={pkg} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
