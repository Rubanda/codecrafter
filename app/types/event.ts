export interface Event {
  id: string;
  name: string;
  title?: string;
  description: string;
  date: string;
  startTime: string;
  location: string;
  category?: string;
  imageUrl?: string;
  attendees?: number;
  maxAttendees?: number;
  calendar?: {
    name: string;
    description?: string;
    avatar?: string;
  };
} 