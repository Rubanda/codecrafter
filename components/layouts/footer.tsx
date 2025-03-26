import Link from "next/link"
import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/stars.png" width={50} height={50} alt="codecrafters logo" />
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
               CodeCrafters 
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              A community for developers to connect, learn, and grow together.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Pages</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/events" className="text-sm text-muted-foreground hover:text-foreground">
                Events
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Community</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Discord
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Forums
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Code of Conduct
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9" asChild>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:border-primary">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9" asChild>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:border-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9" asChild>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:border-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-9 w-9" asChild>
                <Link href="#" className="text-muted-foreground hover:text-foreground hover:border-primary">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

