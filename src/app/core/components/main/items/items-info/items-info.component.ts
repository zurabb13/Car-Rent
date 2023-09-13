import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemsService } from '../../../../shared/services/items.service';

export interface Cars {
  name: string;
  type: string;
  mileage: number;
  cost: number;
  interest: number;
}
@Component({
  selector: 'app-items-info',
  templateUrl: './items-info.component.html',
  styleUrls: ['./items-info.component.scss'],
})
export class ItemsInfoComponent implements OnInit {
  @Output() popularCars = new EventEmitter<any>();
  cars: any = [];

  constructor(private service: ItemsService) {}

  ngOnInit() {
    this.service.getItems().subscribe((res: any) => {
      console.log(res);
      this.cars = res.popular;
    });
  }
  selectCar() {
    this.popularCars.emit(this.cars);
  }
}
