import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {BaseComponent} from '../../../base/base-component';
import { BrandService } from './brand.service';
import { SubjectService } from '../../../services/subject.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'brand-series',
    templateUrl: './brand-series.html',
    styleUrls: ['./brand-series.scss'],
    providers: [BrandService]
})
export class BrandSeriesComponent extends BaseComponent implements OnInit {

    brands: any;
    seriesList: any;
    drivenList: any;
    configall;
    seriesId;
    yearIsExpand: boolean;
    modelIsExpand: boolean;

    constructor(private brandservice: BrandService, private subjectservice: SubjectService, private router: Router) {
        super();
    }

    getBrand():void{

    }

    getSeriesList(id?: string): any {
        // let p = 'm_1=' + id;
        // this.catalogService.getSeriesList(p).subscribe(res => {
        //     this.seriesList = res;
        // });
        //TODO TEST
        return this.seriesList = [{
            id: '1',
            code: '1',
            name: 'D90'
        }, {
            id: '2',
            code: '2',
            name: 'D80'
        }];
    }

    getConfigAll(id?: string): void {

        this.subjectservice.publish("getConfig", {id:id})
    }

    onClickBrand(params: Object): void {
        this.getSeriesList(params["id"]);
    }

    onClickSeries(series: Object): void {
        this.seriesId = series['id'];
       // this.router.navigate(['/catalog','test']);

       // this.getConfigAll();
    }

    onExpand(key: string): void {
        if (key == "year") {
            this.yearIsExpand = true;
        } else if (key == "model") {
            this.modelIsExpand = true;
        }
    }

    onCollapse(key: string): void {
        if (key == "year") {
            this.yearIsExpand = false;
        } else if (key == "model") {
            this.modelIsExpand = false;
        }
    }

    ngOnInit() {
        // this.brandservice.initBrand().subscribe(res => {
        //     if (res.length) {
        //         this.getSeriesList(res[0]["id"]);
        //     }

        //     this.brands = res;
        // });

        var series = this.getSeriesList();
        this.seriesId = series[0].id;
        this.getConfigAll(this.seriesId);

    }
}
