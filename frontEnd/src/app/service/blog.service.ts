import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable()
export class BlogService {
 private apiUrl = "http://localhost/backEndBlog/public/api/";


  constructor(private http: Http, private authService: AuthService) {

  }

  addBlog(content: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: content});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.apiUrl + 'blog?token=' + token, body, {headers: headers})
  }

  getBlogs(): Observable<any> {
    return this.http.get(this.apiUrl +'blogs')
      .map(
        (response: Response) => {
          return response.json().blogs;
        }
      );
  }

  updateBlog(id: number, newContent: string) {
    const token = this.authService.getToken();
    const body = JSON.stringify({content: newContent});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put(this.apiUrl +'blog/' + id + '?token=' + token, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deleteQuote(id: number) {
    const token = this.authService.getToken();
    return this.http.delete('this.apiUrl + "blog/' + id + '?token=' + token);
  }
}
