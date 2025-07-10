"use client"

import Link from "next/link"
import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useLanguageSwitcher } from "@/store/language-store"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslations } from "next-intl"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, switchLanguage } = useLanguageSwitcher()
  const t = useTranslations('events')
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src='/cc.png' width={125} height={125} alt="code crafters logo"  />
            {/* <span className="hidden font-bold sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
             CodeCrafters 
            </span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {t('Home')}
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            {t('About')}
          </Link>
          <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
            {t('Events')}
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            {t('Contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
        <Select value={language} onValueChange={switchLanguage}>
            <SelectTrigger className="w-[70px] h-[30px] bg-transparent border-muted-foreground/20">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="text-sm">
              <SelectItem value="en">{t('en')}</SelectItem>
              <SelectItem value="tr">{t('tr')}</SelectItem>
            </SelectContent>
          </Select>
          <ModeToggle />
         
          <Link className={buttonVariants({ variant: "outline" })} href="https://chat.whatsapp.com/JvEKrYttxw35hp8OlzGJMP" >
              {t('Join Community')}
              </Link>
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
              {t('Home')}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              {t('About')}
            </Link>
            <Link
              href="/events"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              {t('Events')}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={toggleMenu}
            >
              {t('Contact')}
            </Link>
            <Select value={language} onValueChange={switchLanguage}>
            <SelectTrigger className="w-[70px] h-[30px] bg-transparent border-muted-foreground/20">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="text-sm">
              <SelectItem value="en">{t('en')}</SelectItem>
              <SelectItem value="tr">{t('tr')}</SelectItem>
            </SelectContent>
          </Select>

              <Link className={buttonVariants({ variant: "outline" })} href="https://chat.whatsapp.com/JvEKrYttxw35hp8OlzGJMP" >
              {t('Join Community')}
              </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

