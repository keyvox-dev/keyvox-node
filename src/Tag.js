class Tag {
    constructor(apiKey, baseURL, fetchDataMethod) {
        this.apiKey = apiKey;
        this.baseURL = baseURL;
        this.fetchDataMethod = fetchDataMethod;
    }

    async list(options) {
        const url = `${this.baseURL}/tags`;
        return await this.fetchDataMethod(url, options);
    }

    async retrieve(idOrSlug) {
        const url = `${this.baseURL}/tags/${idOrSlug}`;
        return await this.fetchDataMethod(url)
    }
}

export default Tag;