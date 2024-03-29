//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.3.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IIssue00016777Client {
    createOrUpdateIssue(issue: IssueCreateOrUpdateDto): Observable<number>;
    addOrDeleteIssueFromUser(addOrDeleteUserFormIssue: AddOrDeleteUserFormIssue): Observable<boolean>;
    getIssueById(issueId: number | undefined): Observable<IssueDTO>;
    deleteIssueById(issueId: number | undefined): Observable<boolean>;
    getAllIssues(filterBytitle: string | null | undefined): Observable<IssueDTO[]>;
}

@Injectable({
    providedIn: 'root'
})
export class Issue00016777Client implements IIssue00016777Client {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    createOrUpdateIssue(issue: IssueCreateOrUpdateDto): Observable<number> {
        let url_ = this.baseUrl + "/api/Issue00016777/CreateOrUpdateIssue";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(issue);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateOrUpdateIssue(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateOrUpdateIssue(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<number>;
                }
            } else
                return _observableThrow(response_) as any as Observable<number>;
        }));
    }

    protected processCreateOrUpdateIssue(response: HttpResponseBase): Observable<number> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    addOrDeleteIssueFromUser(addOrDeleteUserFormIssue: AddOrDeleteUserFormIssue): Observable<boolean> {
        let url_ = this.baseUrl + "/api/Issue00016777/AddOrDeleteIssueFromUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(addOrDeleteUserFormIssue);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddOrDeleteIssueFromUser(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddOrDeleteIssueFromUser(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<boolean>;
                }
            } else
                return _observableThrow(response_) as any as Observable<boolean>;
        }));
    }

    protected processAddOrDeleteIssueFromUser(response: HttpResponseBase): Observable<boolean> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getIssueById(issueId: number | undefined): Observable<IssueDTO> {
        let url_ = this.baseUrl + "/api/Issue00016777/GetIssueById?";
        if (issueId === null)
            throw new Error("The parameter 'issueId' cannot be null.");
        else if (issueId !== undefined)
            url_ += "issueId=" + encodeURIComponent("" + issueId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetIssueById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetIssueById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<IssueDTO>;
                }
            } else
                return _observableThrow(response_) as any as Observable<IssueDTO>;
        }));
    }

    protected processGetIssueById(response: HttpResponseBase): Observable<IssueDTO> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = IssueDTO.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    deleteIssueById(issueId: number | undefined): Observable<boolean> {
        let url_ = this.baseUrl + "/api/Issue00016777/DeleteIssueById?";
        if (issueId === null)
            throw new Error("The parameter 'issueId' cannot be null.");
        else if (issueId !== undefined)
            url_ += "issueId=" + encodeURIComponent("" + issueId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteIssueById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteIssueById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<boolean>;
                }
            } else
                return _observableThrow(response_) as any as Observable<boolean>;
        }));
    }

    protected processDeleteIssueById(response: HttpResponseBase): Observable<boolean> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getAllIssues(filterBytitle: string | null | undefined): Observable<IssueDTO[]> {
        let url_ = this.baseUrl + "/api/Issue00016777/GetAllIssues?";
        if (filterBytitle !== undefined && filterBytitle !== null)
            url_ += "filterBytitle=" + encodeURIComponent("" + filterBytitle) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllIssues(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllIssues(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<IssueDTO[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<IssueDTO[]>;
        }));
    }

    protected processGetAllIssues(response: HttpResponseBase): Observable<IssueDTO[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(IssueDTO.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export interface IUser0001677Client {
    getUserById(userId: number | undefined): Observable<UserDTO>;
    getAllUsers(searchText: string | null | undefined): Observable<UserDTO[]>;
    deleleUserById(userId: number | undefined): Observable<boolean>;
    createOrUpdateUser(userDTO: UserDTO): Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class User0001677Client implements IUser0001677Client {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    getUserById(userId: number | undefined): Observable<UserDTO> {
        let url_ = this.baseUrl + "/api/User0001677/GetUserById?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetUserById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetUserById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<UserDTO>;
                }
            } else
                return _observableThrow(response_) as any as Observable<UserDTO>;
        }));
    }

    protected processGetUserById(response: HttpResponseBase): Observable<UserDTO> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = UserDTO.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getAllUsers(searchText: string | null | undefined): Observable<UserDTO[]> {
        let url_ = this.baseUrl + "/api/User0001677/GetAllUsers?";
        if (searchText !== undefined && searchText !== null)
            url_ += "searchText=" + encodeURIComponent("" + searchText) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllUsers(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllUsers(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<UserDTO[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<UserDTO[]>;
        }));
    }

    protected processGetAllUsers(response: HttpResponseBase): Observable<UserDTO[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserDTO.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    deleleUserById(userId: number | undefined): Observable<boolean> {
        let url_ = this.baseUrl + "/api/User0001677/DeleleUserById?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleleUserById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleleUserById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<boolean>;
                }
            } else
                return _observableThrow(response_) as any as Observable<boolean>;
        }));
    }

    protected processDeleleUserById(response: HttpResponseBase): Observable<boolean> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    createOrUpdateUser(userDTO: UserDTO): Observable<boolean> {
        let url_ = this.baseUrl + "/api/User0001677/CreateOrUpdateUser";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(userDTO);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateOrUpdateUser(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateOrUpdateUser(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<boolean>;
                }
            } else
                return _observableThrow(response_) as any as Observable<boolean>;
        }));
    }

    protected processCreateOrUpdateUser(response: HttpResponseBase): Observable<boolean> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : <any>null;
    
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class IssueCreateOrUpdateDto implements IIssueCreateOrUpdateDto {
    id?: number | undefined;
    title?: string;
    description?: string;
    priority?: IssuePriority00016777;

    constructor(data?: IIssueCreateOrUpdateDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.description = _data["description"];
            this.priority = _data["priority"];
        }
    }

    static fromJS(data: any): IssueCreateOrUpdateDto {
        data = typeof data === 'object' ? data : {};
        let result = new IssueCreateOrUpdateDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["description"] = this.description;
        data["priority"] = this.priority;
        return data;
    }
}

