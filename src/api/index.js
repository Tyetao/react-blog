import http from '../http';
import apis from './api';

export function getArticleList(params = {}) {
    return http.get(apis.getArticleList, params);
}

export function getArticleDetails(params = 1) {
    return http.get(apis.getArticleDetails + '/' + params);
}

export function getClassify() {
    return http.get(apis.getClassify);
}

export function getClassifyArticle(params = {}) {
    return http.get(apis.getClassifyArticle, params);
}
