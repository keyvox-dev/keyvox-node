class Article {
    constructor(apiKey, baseURL, fetchDataMethod) {
        this.apiKey = apiKey;
        this.baseURL = baseURL;
        this.fetchDataMethod = fetchDataMethod
    }

    async list(options) {
        const url = `${this.baseURL}/articles`
        return await this.fetchDataMethod(url, options)
    }

    async retrieve(idOrSlug, options) {
        const url = `${this.baseURL}/articles/${idOrSlug}`
        return await this.fetchDataMethod(url, options)
    }
}

export default Article;