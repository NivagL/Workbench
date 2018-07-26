import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigurationService } from './configuration.service';

export class DataService<T> {
  private loaded_list: Array<T>;
  private list: BehaviorSubject<Array<T>>;
  private item: BehaviorSubject<T>;
    
  constructor( public name: string,
      public config: ConfigurationService,
      public http: HttpClient) {

      let list = new Array<T>();
      this.list = new BehaviorSubject<Array<T>>(list);
      let item = {} as T;
      this.item = new BehaviorSubject<T>(item);
      this.loaded_list = new Array<T>();

      this.getInputData();
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////

  public clearServiceData() {
      while(this.loaded_list.length > 0) {
          this.loaded_list.pop();
      }    
  }

  private getInputData() {
    if(this.config.getConfiguration('useDataFiles'))
    {
      let path: string = this.config.getConfiguration('dataFilePath'); 
      let dataPath: string = path + this.name + '.json';
      this.http.get(dataPath).subscribe(
        (data: T[]) => {
            this.loaded_list = data;
            // console.log('ListService.getInputData event: ' + this.name);
            this.loaded_list.sort();
            this.list.next(this.loaded_list);
            this.item.next(this.loaded_list[0]);
        },
      err => console.log(this.name + ' Service, Error loading data from file ' + path + ': ' + err),
      () => { console.log(this.name + ' Service, loaded data from file: ' + path);
      });
    }
    else {
      let url: string = this.config.getConfiguration('dataUrl');
      let dataUrl: string = url + "api\\" + this.name;
      this.http.get(dataUrl).subscribe(
        (data: T[]) => {
            this.loaded_list = data;
            // console.log('ListService.getInputData event: ' + this.name);
            this.loaded_list.sort();
            this.list.next(this.loaded_list);
            this.item.next(this.loaded_list[0]);
        },
      err => console.log(this.name + ' Service, Error loading data from url ' + url + ': ' + err),
      () => { console.log(this.name + ' Service, loaded data from url: ' + url);
      });
    }
  }
  
  public getLoadedList(): Array<T> {
      return this.loaded_list;
  }
  
  public getList(): Observable<Array<T>> {
      return this.list;
  }

  public getItem(): Observable<T> {
    return this.item;
  }
}