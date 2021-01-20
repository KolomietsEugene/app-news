import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.mock";

@Injectable()
export class HttpService implements HttpInterceptor {
    baseUrl: string;

    constructor() {
        this.baseUrl = environment.backend;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            url: this.baseUrl + req.url
        })
        return next.handle(req);
    }
}