import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter } from './po-multiselect-filter.interface';
import { PoMultiselectOption } from './po-multiselect-option.interface';
import { PoResponse } from './po-response.interface';
import { validateObjectType } from '../../../utils/util';

/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço padrão utilizado para filtrar os dados do componente po-combo.
 */
@Injectable()
export class PoMultiselectFilterService implements PoMultiselectFilter {
  fieldLabel: string = 'label';
  fieldValue: string = 'value';

  readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-No-Message': 'true'
  });

  private _url: string;
  private messages = [];

  get url(): string {
    return this._url;
  }

  constructor(private http: HttpClient) {}

  // getFilteredData(param: any, filterParams?: any): Observable<Array<PoMultiselectOption>> {
  getFilteredData(param?: any, filterParams?: any) {
    // const value = param.value;
    // const filterParamsValidated = validateObjectType(filterParams);

    // const params = { ...filterParamsValidated, filter: value };

    // return this.http
    //   .get(`${this.url}`, { responseType: 'json', params, headers: this.headers })
    //   .pipe(map((response: PoResponse) => this.parseToArrayMultiselectOption(response.items)));
    console.log('getFilteredData, param: ', param, 'filterParams: ', filterParams);
  }

  // getObjectsByValues(value: string | number, filterParams?: any): Observable<PoMultiselectOption> {
  getObjectsByValues(value: string | number, filterParams?: any) {
    // const filterParamsValidated = validateObjectType(filterParams);

    // return this.http
    //   .get(`${this.url}/${value}`, { params: filterParamsValidated, headers: this.headers })
    //   .pipe(map(item => this.parseToMultiselectOption(item)));
    console.log('getObjectsByValues, value: ', value, 'filterParams: ', filterParams);
  }

  // configProperties(url: string, fieldLabel: string, fieldValue: string) {
  //   this._url = url;
  //   this.fieldLabel = fieldLabel;
  //   this.fieldValue = fieldValue;
  // }

  // private parseToArrayMultiselectOption(items: Array<any>): Array<PoMultiselectOption> {
  //   if (items && items.length > 0) {
  //     const parsedOptions = items.map(item => this.parseToMultiselectOption(item));

  //     this.displayMessages();

  //     return parsedOptions;
  //   }

  //   return [];
  // }

  // private parseToMultiselectOption(item: any): PoMultiselectOption {
  //   if (!item?.[this.fieldValue]) {
  //     this.addMessage(item, this.fieldValue);

  //     return { value: '' };
  //   }

  //   const label = item[this.fieldLabel];
  //   const value = item[this.fieldValue];

  //   return { label, value };
  // }

  // private addMessage(item, property: string) {
  //   this.messages.push(`Cannot read property "${property}" of ${JSON.stringify(item)},
  //     see [p-field-value] property at https://po-ui.io/documentation/po-combo`);
  // }

  // private displayMessages() {
  //   if (this.messages.length) {
  //     this.messages.forEach(message => console.error(message));

  //     this.messages = [];
  //   }
  // }
}
