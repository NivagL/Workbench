import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  private dataUrl_default: string = 'https://localhost:';
  private dataFilePath_default: string = './assets/data/';
  private useDataFiles_default: boolean = false;
  private appName_default = 'Northpower Contracting Workbench'

  constructor() {
    this.checkDefault('dataFilePath', this.dataFilePath_default);
    this.checkDefault('dataUrl', this.dataUrl_default);
    this.checkDefault('useDataFiles', this.useDataFiles_default);
    this.checkDefault('appName', this.appName_default);
  }

  checkDefault<T>(name: string, defaultValue: T) {
    let item = localStorage.getItem(name);
    if(item == undefined || item.length == 0) {
      let configValue = JSON.stringify(defaultValue);
      localStorage.setItem(name, configValue);
    }
  }

  public getConfiguration<T>(name: string): T {
    let configString = localStorage.getItem(name);
    let configValue: T = JSON.parse(configString);
    return configValue;
  }

  public setConfiguration<T>(name: string, value: T) {
    let configString = JSON.stringify(value);
    localStorage.setItem(name, configString);
  }

  private chr4(){
    return Math.random().toString(16).slice(-4);
  }

  public uniqueID(){
    return this.chr4() + this.chr4() +
      '-' + this.chr4() +
      '-' + this.chr4() +
      '-' + this.chr4() +
      '-' + this.chr4() + this.chr4() + this.chr4();
  }
}
