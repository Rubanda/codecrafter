"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Github, Twitter, Linkedin, Send } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    setTimeout(() => {
      // Check if all fields are filled
      if (formState.name && formState.email && formState.subject && formState.message) {
        setFormStatus("success")
        // Reset form after successful submission
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setFormStatus("error")
      }
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Have questions or want to join our community? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>

              {formStatus === "success" && (
                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your message has been sent successfully. We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              {formStatus === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Please fill in all the required fields.</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={formState.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="membership">Membership</SelectItem>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Alternative ways to reach out to us.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        <Link href="mailto:info@devconnect.com" className="hover:underline">
                          info@devconnect.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        <Link href="tel:+1234567890" className="hover:underline">
                          +1 (234) 567-890
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Tech Street, Developer District
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                  <CardDescription>Follow us on social media for updates and more.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                  <CardDescription>When you can visit us in person.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            {[
              {
                q: "How can I join the DevConnect community?",
                a: "You can join by filling out the contact form on this page or by attending one of our upcoming events.",
              },
              {
                q: "Are there any membership fees?",
                a: "Basic membership is free. We also offer premium memberships with additional benefits for a small monthly fee.",
              },
              {
                q: "How often do you organize events?",
                a: "We typically organize 2-3 events per month, including workshops, meetups, and training sessions.",
              },
              {
                q: "Can I propose a topic for a future event?",
                a: "We welcome topic suggestions from our community members. Please use the contact form to submit your ideas.",
              },
              {
                q: "Do you offer remote participation options?",
                a: "Yes, many of our events are hybrid, allowing both in-person and remote participation.",
              },
              {
                q: "How can I volunteer or contribute to the community?",
                a: "We're always looking for volunteers to help organize events, create content, or mentor others. Contact us to learn more about volunteer opportunities.",
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/chair.jpg?height=1080&width=1920&text=Join+Us"
            alt="Join community background"
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
                Join Our Community Today
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-sm">
                Connect with fellow developers, learn new skills, and grow your career.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="default" asChild className="shadow-lg">
                <a href="#contact-form">Get Started</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white/20 shadow-lg backdrop-blur-sm"
                asChild
              >
                <Link href="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

