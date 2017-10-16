import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { BaseComponent } from '../../../base/base-component';
import { SubjectService } from '../../../services/subject.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'search-condition',
    templateUrl: './search-condition.html',
    styleUrls: ['./search-condition.scss']
})
export class SearchConditionComponent extends BaseComponent implements OnInit {

    configAll: any = {};
    drivenIsExpand: boolean;
    modelIsExpand: boolean;
    transboxIsExpand: boolean;
    tempCount: number= 0;
    constructor(private subjectservice: SubjectService) {
        super();
    }

    getConfigAll(params?: any): void {

        this.configAll = {
            drivenList: [{
                name: '右舵+4X2（两驱）'
            }, {
                name: '右舵+4X4（四驱）'
            }, {
                name: '左舵+4X2（两驱）'
            }, {
                name: '左舵+4X2（两驱）'
            }, {
                name: '左舵+4X2（两驱）'
            }, {
                name: '左舵+4X2（两驱）'
            }, {
                name: '左舵+4X2（两驱）'
            }],
            modelList: [{
                name: '旗舰版'
            }, {
                name: '精英版'
            }, {
                name: '豪华版'
            }, {
                name: '豪华版'
            }, {
                name: '豪华版'
            }, {
                name: '豪华版'
            }, {
                name: '豪华版'
            }, {
                name: '豪华版'
            }],
            transboxList: [{
                name: '6AT 邦奇'
            }, {
                name: '6AT 邦奇2'
            }, {
                name: '9AT 邦奇3'
            }, {
                name: '6AT 邦奇4'
            }, {
                name: '6AT 邦奇4'
            }, {
                name: '6AT 邦奇4'
            }, {
                name: '6AT 邦奇4'
            }, {
                name: '6AT 邦奇4'
            }, {
                name: '6AT 邦奇4'
            }]
        };
        if (this.tempCount){
            this.configAll.drivenList.length = 6;
            this.configAll.modelList.length = 7;
            this.configAll.transboxList.length = 8;
            this.tempCount = 0;
        }else{
            this.configAll.drivenList.length = 2;
            this.configAll.modelList.length = 3;
            this.configAll.transboxList.length =4;
            this.tempCount = 1;
        }
    }

    onExpand(key: string): void {
        if (key == "driven") {
            this.drivenIsExpand = true;
        } else if (key == "model") {
            this.modelIsExpand = true;
        } else if (key == "transbox") {
            this.transboxIsExpand = true;
        }
    }

    onCollapse(key: string): void {
        if (key == "driven") {
            this.drivenIsExpand = false;
        } else if (key == "model") {
            this.modelIsExpand = false;
        } else if (key == "transbox") {
            this.transboxIsExpand = false;
        }
    }

    ngOnInit() {
        this.subjectservice.subscribe("getConfig", this.getConfigAll.bind(this));
    }
}
