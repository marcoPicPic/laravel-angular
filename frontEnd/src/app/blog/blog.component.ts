import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Response } from "@angular/http";

import { Blog } from "../blog.interface";
import { BlogService } from "./../service/blog.service";

@Component({
  selector: 'app-blogs',
  templateUrl: './blog.component.html'})

  export class BlogComponent implements OnInit {
    blogs: Blog[];
  

    constructor(private blogService: BlogService) {
     
     }

    ngOnInit() {
    }

    onGetBlogs() {
      this.blogService.getBlogs()
        .subscribe(
          (blogs: Blog[]) => this.blogs = blogs,
          (error: Response) => console.log(error)
        );
    }


  }
