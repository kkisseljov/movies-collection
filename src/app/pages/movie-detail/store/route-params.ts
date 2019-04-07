export function retrieveIdFromUrl(url: string) {
    const match = url.match(/(?<=\\?id=).*/);
    return !!match && match.length ? +match[0] : -1;
}
