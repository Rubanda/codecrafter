import { MapPin, AlertTriangle } from "lucide-react"
import { Icons } from "./icons"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"

// Expanded to include more virtual platforms
type EventLocationType =
  | "virtual-zoom"
  | "virtual-meet"
  | "virtual-teams"
  | "virtual-youtube"
  | "virtual-webex"
  | "virtual-other"
  | "physical"
  | "none"

interface EventLocationProps {
  virtualInfo?: { rawJoinUrl: string }
  locationName?: {
    city: string
    country: string
  }
  all?: boolean
  disableLinks?: boolean
}

export function EventLocation({ virtualInfo, locationName, all=false, disableLinks=false }: EventLocationProps) {
  const t = useTranslations('events')
  const getLocationType = (): EventLocationType => {
    if (virtualInfo?.rawJoinUrl) {
      const url = virtualInfo.rawJoinUrl.toLowerCase()

      // Check for various platforms
      if (url.includes("zoom")) return "virtual-zoom"
      if (url.includes("meet.google") || url.includes("google.com/meet")) return "virtual-meet"
      if (url.includes("teams.microsoft") || url.includes("teams.live")) return "virtual-teams"
      if (url.includes("youtube") || url.includes("youtu.be")) return "virtual-youtube"
      if (url.includes("webex")) return "virtual-webex"

      // Default for other virtual platforms
      return "virtual-other"
    }

    if (locationName?.city && locationName?.country) return "physical"
    return "none"
  }

  const getPlatformName = (url: string): string => {
    try {
      // Extract domain for display in some cases
      const hostname = new URL(url).hostname
      return hostname
    } catch {
      return url
    }
  }

  const locationConfig = {
    "virtual-meet": {
      icon: <Icons.googleMeet className="w-5 h-5" />,
      country: virtualInfo?.rawJoinUrl,
      text: "Google Meet",
      color: "text-muted-foreground",
      link: true,
    },
    "virtual-zoom": {
      icon: <Icons.video className="w-5 h-5" />,
      country: virtualInfo?.rawJoinUrl,
      text: "Zoom",
      color: "text-muted-foreground",
      link: true,
    },
    "virtual-teams": {
      icon: <Icons.video className="w-5 h-5" />,
      country: virtualInfo?.rawJoinUrl,
      text: "Microsoft Teams",
      color: "text-muted-foreground",
      link: true,
    },
    "virtual-youtube": {
      icon: <Image src="/youtube.svg" alt="YouTube" width={24} height={24}  />,
      country: virtualInfo?.rawJoinUrl,
      text: "YouTube",
      color: "text-muted-foreground",
      link: true,
    },
    "virtual-webex": {
      icon: <Icons.video className="w-5 h-5" />,
      country: virtualInfo?.rawJoinUrl,
      text: "Webex",
      color: "text-muted-foreground",
      link: true,
    },
    "virtual-other": {
      icon: <Icons.video className="w-5 h-5" />,
      country: virtualInfo?.rawJoinUrl,
      text: getPlatformName(virtualInfo?.rawJoinUrl || ""),
      color: "text-muted-foreground",
      link: true,
    },
    physical: {
      icon: <MapPin className="w-5 h-5" />,
      text: locationName?.city,
      country: locationName?.country,
      color: "text-muted-foreground",
      link: false,
    },
    none: {
        icon: <AlertTriangle className="w-5 h-5" />,
        text: t("noLocationSpecified"),
      color: "text-yellow-500",
      link: false,
    },
  }

  const locationType = getLocationType()
  const config = locationConfig[locationType]

  return (
    <div className={`flex items-center gap-2 ${config?.color}`}>
      <div className="p-1 border rounded-lg">{config?.icon}</div>
      <div className="flex flex-col">
        <span className="font-medium text-sm">{config?.text}</span>
        {"country" in config &&
          (config?.link && !disableLinks ? (
            <Link
              href={config?.country ?? "#"}
              className="text-sm hover:text-orange-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {all ? "" :config?.country}
            </Link>
          ) : (
            <span className="text-sm text-muted-foreground">{config?.country}</span>
          ))}
      </div>
    </div>
  )
}
