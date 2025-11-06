import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card"
import {  Users, ArrowRight, Code, BookOpen } from "lucide-react"
// import { eventsData } from "../../_actions/event";
// import { format } from "date-fns";
// import { enUS, tr } from "date-fns/locale";
// import { formatEventDateTime } from "@/lib/utils";
// import { EventLocation } from "@/components/event-location";
import {  getTranslations } from "next-intl/server";

export default async function Home() {
  // const locale = await getLocale();
  const t = await getTranslations('events')
//  const upcomingEvents = await eventsData('upcoming') || [];
  return (
      <div className="bg-background min-h-screen "
      style={{
        backgroundImage: `url("/bg-hero.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      >
        {/* Hero Section */}
        <section className="hero-section w-full py-12 md:py-24 lg:py-32 xl:py-48 ">
          <div className="container mx-auto px-4 md:px-6 text-white">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                    {t('Connect, Learn, and Grow with Fellow Developers')}
                  </h1>
                  <p className="max-w-[600px]  md:text-xl">
                    {t('Join our vibrant community of developers to share knowledge, attend events, and build your network')}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="default" asChild>
                    <Link href="/events">{t('Explore Events')}</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-black dark:text-white" asChild>
                    <Link href="/about">{t('Learn More')}</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="glass-card p-2 floating-element">
                  <Image
                    src="/community.png?height=550&width=550"
                    width={550}
                    height={550}
                    alt="Developer Community"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
                  {t('Why Join Our Developer Community?')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('We provide a supportive environment for developers at all stages of their career')}.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <div className="feature-icon w-12 h-12 flex items-center justify-center mb-2">
                    <Code className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-2">{t('Skill Development')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('Access workshops, training sessions, and resources to enhance your technical skills')}.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <div className="feature-icon w-12 h-12 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-2">{t('Networking')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('Connect with like-minded developers, mentors, and potential employers')}.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader className="pb-2">
                  <div className="feature-icon w-12 h-12 flex items-center justify-center mb-2">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-2">{t('Knowledge Sharing')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('Share your expertise and learn from others through discussions and presentations')}.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
                  {t('Upcoming Events')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('Join us for our latest workshops, meetups, and training sessions')}.
                </p>
              </div>
            </div>
            {/* <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents?.map((event: any) => (
                  <Link key={event?.id} href={`/events/${event?.id}`} className="group block flex-1 w-full">
                <div  className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <Image
                      src={ event?.imageUrl ? event?.imageUrl : `/building-ai.jpeg?height=200&width=400&text=Event+${event?.id}`}
                      width={400}
                      height={100}
                      alt={`Event ${event?.id}`}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 to-transparent to-60%">
                <div className="flex h-full flex-col justify-end">
                  <div className="space-y-2 p-4 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#f5a623] transition-colors duration-300">
                      {event?.name}
                    </h3>

                    <div className="text-white/90">
                      <EventLocation
                        virtualInfo={event?.virtual_info}
                        locationName={event?.geoAddressJson}
                        all={true}
                        disableLinks={true}
                      />
                    </div>

                    <div className="text-white/90 font-medium uppercase text-sm mt-2">
                      {event?.isAllDayEvent
                        ? format(new Date(event?.date), "LLLL d,<y_bin_858>", { locale: locale === "tr" ? tr : enUS })
                        : formatEventDateTime(event?.startTime, event?.endTime, locale === "tr" ? tr : enUS)}
                    </div>
                  </div>
                </div>
              </div> 
                
                </div>
                </Link>
              ))}
            </div> */}
            <div className="flex justify-center">
              <Button variant="outline" className="group" asChild>
                <Link href="/events" className="flex items-center gap-2">
                  {t('View All Events')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-heading">
                  {t('What Our Members Say')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('Hear from developers who have benefited from our community')}.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 overflow-hidden">
                        <Image
                          src={`/women1.webp?height=40&width=40&text=${i}`}
                          width={40}
                          height={40}
                          alt={`Member ${i}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-base">Developer Name {i}</CardTitle>
                        <CardDescription>Software Engineer</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Joining this community has been a game-changer for my career. The workshops and networking
                      opportunities have helped me grow as a developer.
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                  {t('Become a part of our growing network of developers and take your skills to the next level')}.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="default" asChild>
                  <Link href="/contact">{t('Join Now')}</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link href="/about">{t('Learn More')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
