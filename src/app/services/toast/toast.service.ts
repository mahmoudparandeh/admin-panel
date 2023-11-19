import {inject, Injectable} from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root',
  deps: [MessageService]
})
export class ToastService {
  messageService = inject(MessageService);

  showSuccess(detail: string, life = 3000, summary = 'Success Message'): void {
    this.messageService.add({ key: 'toast', severity: 'success', summary , detail, life });
  }

  showError(detail: string, life = 10000, summary = 'Error Message'): void {
    this.messageService.add({ key: 'toast', severity: 'error', summary, detail, life });
  }

  showWarn(detail: string, life = 7500, summary = 'Warning Message'): void {
    this.messageService.add({ key: 'toast', severity: 'warn', summary, detail, life });
  }

  showInfo(detail: string, life = 7500, summary = 'Info Message'): void {
    this.messageService.add({ key: 'toast', severity: 'info', summary, detail, life });
  }
}
