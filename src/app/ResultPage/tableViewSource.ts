import { CompareList } from './compareResult';


export class TableViewSource {
    displayedColumns: string[] = [];
    sourceData: any[] = [];

    constructor(obj: CompareList) {
        if (obj) {
            obj.compareList.forEach(element => {

                if (element && element.properties && element.properties.size != 0) {
                    this.displayedColumns = [...element.properties.keys()];
                    this.sourceData.push(this.MapToObject(element.properties));
                }
            });
        }
    }

    MapToObject(maps: Map<string, any>): any {
        let obj = {};
        maps.forEach((value, key) => {
            if (key)
                obj[key] = value;
        })
        return obj;
    }
}