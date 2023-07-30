/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BrancheCreateDto } from '../models/branche-create-dto';
import { BrancheDto } from '../models/branche-dto';

@Injectable({
  providedIn: 'root',
})
export class BrancheControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBranchen
   */
  static readonly GetBranchenPath = '/api/branche';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBranchen()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranchen$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<BrancheDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BrancheControllerService.GetBranchenPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BrancheDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBranchen$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranchen(params?: {
  },
  context?: HttpContext

): Observable<Array<BrancheDto>> {

    return this.getBranchen$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<BrancheDto>>) => r.body as Array<BrancheDto>)
    );
  }

  /**
   * Path part for operation update1
   */
  static readonly Update1Path = '/api/branche';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1$Response(params: {
    body: BrancheDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BrancheControllerService.Update1Path, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1(params: {
    body: BrancheDto
  },
  context?: HttpContext

): Observable<void> {

    return this.update1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation create1
   */
  static readonly Create1Path = '/api/branche';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create1$Response(params: {
    body: BrancheCreateDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, BrancheControllerService.Create1Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create1(params: {
    body: BrancheCreateDto
  },
  context?: HttpContext

): Observable<string> {

    return this.create1$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getBranche
   */
  static readonly GetBranchePath = '/api/branche/{brancheUUID}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBranche()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranche$Response(params: {
    brancheUUID: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BrancheDto>> {

    const rb = new RequestBuilder(this.rootUrl, BrancheControllerService.GetBranchePath, 'get');
    if (params) {
      rb.path('brancheUUID', params.brancheUUID, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BrancheDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBranche$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranche(params: {
    brancheUUID: string;
  },
  context?: HttpContext

): Observable<BrancheDto> {

    return this.getBranche$Response(params,context).pipe(
      map((r: StrictHttpResponse<BrancheDto>) => r.body as BrancheDto)
    );
  }

  /**
   * Path part for operation delete1
   */
  static readonly Delete1Path = '/api/branche/{brancheUUID}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: {
    brancheUUID: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BrancheControllerService.Delete1Path, 'delete');
    if (params) {
      rb.path('brancheUUID', params.brancheUUID, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: {
    brancheUUID: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getBrancheByFachCode
   */
  static readonly GetBrancheByFachCodePath = '/api/branche/fachCode/{fachCode}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBrancheByFachCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBrancheByFachCode$Response(params: {
    fachCode: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<BrancheDto>> {

    const rb = new RequestBuilder(this.rootUrl, BrancheControllerService.GetBrancheByFachCodePath, 'get');
    if (params) {
      rb.path('fachCode', params.fachCode, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BrancheDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBrancheByFachCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBrancheByFachCode(params: {
    fachCode: string;
  },
  context?: HttpContext

): Observable<BrancheDto> {

    return this.getBrancheByFachCode$Response(params,context).pipe(
      map((r: StrictHttpResponse<BrancheDto>) => r.body as BrancheDto)
    );
  }

}
