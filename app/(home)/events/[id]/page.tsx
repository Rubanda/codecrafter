import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function EventPage({ params }: { params: { id: string } }) {
  // This would typically come from a database or API
  const event = {
    id: params.id,
    title: "Web Development Workshop",
    description:
      "Learn the latest web technologies and best practices in this hands-on workshop. We'll cover modern frontend frameworks, responsive design techniques, and performance optimization strategies.",
    longDescription: `
      <p>Join us for an immersive workshop on modern web development practices. This session is designed for developers of all skill levels who want to enhance their web development skills.</p>
      
      <p>During this workshop, you'll learn:</p>
      <ul>
        <li>Modern JavaScript frameworks and libraries</li>
        <li>Responsive design principles and techniques</li>
        <li>Performance optimization strategies</li>
        <li>Accessibility best practices</li>
        <li>Modern CSS techniques</li>
      </ul>
      
      <p>This is a hands-on workshop, so bring your laptop! We'll provide all the necessary resources and materials.</p>
      
      <p>Light refreshments will be served. Don't miss this opportunity to enhance your skills and connect with fellow developers!</p>
    `,
    date: "March 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Tech Hub, 123 Developer Street, San Francisco, CA",
    category: "workshop",
    image: "/placeholder.svg?height=400&width=800&text=Workshop",
    speaker: {
      name: "Jane Developer",
      title: "Senior Frontend Engineer",
      company: "Tech Solutions Inc.",
      bio: "Jane is a seasoned frontend developer with over 10 years of experience building web applications. She specializes in modern JavaScript frameworks and performance optimization.",
      image: "/placeholder.svg?height=100&width=100&text=Jane",
    },
    attendees: 42,
    maxAttendees: 50,
  }

  // Related events
  const relatedEvents = [
    {
      id: "related-1",
      title: "JavaScript Framework Comparison",
      description: "Compare popular JavaScript frameworks in action",
      date: "March 22, 2025",
      category: "workshop",
      image: "/placeholder.svg?height=200&width=400&text=JavaScript",
    },
    {
      id: "related-2",
      title: "Web Performance Optimization",
      description: "Learn techniques to make your websites faster",
      date: "April 5, 2025",
      category: "workshop",
      image: "/placeholder.svg?height=200&width=400&text=Performance",
    },
    {
      id: "related-3",
      title: "Frontend Developers Meetup",
      description: "Network with other frontend developers",
      date: "April 12, 2025",
      category: "meetup",
      image: "/placeholder.svg?height=200&width=400&text=Meetup",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Event Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/events">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back to events</span>
                </Link>
              </Button>
              <Badge variant="outline">{event.category}</Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{event.title}</h1>
                <p className="text-muted-foreground md:text-xl">{event.description}</p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row pt-4">
                  <Button size="lg">Register Now</Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Event
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  width={800}
                  height={400}
                  alt={event.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">About This Event</h2>
                <div
                  className="prose max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: event.longDescription }}
                />
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">Speaker</h2>
                <div className="flex gap-4 items-start">
                  <div className="h-16 w-16 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={event.speaker.image || "/placeholder.svg"}
                      width={64}
                      height={64}
                      alt={event.speaker.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{event.speaker.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.speaker.title}, {event.speaker.company}
                    </p>
                    <p className="mt-2">{event.speaker.bio}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Date & Time</h3>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="font-medium">Location</h3>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="mt-2 h-40 w-full bg-muted rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=160&width=300&text=Map"
                        width={300}
                        height={160}
                        alt="Event location map"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="font-medium">Attendees</h3>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {event.attendees} registered (of {event.maxAttendees} spots)
                      </span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Only {event.maxAttendees - event.attendees} spots left!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Share This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Related Events</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                You might also be interested in these upcoming events.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {relatedEvents.map((relEvent) => (
              <Card key={relEvent.id} className="overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <Image
                    src={relEvent.image || "/placeholder.svg"}
                    width={400}
                    height={200}
                    alt={relEvent.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{relEvent.category}</Badge>
                    <span className="text-sm text-muted-foreground">{relEvent.date}</span>
                  </div>
                  <CardTitle className="line-clamp-1">{relEvent.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{relEvent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/events/${relEvent.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Register+Now"
            alt="Event registration background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply" />
        </div>

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight drop-shadow-md">
                Ready to Join This Event?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-sm">
                Secure your spot now and don&apos;t miss this opportunity to learn and connect.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild className="shadow-lg">
                <Link href="#">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20 shadow-lg backdrop-blur-sm"
                asChild
              >
                <Link href="/contact">Contact Organizer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

