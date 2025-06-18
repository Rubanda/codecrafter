// fetch events from the API
export const posts = async () => {
    const res = await fetch('https://prod.masata.app/api/post/site', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
       cache: 'no-cache', 
        
    })
    return res.json()
}
// fetch event by id from the API
export const post = async (slug: string ) => {
    const res = await fetch(`https://prod.masata.app/api/post/site/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
       cache: 'no-cache',
    })
    return res.json()
}