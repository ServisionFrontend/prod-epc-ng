import { Injectable } from "@angular/core";

import { Headers, Http } from "@angular/http";

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BaseHttp } from '../../../base/base-http';


@Injectable()

export class BrandService extends BaseHttp {

    private brandUrl = this.globalConfig['path'] + '/mapping/lnks';
    private getSeriesUrl = this.globalConfig['path'] + '/mapping/lnks';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    // constructor(private http: Http) {
    //     super();
    // }

    initBrand(): Observable<any> {

        return this.http
            .get(this.brandUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getSeriesList(params: string): Observable<any> {
        let url = this.getSeriesUrl + '?' + params;
        return this.http
            .get(url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error);
        return Observable.of<any>([]);
    }
}
