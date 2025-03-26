import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Filter, Search, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsPage() {
  // Sample event data
  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      description: "Learn the latest web technologies and best practices",
      date: "March 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Tech Hub, Downtown",
      category: "workshop",
      image: "/placeholder.svg?height=200&width=400&text=Workshop",
    },
    {
      id: 2,
      title: "Mobile App Development Bootcamp",
      description: "Intensive training on building mobile applications",
      date: "March 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Center",
      category: "training",
      image: "/placeholder.svg?height=200&width=400&text=Bootcamp",
    },
    {
      id: 3,
      title: "DevOps Meetup",
      description: "Networking and knowledge sharing for DevOps professionals",
      date: "March 25, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Cloud Cafe",
      category: "meetup",
      image: "/placeholder.svg?height=200&width=400&text=Meetup",
    },
    {
      id: 4,
      title: "Data Science Fundamentals",
      description: "Introduction to data science concepts and tools",
      date: "April 5, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Data Lab",
      category: "workshop",
      image: "/placeholder.svg?height=200&width=400&text=Data+Science",
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      description: "Learn the fundamentals of user interface and experience design",
      date: "April 10, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Design Studio",
      category: "workshop",
      image: "/placeholder.svg?height=200&width=400&text=UI/UX",
    },
    {
      id: 6,
      title: "Networking Night",
      description: "Connect with fellow developers in a casual setting",
      date: "April 15, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Tech Lounge",
      category: "networking",
      image: "/placeholder.svg?height=200&width=400&text=Networking",
    },
    {
      id: 7,
      title: "Cloud Computing Certification Prep",
      description: "Prepare for cloud certification exams with expert guidance",
      date: "April 20, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Online",
      category: "training",
      image: "/placeholder.svg?height=200&width=400&text=Cloud",
    },
    {
      id: 8,
      title: "Hackathon: Build for Good",
      description: "48-hour coding challenge to create solutions for social issues",
      date: "May 1-3, 2025",
      time: "Starts at 6:00 PM",
      location: "Innovation Hub",
      category: "hackathon",
      image: "/placeholder.svg?height=200&width=400&text=Hackathon",
    },
    {
      id: 9,
      title: "JavaScript Framework Showdown",
      description: "Compare popular JavaScript frameworks in action",
      date: "May 10, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Code Academy",
      category: "workshop",
      image: "/placeholder.svg?height=200&width=400&text=JavaScript",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Events & Training</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover upcoming workshops, meetups, and training sessions to enhance your skills and connect with
                fellow developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="w-full py-6 md:py-12 bg-background border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[2fr_1fr]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search events..." className="pl-10" />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  All
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Workshops
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Training
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Meetups
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Hackathons
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="aspect-video w-full bg-muted">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        width={400}
                        height={200}
                        alt={event.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{event.category}</Badge>
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                      <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 opacity-70" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 opacity-70" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 opacity-70" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/events/event-${event.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past" className="mt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground">No past events to display at this time.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendar View */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Event Calendar</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Plan ahead with our event calendar. Never miss an opportunity to learn and connect.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-12">
            <Card>
              <CardHeader>
                <CardTitle>March 2025</CardTitle>
                <CardDescription>Upcoming events for this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 font-medium">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                    <div
                      key={date}
                      className={`p-2 rounded-md ${[15, 20, 25].includes(date) ? "bg-primary/10 font-medium" : ""}`}
                    >
                      {date}
                      {date === 15 && <div className="mt-1 text-xs text-primary">Workshop</div>}
                      {date === 20 && <div className="mt-1 text-xs text-primary">Bootcamp</div>}
                      {date === 25 && <div className="mt-1 text-xs text-primary">Meetup</div>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">Host an Event</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Share Your Knowledge</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have expertise you'd like to share with the community? Propose an event or workshop and help fellow
                developers grow.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Share your technical expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Build your professional network</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Enhance your presentation skills</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span>Give back to the developer community</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild>
                  <Link href="/contact">Propose an Event</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Host an event"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Events"
            alt="Events background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight drop-shadow-md">
                Stay Updated on Future Events
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-sm">
                Join our mailing list to receive notifications about upcoming events and training sessions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="default" asChild className="shadow-lg">
                <Link href="/contact">Subscribe Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white/20 shadow-lg backdrop-blur-sm"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

