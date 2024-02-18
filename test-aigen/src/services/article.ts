import axios, { AxiosResponse } from 'axios';
import { url } from '../config/url';
import { Article } from './types';

async function fetchArticles(): Promise<Article[]> {
  try {
    const response: AxiosResponse<{ articles: Article[] }> = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default fetchArticles;
