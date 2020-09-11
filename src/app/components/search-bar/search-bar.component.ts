import { Component, OnInit } from '@angular/core';
import { AngularTestService } from '../../services/angular-test.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private service: AngularTestService) { }

  ngOnInit(): void {
  }
  
  onSearchChange(value){
    this.service.changeCity(value);
  }


}
