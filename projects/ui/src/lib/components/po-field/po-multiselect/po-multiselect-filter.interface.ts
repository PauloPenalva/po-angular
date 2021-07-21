import { Observable } from 'rxjs';

import { PoMultiselectOption } from './po-multiselect-option.interface';

/**
 * @usedBy PoMultiselectComponent
 *
 * @description
 *
 * Interface para os serviços que serão utilizados no po-multiselect.
 */
export interface PoMultiselectFilter {
  /**
   * Método responsável por retornar um Observable que contém uma coleção de objetos que seguem a interface PoMultiselectOption,
   * será informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.
   *
   * @param {any} params Objeto contendo a propriedade e o valor responsável por realizar o filtro. // melhorar tipagem
   * @param {any} filterParams Valor informado através da propriedade `p-filter-params`.
   */
  // getFilteredData(params: any, filterParams?: any): Observable<Array<PoMultiselectOption>>;
  getFilteredData(params: any, filterParams?: any);

  /**
   * Método responsável por retornar um Observable que contém apenas os objetos filtrados que seguem a interface PoMultiselectOption,
   * será informado por parametro valor a ser pesquisado.
   *
   * @param {string | number} value Valor responsável por realizar a busca de um único objeto. // aceitar vários valores
   * @param {any} filterParams Valor informado através da propriedade `p-filter-params`.
   */
  // getObjectsByValues(value: string | number, filterParams?: any): Observable<PoMultiselectOption>; // aceitar vários valores
  getObjectsByValues(value: string | number, filterParams?: any);
}
