// fetch events from the API
export const eventsData = async (type?: 'past' | 'upcoming') => {
    let url = 'https://prod.masata.app/api/events/public/branch/19';
    
    // Add the type parameter to URL if provided
    if (type) {
        url = `${url}?type=${type}`;
    }
    
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'masa_qhQVnKQAN0drmxGkChveqLlChidHbAwIP2ZSKvVJKQQ',
        },
    })
    return res.json()
}
// fetch event by id from the API
export const eventData = async (id: string | string[]) => {
    const res = await fetch(`https://prod.masata.app/api/events/public/branch/19/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'masa_qhQVnKQAN0drmxGkChveqLlChidHbAwIP2ZSKvVJKQQ',
        },
    })
    return res.json()
}