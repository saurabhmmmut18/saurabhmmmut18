import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class TestService{
    
    constructor(private httpClient: HttpClient) {
    
    }

    getCatFact(): Observable<any>{
        return this.httpClient.get('https://catfact.ninja/fact');
    }
}