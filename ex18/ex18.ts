import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Direct JSON import as backup
const customerJsonData = [
  {
    "CustomerTypeId": 1,
    "CustomerTypeName": "VIP",
    "Customers": [
      {
        "Id": "Cus123",
        "Name": "Obama",
        "Email": "obama@gmail.com",
        "Age": 67,
        "Image": "https://images.ctfassets.net/l7h59hfnlxjx/582Lx8AhvXHgRLXagk73lV/ef827f6b381202b112b61e218d8e3154/President_Obama_Headshot__Economic_Inclusion___Photo_by_Pari_Dukovic_courtesy_of_Penguin_Random_House_.jpg?q=75&w=1014&fm=webp"
      },
      {
        "Id": "Cus456",
        "Name": "Kim Jong Un",
        "Email": "kimjongun@gmail.com",
        "Age": 38,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzQoOEJ3iOBpG2eQwCE0EXPNBaynvL0hoiMkHZXzA3Q&s=10"
      },
      {
        "Id": "Cus789",
        "Name": "Vladimir Putin",
        "Email": "putin@gmail.com",
        "Age": 58,
        "Image": "https://upload.wikimedia.org/wikipedia/commons/6/65/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
      },
      {
        "Id": "Cus101",
        "Name": "Donald Trump",
        "Email": "trump@gmail.com",
        "Age": 75,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDbPY19ZmXRhVym1SL5UWNBRTk2OrgVZWbeyzVdsXGg&s=10"
      },
      {
        "Id": "Cus102",
        "Name": "Joe Biden",
        "Email": "biden@gmail.com",
        "Age": 78,
        "Image": "https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=original"
      }
    ]
  }
];

interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

interface CustomerType {
  CustomerTypeId: number;
  CustomerTypeName: string;
  Customers: Customer[];
}

@Component({
  selector: 'app-ex18',
  templateUrl: './ex18.html',
  styleUrls: ['./ex18.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Ex18 implements OnInit {

  customerTypes: CustomerType[] = [];

  constructor(private http: HttpClient) {
    console.log('Ex18 Component initialized');
  }

  ngOnInit(): void {
    console.log('=== Ex18 ngOnInit started ===');
    console.log('HttpClient available:', !!this.http);
    
    // Use direct import data as primary source
    console.log('✅ Using direct import data');
    this.customerTypes = customerJsonData as CustomerType[];
    console.log('✅ customerTypes assigned:', this.customerTypes.length, 'types');
    
    // Also try HTTP as secondary check
    this.http.get<CustomerType[]>('assets/customer.json').subscribe({
      next: (data) => {
        console.log('✅ HTTP data also loaded:', data);
        console.log('🔄 Replacing direct import with HTTP data');
        this.customerTypes = data;
      },
      error: (err) => {
        console.warn('⚠️ HTTP failed, keeping direct import data:', err.message);
      }
    });
  }
}