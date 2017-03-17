import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

function unwrapDataFromResponse(res) {
    return res.json();
}

@Injectable()
export class ReleaseDataManager {

    constructor(private http: Http) { }

    getData() {
        return this.http.get('http://localhost:8085/releases')
            .map(unwrapDataFromResponse)
    }
}