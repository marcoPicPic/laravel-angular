import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from "@angular/http";

import { Blog } from "../blog.interface";
import { BlogService } from "./../service/blog.service";

@Component({
  selector: 'ng-app-blogs-summary',
  templateUrl: './blog.list.summary.html'})

  export class BlogListSummary implements OnInit {
    blogs: Blog[];
  
    constructor(private blogService: BlogService) {
     
     }

    ngOnInit() {
      this.onGetBlogs();
    }

    onGetBlogs() {
      this.blogService.getBlogsSummary()
        .subscribe(
          (blogs: Blog[]) => this.blogs = blogs,
          (error: Response) => console.log(error)
        );
    }


  }