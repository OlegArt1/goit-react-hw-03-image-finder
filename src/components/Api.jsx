import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12";

export const fetchApi = async (apiUrl, apiKey, searchText, amount) =>
{
    const response = await axios.get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&orientation=horizontal&per_page=${amount}&safesearch=true`,
    {
        params:
        {
            searchText: searchText,
            amount: amount,
            apiUrl: apiUrl,
            apiKey: apiKey,
        },
    });
    return response.data.hits;
}