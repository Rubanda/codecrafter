import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Lightbulb, Target, Award } from "lucide-react"
import { getTranslations } from "next-intl/server"

export default async function AboutPage() {
  const t = await getTranslations('events')
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section w-full py-12 md:py-24 lg:py-32 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('About')} CodeCrafters</h1>
                <p className="max-w-[600px]  md:text-xl">
                    {t('A community built by developers, for developers - Learn about our mission, values, and the team behind DevConnect')}.
                  </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="glass-card p-2 floating-element">
                <Image
                  src="/codecrafter.JPG?height=400&width=600"
                  width={600}
                  height={400}
                  alt="About DevConnect"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                {t('Our Mission')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
                {t('Empowering Developers Through Community')}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('DevConnect was founded with a simple yet powerful mission: to create a supportive environment where developers can learn, share, and grow together - We believe that by fostering a strong community, we can help developers at all stages of their careers reach their full potential')}.
              </p>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t('Facilitate knowledge sharing and continuous learning')}</span> 
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t('Create networking opportunities for career growth')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t('Provide resources and support for technical challenges')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{t('Build an inclusive environment for developers of all backgrounds')}</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary">
                {t('Our Vision')}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
                {t('Building the Future of Tech Together')}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('We envision a world where every developer has access to the resources, mentorship, and community they need to succeed - By bringing together passionate individuals, we aim to foster innovation, collaboration, and excellence in the tech industry')}.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('Our community is built on the principles of inclusivity, respect, and continuous improvement - We strive to create a space where developers can connect with peers, learn from experts, and contribute to the collective knowledge of our industry')}.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button variant="default" asChild>
                  <Link href="/contact">{t('Join Our Community')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
                {t('Our Core Values')}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('The principles that guide everything we do at DevConnect')}.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="feature-icon w-12 h-12 flex items-center justify-center mb-2">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="mt-2">{t('Community')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('We believe in the power of community to drive growth and innovation')}.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="feature-icon w-12 h-12 flex items-center justify-center mb-2">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <CardTitle className="mt-2">{t('Innovation')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('We encourage creative thinking and embrace new technologies')}.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="feature-icon w-12 h-12 flex items-center justify-center mb-2">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="mt-2">{t('Excellence')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('We strive for excellence in everything we do and create')}.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="feature-icon w-12 h-12 flex items-center justify-center mb-2">
                  <Award className="h-6 w-6" />
                </div>
                <CardTitle className="mt-2">{t('Inclusivity')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('We welcome developers of all backgrounds and experience levels')}.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-section w-full py-12 md:py-24 lg:py-32 text-white bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t('Ready to Join Our Community?')}</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('Become a part of DevConnect today and start your journey towards growth and success')}.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="default" asChild>
                <Link href="/contact">{t('Join Now')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="" asChild>
                <Link href="/events">{t('Explore Events')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

