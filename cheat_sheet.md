# ✅ Angular Cheat Sheet (v4) – Core Concepts, Signals, and Patterns

## 🛠️ CLI Commands

```sh

ng new my-app                    # Create new app
ng serve                         # Dev server
ng generate component name       # Generate component
ng generate service name         # Generate service
ng build                         # Production build
```

## 🧱 Component Basics

```ts
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ExampleComponent {
  name = 'Angular';
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}
```

```html
<h1>Hello {{ name }}</h1>
<button (click)="sayHello()">Click Me</button>
```

## 📦 Signals

Signals are a reactive state mechanism in Angular.

```ts

import { signal, computed } from '@angular/core';

count = signal(0);
doubleCount = computed(() => this.count() * 2);

increment(): void {
  this.count.update(c => c + 1);
}
```

```html
<p>Count: {{ count() }}</p>
<p>Double: {{ doubleCount() }}</p>
<button (click)="increment()">+</button>
```

## 🧩 Directives

**Directives** add behavior to DOM elements.

- **\*ngIf** - Conditionally show elements
- **\*ngFor** - Loop through lists
- **[ngClass]** - Toggle CSS classes
- **[class.active]** - Apply class if value is true

## 🧪 Pipes

**Pipes** transform data in the template.

```html
{{ price | currency:'USD' }} {{ today | date:'shortDate' }} Use @Pipe() to
create custom pipes.
```

## 📍 Route

```ts
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layout/main/main.component').then((m) => m.MainLayoutComponent),
  },
  { path: '**', redirectTo: '' },
];
```

## 🔐 Route Guard

```ts
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.isLoggedIn ? true : inject(Router).createUrlTree(['/']);
};
```

## 📋 Reactive Forms

```ts
form = new FormGroup({
  name: new FormControl('', Validators.required),
});
```

```html
<form [formGroup]="form" (ngSubmit)="submit()">
  <input formControlName="name" />
</form>
```

## 🖱️ Events & Bindings

```html
<button (click)="doThing()">Click</button>
<img [src]="photoUrl" />
<input [(ngModel)]="value" />
```

## 🧠 Lifecycle Hooks

- **ngOnInit()** - Runs once after init
- **ngOnDestroy()** - Runs once before destroy
- **ngAfterViewInit()** - Runs after DOM renders

## 🔧 CRUD Service Example

item.model.ts

```ts
export interface Item {
  id: number;
  name: string;
}
```

item.service.ts

```ts
@Injectable({ providedIn: 'root' })
export class ItemService {
  private baseUrl = '/api/items';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  getById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }

  create(item: Partial<Item>): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item);
  }

  update(id: number, item: Partial<Item>): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
```

## ✨ Signals vs. Getters vs. Observables

- **signal()** - Local reactive state
- **computed()** - Derived/calculated values
- **RxJS Observable** - Form or event streams

RxJS lets you treat data as a stream—you can listen to it, transform it, filter it, or combine it just like you'd work with an array using map, filter, and reduce.
