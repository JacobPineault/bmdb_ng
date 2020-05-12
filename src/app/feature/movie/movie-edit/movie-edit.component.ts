import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css'],
})
export class MovieEditComponent implements OnInit {
  title: string = 'Movie-Edit';
  movie: Movie = new Movie();

  constructor() {}

  ngOnInit(): void {}

  save() {}
}
