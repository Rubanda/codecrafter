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
import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations('events')
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('Contact Us')}</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {t("Have questions or want to join our community? We'd love to hear from you")}.
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t('Get in Touch')}</h2>
                <p className="text-muted-foreground">
                  {t("Fill out the form and we'll get back to you as soon as possible")}.
                </p>
              </div>

              {formStatus === "success" && (
                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle>{t('Success!')}</AlertTitle>
                  <AlertDescription>
                    {t("Your message has been sent successfully. We'll get back to you soon")}.
                  </AlertDescription>
                </Alert>
              )}

              {formStatus === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>{t('Error')}</AlertTitle>
                  <AlertDescription>{t('Please fill in all the required fields.')}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('Name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t('Your name')}
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('Email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('Your email')}
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t('Subject')}</Label>
                  <Select value={formState.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder={t('Select a subject')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{t('General Inquiry')}</SelectItem>
                      <SelectItem value="membership">{t('Membership')}</SelectItem>
                      <SelectItem value="events">{t('Events')}</SelectItem>
                      <SelectItem value="partnership">{t('Partnership')}</SelectItem>
                      <SelectItem value="other">{t('Other')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('Message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t('Your message')}
                    value={formState.message}
                    onChange={handleChange}
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {t('Send Message')}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('Contact Information')}</CardTitle>
                  <CardDescription>{t('Alternative ways to reach out')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">{t('Email')}</h3>
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
                      <h3 className="font-medium">{t('Phone')}</h3>
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
                      <h3 className="font-medium">{t('Location')}</h3>
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
                  <CardTitle>{t('Connect With Us')}</CardTitle>
                  <CardDescription>{t('Follow us on social media for updates and more.')}</CardDescription>
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

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t('Frequently Asked Questions')}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('Find answers to common questions about our community')}.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            {[
              {
                q: t('How can I join the DevConnect community?'),
                a: t('You can join by filling out the contact form on this page or by attending one of our upcoming events') + '.',
              },
              {
                q: t('Are there any membership fees?'),
                a: t('Basic membership is free We also offer premium memberships with additional benefits for a small monthly fee') + '.',
              },
              {
                q: t('How often do you organize events?'),
                a: t('We typically organize 2-3 events per month, including workshops, meetups, and training sessions') + '.',
              },
              {
                q: t('Can I propose a topic for a future event?'),
                a: t('We welcome topic suggestions from our community members Please use the contact form to submit your ideas') + '.',
              },
              {
                q: t('Do you offer remote participation options?'),
                a: t('Yes, many of our events are hybrid, allowing both in-person and remote participation') + '.',
              },
              {
                q: t('How can I volunteer or contribute to the community?'),
                a: t("We're always looking for volunteers to help organize events, create content, or mentor others Contact us to learn more about volunteer opportunities") + '.',
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
                {t('Join Our Community Today')}
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-sm">
                {t('Connect with fellow developers, learn new skills, and grow your career')}.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="default" asChild className="shadow-lg">
                <a href="#contact-form">{t('Get Started')}</a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
              >
                <Link href="/events">{t('Explore Events')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

