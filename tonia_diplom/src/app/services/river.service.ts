// river.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { River } from '../shared/models/river.model';

@Injectable({
  providedIn: 'root'
})
export class RiverService {

  // Mock data for demonstration purposes
  private rivers: River[] = [
    { name: 'Dnipro', location: 'Kyiv', dateTime: new Date(), waterLevel: 10, photoUrl: 'https://www.5.ua/media/pictures/original/152596.jpg?t=1541510014'  },
    { name: 'Dnister', location: 'Lviv', dateTime: new Date(), waterLevel: 8,photoUrl: 'https://te.20minut.ua/img/cache/news_main/news/0031/87/3086614-na-ternopilschini-zris-riven-vodi-u-dnistri-ale-bez-negativnih-naslidkiv-dsns.jpeg?hash=2023-06-12-15-43-08'  },
    { name: 'Desna', location: 'Chernihiv', dateTime: new Date(), waterLevel: 7,photoUrl: 'https://rubryka.com/wp-content/uploads/2022/10/U-CHernigivskiy-oblasti-na-richtsi-Desna-zafiksuvaly-rizkyy-pidy-om-vody-.jpeg'  },
    { name: 'Southern Buh', location: 'Mykolaiv', dateTime: new Date(), waterLevel: 12,photoUrl: 'https://mk-vodres.davr.gov.ua/sites/default/files/news_image//76.jpg'  },
    { name: 'Dnister', location: 'Ivano-frankivsk', dateTime: new Date(), waterLevel: 8,photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Do_Strypy.JPG/450px-Do_Strypy.JPG'  },
    // Add more rivers as needed
  ];

  constructor() { }

  // Method to get all rivers
  getRivers(): Observable<River[]> {
    return of(this.rivers); // Return an observable of the rivers array
  }
}
