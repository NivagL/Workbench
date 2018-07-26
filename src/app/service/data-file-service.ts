import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigurationService } from './configuration.service';

export class DataFileLoader<T> {
    private list: BehaviorSubject<Array<T>>;
      
    constructor( public name: string,
        public config: ConfigurationService,
        public http: HttpClient) {

        let list = new Array<T>();
        this.list = new BehaviorSubject<Array<T>>(list);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////

    public getInputData(path: string): Observable<Array<T>> {
        this.http.get(path).subscribe(
        (data: T[]) => {
            data.sort();
            this.list.next(data);
        },
        err => console.log(this.name + ' Service, Error loading data files at:' + path + ': ' + err),
        () => { console.log(this.name + ' Service, loaded data files from: ' + path);
        });
        return this.list;
    }
}