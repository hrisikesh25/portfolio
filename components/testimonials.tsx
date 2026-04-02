"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Pratyush Dutta",
      position: "B.Tech Undergraduate Student",
      content:
        "Connecting with Hrisikesh Ghosh became a key turning point in our project. He helped identify and explain the issues in our code, enabling us to successfully integrate the servos and LEDs. This project was not only a technical achievement but also a valuable learning experience, and I’m grateful to my teammates and to Hrisikesh Ghosh for his timely guidance and support.",
      rating: 4.5,
      image: "/pratush.png?height=100&width=100",
    },
    {
    id: 2,
    name: "Shirley Mondal",
    position: "B.Sc Undergraduate Student",
    content: "A heartfelt thank you to our senior Hrisikesh Ghosh from the Technical Support Team of IHMMC for guiding and supporting us throughout this journey. Your mentorship played a crucial role in helping us reach this milestone",
    rating: 4.9,
    image: "/Shirley.png?height=100&width=100",
    isPlaceholder: true,
  },
  {
    id: 3,
    name: "Debarshi Chakroborty",
    position: "B.Tech Undergraduate Student",
    content: "",
    rating: 4.9,
    image: "",
    isPlaceholder: true,
  },
  {
    id: 4,
    name: "Khusi Talukdar",
    position: "",
    content: "",
    rating: 4.1,
    image: "",
    isPlaceholder: true,
  },
  {
    id: 999,
    name: "Many more to come",
    position: "",
    content: "✨",
    rating: 0,
    image: "emoji.png",
    isPlaceholder: true,
  },
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-5">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Assistance</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
