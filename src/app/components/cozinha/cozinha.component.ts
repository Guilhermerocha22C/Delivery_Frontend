import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishService, Dish } from '../../services/dish.service';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CozinhaComponent implements OnInit {
  orders: Dish[] = [];
  selectedStatus: { [key: number]: string } = {};

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.dishService.getOrders().subscribe((data: Dish[]) => {
      this.orders = data;
      this.orders.forEach(order => {
        if (order.id !== undefined) {
          this.selectedStatus[order.id] = order.status || 'STATUS';
        }
      });
    });
  }

  selectStatus(event: Event, orderId: number, status: string): void {
    event.preventDefault();
    if (orderId !== undefined) {
      this.selectedStatus[orderId] = status;
      this.dishService.updateOrderStatus(orderId, status).subscribe(
        () => {
          console.log(`Status do pedido ${orderId} atualizado para ${status}`);
        },
        error => {
          console.error('Erro ao atualizar o status:', error);
          this.selectedStatus[orderId] = this.orders.find(o => o.id === orderId)?.status || 'STATUS';
        }
      );
    }
  }

  getStatusButtonClass(orderId: number): string {
    const status = this.selectedStatus[orderId];
    switch (status) {
      case 'FEITO':
        return 'feito';
      case 'ENVIADO P/ ENTREGA':
        return 'enviado';
      case 'ENTREGUE':
        return 'entregue';
      default:
        return '';
    }
  }
}