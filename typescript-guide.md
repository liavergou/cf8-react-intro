# TypeScript - Απλός Οδηγός για Αρχάριους

## Τι είναι το TypeScript;
Το TypeScript είναι JavaScript με **τύπους**. Μας βοηθάει να γράφουμε πιο ασφαλή κώδικα.

## Βασικοί Τύποι

```typescript
// String (κείμενο)
let name: string = "Maria";

// Number (αριθμός)
let age: number = 25;

// Boolean (αληθές/ψευδές)
let isAdmin: boolean = true;

// Any (οποιοσδήποτε τύπος - αποφύγετέ το!)
let id: any = "CF8";
id = 123; // OK αλλά όχι καλή πρακτική
```

## Interface vs Type - Πότε Χρησιμοποιούμε Τι

### 📋 Interface = Σχήμα Αντικειμένου
Χρησιμοποιείτε το για να περιγράψετε πώς μοιάζει ένα object.

```typescript
interface User {
    id: string;
    name: string;
    age?: number; // το ? σημαίνει προαιρετικό
}

const user: User = {
    id: "123",
    name: "John"
    // age δεν είναι απαραίτητο
};
```

### 🔧 Type = Ψευδώνυμο για Τύπους
Χρησιμοποιείτε το για unions, tuples και σύνθετους τύπους.

```typescript
// Union - μπορεί να είναι ένα από τα δύο
type UserRole = 'admin' | 'user' | 'guest';
type ID = string | number;

// Tuple - array με συγκεκριμένη σειρά τύπων
type Point = [number, number];
const coordinates: Point = [10, 20];

// Intersection - συνδυάζει δύο τύπους
type Person = {name: string};
type Employee = {company: string};
type PersonEmployee = Person & Employee; // ΠΡΕΠΕΙ να έχει ΚΑΙ τα δύο

const worker: PersonEmployee = {
    name: "John",      // από Person
    company: "Tech Corp" // από Employee
};
```

## Διαφορές Interface vs Type

| Interface | Type |
|-----------|------|
| ✅ Επεκτάσιμο (declaration merging) | ❌ Στατικό |
| ✅ Καλό για objects | ✅ Καλό για unions/tuples |
| ✅ Παρόμοιο με Java interfaces | ✅ Πιο ευέλικτο |

```typescript
// Declaration merging - ΜΟΝΟ με interface
interface User {
    name: string;
}

interface User { // Ενώνεται με το παραπάνω!
    age: number;
}

// Τώρα το User έχει name ΚΑΙ age
```

## Σύγκριση JavaScript vs TypeScript

| JavaScript | TypeScript |
|------------|------------|
| `boolean` (true, false) | `boolean` |
| `number` (int, float, NaN) | `number` |
| `string` ("text", 'text', \`template\`) | `string` |
| `null` | `null` |
| `undefined` | `undefined` |
| `object` (οποιασδήποτε μορφής) | `object`, `interface`, `type` |
| `Array` ([]) | `T[]`, `Array<T>` |
| `function` | `(params) => returnType` |
| `Symbol("id")` | `symbol` |
| `123n` (BigInt) | `bigint` |
| (Δεν υπάρχει) | `unknown` (ασφαλέστερο από any) |
| (Δεν υπάρχει) | `string \| number` (union) |
| (Δεν υπάρχει) | `A & B` (intersection) |

## Πρακτικά Παραδείγματα

```typescript
// Με explicit types
let username: string = "john";
let score: number = 100;
let isLoggedIn: boolean = true;

// Με type inference (αυτόματο)
let city = "Athens";        // string
let count = 42;             // number
let active = false;         // boolean

// Interface παράδειγμα
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const item: Product = {
    name: "Laptop",
    price: 999,
    inStock: true
};

// Type παράδειγμα
type Status = 'loading' | 'success' | 'error';
let currentStatus: Status = 'loading';
```

## Commands για Εκτέλεση

```bash
npm run build    # Μεταγλώττιση TypeScript → JavaScript
npm run dev      # Εκτέλεση με ts-node (development)
npm run start    # Εκτέλεση compiled JavaScript
```

## Χρυσός Κανόνας 🏆

- **Interface** → Όταν θέλετε να περιγράψετε ένα object
- **Type** → Όταν θέλετε unions (`|`), intersections (`&`), tuples, κλπ

Αρχίστε με interfaces για objects και types για τα υπόλοιπα!