export interface IIssueCreateOrUpdateDto {
    id?: number | undefined;
    title?: string;
    description?: string;
    priority?: IssuePriority00016777;
}

export enum IssuePriority00016777 {
    None = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    VerHigh = 4,
}

export class AddOrDeleteUserFormIssue implements IAddOrDeleteUserFormIssue {
    userIds?: number[];
    issueId?: number;

    constructor(data?: IAddOrDeleteUserFormIssue) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["userIds"])) {
                this.userIds = [] as any;
                for (let item of _data["userIds"])
                    this.userIds!.push(item);
            }
            this.issueId = _data["issueId"];
        }
    }

    static fromJS(data: any): AddOrDeleteUserFormIssue {
        data = typeof data === 'object' ? data : {};
        let result = new AddOrDeleteUserFormIssue();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.userIds)) {
            data["userIds"] = [];
            for (let item of this.userIds)
                data["userIds"].push(item);
        }
        data["issueId"] = this.issueId;
        return data;
    }
}

export interface IAddOrDeleteUserFormIssue {
    userIds?: number[];
    issueId?: number;
}

export class IssueDTO implements IIssueDTO {
    id?: number;
    title?: string;
    description?: string;
    priority?: IssuePriority00016777;
    createdDate?: Date;
    updateDate?: Date;
    users?: UserDTO[] | undefined;

    constructor(data?: IIssueDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.description = _data["description"];
            this.priority = _data["priority"];
            this.createdDate = _data["createdDate"] ? new Date(_data["createdDate"].toString()) : <any>undefined;
            this.updateDate = _data["updateDate"] ? new Date(_data["updateDate"].toString()) : <any>undefined;
            if (Array.isArray(_data["users"])) {
                this.users = [] as any;
                for (let item of _data["users"])
                    this.users!.push(UserDTO.fromJS(item));
            }
        }
    }

    static fromJS(data: any): IssueDTO {
        data = typeof data === 'object' ? data : {};
        let result = new IssueDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["description"] = this.description;
        data["priority"] = this.priority;
        data["createdDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        data["updateDate"] = this.updateDate ? this.updateDate.toISOString() : <any>undefined;
        if (Array.isArray(this.users)) {
            data["users"] = [];
            for (let item of this.users)
                data["users"].push(item.toJSON());
        }
        return data;
    }
}

export interface IIssueDTO {
    id?: number;
    title?: string;
    description?: string;
    priority?: IssuePriority00016777;
    createdDate?: Date;
    updateDate?: Date;
    users?: UserDTO[] | undefined;
}

export class UserDTO implements IUserDTO {
    id?: number;
    fullName?: string;
    userName?: string;
    birthDate?: Date | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    sex00016777?: Sex00016777;

    constructor(data?: IUserDTO) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.fullName = _data["fullName"];
            this.userName = _data["userName"];
            this.birthDate = _data["birthDate"] ? new Date(_data["birthDate"].toString()) : <any>undefined;
            this.email = _data["email"];
            this.phoneNumber = _data["phoneNumber"];
            this.sex00016777 = _data["sex00016777"];
        }
    }

    static fromJS(data: any): UserDTO {
        data = typeof data === 'object' ? data : {};
        let result = new UserDTO();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["fullName"] = this.fullName;
        data["userName"] = this.userName;
        data["birthDate"] = this.birthDate ? this.birthDate.toISOString() : <any>undefined;
        data["email"] = this.email;
        data["phoneNumber"] = this.phoneNumber;
        data["sex00016777"] = this.sex00016777;
        return data;
    }
}

export interface IUserDTO {
    id?: number;
    fullName?: string;
    userName?: string;
    birthDate?: Date | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    sex00016777?: Sex00016777;
}

export enum Sex00016777 {
    NotSet = 0,
    Man = 1,
    Woman = 2,
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}