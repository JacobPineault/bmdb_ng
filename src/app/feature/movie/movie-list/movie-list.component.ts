import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  // movies will hold out list of movies from backend
  // will be one way boumd to html to provide a table view of movies
  movies: Movie[] = [];

  constructor() {}

  // service calls for the page
  ngOnInit(): void {
    // call out movie service to populate the list of movies
  }
}
