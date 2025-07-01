import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Filter, Search, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { eventsData } from "@/app/_actions/event"
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, parseISO } from "date-fns"
import { Event } from "@/app/types/event"

export default async function EventsPage() {
  // Fetch both upcoming and past events
  const upcomingEvents = await eventsData('upcoming')
  const pastEvents = await eventsData('past')
  // Fetch all events for calendar
  const allEvents = await eventsData()
  
  // Calendar setup
  const currentDate = new Date()
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })
  
  // Get first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = getDay(monthStart)
  
  // Add empty cells for days before the first day of the month
  const emptyDays: (Date | null)[] = Array.from({ length: firstDayOfWeek }, () => null)
  const calendarDays: (Date | null)[] = [...emptyDays, ...daysInMonth]
  
  // Helper function to get events for a specific date
  const getEventsForDate = (date: Date) => {
    return allEvents.filter((event: Event) => {
      const eventDate = parseISO(event.date)
      return isSameDay(eventDate, date)
    })
  }

  // console.log(upcomingEvents, pastEvents)

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
              {upcomingEvents.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event: Event) => (
                    <Card key={event.id} className="overflow-hidden pt-0">
                      <div className="aspect-video w-full bg-muted">
                        <Image
                          src={event?.imageUrl || "/placeholder.svg"}
                          width={400}
                          height={200}
                          alt={event.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{event?.category ?? "Event"}</Badge>
                          <span className="text-sm text-muted-foreground">{event.date}</span>
                        </div>
                        <CardTitle className="line-clamp-1">{event?.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          <div dangerouslySetInnerHTML={{ __html: event?.description }} />
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 opacity-70" />
                            <span>{event?.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 opacity-70" />
                            <span>{event?.location}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 opacity-70" />
                            <span>{event?.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/events/${event?.id}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center w-full">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                      <Calendar className="h-12 w-12 text-primary/60" />
                    </div>
                  </div>
                  <div className="space-y-3 max-w-md mx-auto">
                    <h3 className="text-2xl font-semibold text-foreground">No Upcoming Events</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      There are no upcoming events scheduled at the moment. We&apos;re always planning new events, so check back soon!
                    </p>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <Button variant="default" asChild>
                      <Link href="#past" className="flex items-center gap-2">
                        View Past Events
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">
                        Suggest an Event
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
            <TabsContent value="past" className="mt-6">
              {pastEvents.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {pastEvents.map((event: Event) => (
                    <Card key={event.id} className="overflow-hidden pt-0">
                      <div className="aspect-video w-full bg-muted">
                        <Image
                          src={event?.imageUrl || "/placeholder.svg"}
                          width={400}
                          height={200}
                          alt={event.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{event?.category ?? "Event"}</Badge>
                          <span className="text-sm text-muted-foreground">{event.date}</span>
                        </div>
                        <CardTitle className="line-clamp-1">{event?.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          <div dangerouslySetInnerHTML={{ __html: event?.description }} />
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 opacity-70" />
                            <span>{event?.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4 opacity-70" />
                            <span>{format(event?.startTime, 'HH:mm')}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 opacity-70" />
                            <span>{event?.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/events/${event?.id}`}>View Details</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center w-full">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                      <Calendar className="h-12 w-12 text-primary/60" />
                    </div>
                  </div>
                  <div className="space-y-3 max-w-md mx-auto">
                    <h3 className="text-2xl font-semibold text-foreground">No Past Events Yet</h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      We haven&apos;t hosted any events yet, but exciting things are coming! Check out our upcoming events to see what&apos;s planned.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <Button variant="default" asChild>
                      <Link href="#upcoming" className="flex items-center gap-2">
                        View Upcoming Events
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">
                        Suggest an Event
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
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
                <CardTitle>{format(currentDate, 'MMMM yyyy')}</CardTitle>
                <CardDescription>Events for this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  {calendarDays.map((date, index) => {
                    if (!date) {
                      return <div key={`empty-${index}`} className="p-2"></div>
                    }
                    
                    const dayEvents = getEventsForDate(date)
                    const hasEvents = dayEvents.length > 0
                    
                    return (
                      <div
                        key={format(date, 'yyyy-MM-dd')}
                        className={`p-2 rounded-md min-h-[60px] ${
                          hasEvents ? "bg-primary/10 font-medium" : ""
                        } ${isSameDay(date, currentDate) ? "bg-accent border border-primary/30" : ""}`}
                      >
                        <div className="text-sm">{format(date, 'd')}</div>
                        {dayEvents.slice(0, 2).map((event: Event, eventIndex: number) => (
                          <div 
                            key={`${event.id}-${eventIndex}`} 
                            className="mt-1 text-xs text-primary bg-primary/20 rounded px-1 py-0.5 truncate"
                            title={event.name}
                          >
                            {event.name}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="mt-1 text-xs text-muted-foreground">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    )
                  })}
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
                Have expertise you&apos;d like to share with the community? Propose an event or workshop and help fellow
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
                src="/chair.jpg?height=400&width=600"
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

