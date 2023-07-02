import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Verwalten', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Branche', icon: 'pi pi-fw pi-id-card', routerLink: ['/branchen'] },
                    { label: 'Kontakt anlegen', icon: 'pi pi-fw pi-id-card', routerLink: ['/contact'] }
                ]
            }
        ];
    }
}
