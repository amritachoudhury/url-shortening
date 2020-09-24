import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AppComponentService {

    private readonly _baseUrl: string = 'https://rel.ink/api/links/';
    public constructor(private readonly _http: HttpClient) {}

    public postShortenedURL(inputURL: string): Observable<any> {
        return this._http.post(`${this._baseUrl}`, {url: inputURL});
    }

    public getShortenedURL(hashKey: string): Observable<any> {
        return this._http.get(`${this._baseUrl}${hashKey}`);
    }
}