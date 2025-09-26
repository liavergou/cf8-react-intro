# Διάγραμμα Ροής Εκκίνησης

```
[ index.html ]
     |
     | 1. Ο browser φορτώνει το HTML και το <script> tag.
     v
[ main.tsx ]
     |
     | 2. Εκτελείται το script, βρίσκει το <div id="root">.
     | 3. Καλεί τη React να κάνει render το <App />.
     v
[ App.tsx ]
     |
     | 4. Το App component επιστρέφει το JSX του.
     | 5. Καλεί το <ViteIntro />.
     v
[ ViteIntro.tsx ]
     |
     | 6. Το ViteIntro component επιστρέφει το τελικό HTML.
     v
(Εμφάνιση στην οθόνη)
```

# Οδηγός για τα React Components

Αυτός ο οδηγός εξηγεί με απλά λόγια τι είναι τα React components, ποια αρχεία τα αποτελούν και πώς μπορείτε να τα χρησιμοποιήσετε στο project σας.

## Τι είναι ένα Component;

Ένα **component** είναι ένα ανεξάρτητο, επαναχρησιμοποιήσιμο κομμάτι κώδικα που διαχειρίζεται τη δική του λογική και εμφάνιση (UI). Σκεφτείτε το σαν ένα τουβλάκι LEGO. Μπορείτε να φτιάξετε πολλά μικρά τουβλάκια (components) και να τα συνδυάσετε για να χτίσετε κάτι μεγαλύτερο και πιο σύνθετο, όπως μια ολόκληρη σελίδα.

Στο React, ένα component είναι συνήθως μια συνάρτηση JavaScript που επιστρέφει HTML-like κώδικα, ο οποίος ονομάζεται **JSX**.

## Δομή Αρχείων ενός Component

Για καλύτερη οργάνωση, κάθε component πρέπει να έχει τον δικό του φάκελο. Μέσα σε αυτόν τον φάκελο, τοποθετούμε τα αρχεία που το αφορούν.

*   **Φάκελος Component:** Κάθε component ζει στον δικό του φάκελο, με το όνομά του (π.χ. `ViteIntro`). Όλοι οι φάκελοι των components βρίσκονται μέσα στο `src/components/`.
*   **Αρχείο TSX (`.tsx`):** Περιέχει τη λογική και το JSX του component. Το όνομα του αρχείου είναι το ίδιο με του φακέλου (π.χ. `ViteIntro.tsx`).
*   **Αρχείο CSS (`.css`): Περιέχει τα στυλ που αφορούν αποκλειστικά το συγκεκριμένο component (π.χ. `ViteIntro.css`).

**Παράδειγμα Δομής:**
```
src/
└── components/
    └── ViteIntro/
        ├── ViteIntro.tsx
        └── ViteIntro.css
```

### Σύνδεση TSX με CSS

Για να συνδέσουμε το αρχείο CSS με το component του, προσθέτουμε την παρακάτω γραμμή στην κορυφή του `.tsx` αρχείου:

```typescript
// Μέσα στο src/components/ViteIntro/ViteIntro.tsx
import './ViteIntro.css';
```
Αυτή η εντολή `import` διασφαλίζει ότι τα στυλ του `ViteIntro.css` θα φορτώνουν πάντα μαζί με το component `ViteIntro`.

### Δήλωση του Component (Export)


Για να μπορεί ένα component να χρησιμοποιηθεί σε άλλα αρχεία, πρέπει να το κάνουμε διαθέσιμο με `export` στο τέλος του `.tsx` αρχείου του.

```typescript
// Μέσα στο src/components/ViteIntro/ViteIntro.tsx
function ViteIntro() {
  // ...λογική και JSX...
}

export default ViteIntro; // Κάνουμε το component διαθέσιμο για import
```

## Σειρά Φόρτωσης CSS

Τα στυλ στο project εφαρμόζονται με μια συγκεκριμένη ιεραρχία:

1.  **`index.css`:** Αυτό είναι το πρώτο αρχείο CSS που φορτώνει η εφαρμογή. Περιέχει γενικά, καθολικά στυλ (global styles) που εφαρμόζονται παντού, όπως το font της σελίδας, τα χρώματα του background κ.λπ.
2.  **Component CSS:** Κάθε component εισάγει το δικό του αρχείο CSS (π.χ. το `ViteIntro.tsx` εισάγει το `ViteIntro.css`). Τα στυλ αυτά εφαρμόζονται μόνο στο συγκεκριμένο component και μπορούν να παρακάμψουν (override) τα γενικά στυλ του `index.css`.

## Πώς Καλώ ένα Component

Η διαδικασία παραμένει ίδια, αλλά αλλάζει η διαδρομή (path) στο import.

### 1. Εισαγωγή (Import)

Η διαδρομή πρέπει πλέον να οδηγεί στο σωστό αρχείο `.tsx` μέσα στον φάκελό του.

```typescript
// Παράδειγμα: Εισαγωγή του ViteIntro στο App.tsx
import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
```

> #### Επεξήγηση: Σχετικές Διαδρομές (`../`)
>
> Όταν κάνουμε `import` ένα αρχείο, η διαδρομή (path) που γράφουμε είναι "σχετική" με τη θέση του αρχείου στο οποίο βρισκόμαστε.
>
> *   `./` σημαίνει "ξεκίνα από τον **τρέχοντα φάκελο**".
> *   `../` σημαίνει "πήγαινε **έναν φάκελο πάνω**".
>
> Για παράδειγμα, αν μέσα στο `ViteIntro.tsx` θέλαμε να εισάγουμε μια εικόνα από το `src/assets`, η διαδρομή θα ήταν `../../assets/react.svg`. Αυτό συμβαίνει γιατί:
>
> 1.  Ξεκινάμε από το `src/components/ViteIntro/`.
> 2.  Το πρώτο `../` μας ανεβάζει στο `src/components/`.
> 3.  Το δεύτερο `../` μας ανεβάζει στο `src/`.
> 4.  Από εκεί, μπορούμε να μπούμε στον φάκελο `assets/` για να βρούμε το αρχείο.


### 2. Χρήση (Render)

Η χρήση στο JSX δεν αλλάζει.

```typescript
function App() {
  return (
    <>
      <ViteIntro />
    </>
  )
}
```
## Μεταφορά Στυλ στο Component

Για να συγκεντρώσουμε όλα τα σχετικά στυλ μέσα στο ίδιο το component, ακολουθήσαμε τα παρακάτω βήματα:

*   Αντιγράψαμε όλο το περιεχόμενο του `src/index.css`, εκτός από τη γραμμή `@import "tailwindcss";`, και το επικολλήσαμε στο `src/components/ViteIntro/ViteIntro.css`.
*   Στη συνέχεια, αντιγράψαμε το περιεχόμενο του `src/App.css` και το προσθέσαμε στο τέλος του `src/components/ViteIntro/ViteIntro.css`.

Με αυτόν τον τρόπο, τα περισσότερα στυλ της εφαρμογής βρίσκονται πλέον μέσα στο component `ViteIntro`, κάνοντας το `index.css` υπεύθυνο κυρίως για καθολικές ρυθμίσεις όπως το Tailwind.

# Πώς Ξεκινάει η React Εφαρμογή;

Η εκκίνηση της εφαρμογής είναι μια αλυσίδα από βήματα που συνδέουν το απλό HTML με τα components της React.

### Βήμα 1: `index.html` - Η Πύλη Εισόδου

Όλα ξεκινούν από το `public/index.html`. Το πρώτο πράγμα που βλέπει το DOM (browser) είναι το index.html. Φορτώνει (κάνει mount) to index.html, το οποίο είναι σχεδόν άδειο. Περιέχει όμως δύο κρίσιμα στοιχεία:

*   **`<div id="root"></div>`**: Ένα κενό "κουτί" που λειτουργεί ως σημείο προσάρτησης για την εφαρμογή μας.
*   **`<script type="module" src="/src/main.tsx"></script>`**: Μια εντολή που λέει στον browser να κατεβάσει και να εκτελέσει το αρχείο `main.tsx`.

### Βήμα 2: `main.tsx` - Ο Εκκινητής

Αυτό το αρχείο είναι η "μίζα" της React. Εκτελεί τις παρακάτω ενέργειες:

1.  **`import './index.css'`**: Εισάγει τα καθολικά (global) στυλ για να είναι διαθέσιμα σε όλη την εφαρμογή.
2.  **`createRoot(document.getElementById('root')!)`**: Εντοπίζει το **`<div id="root">`** από το HTML και δίνει στη React τον έλεγχό του.
3.  **`.render(<StrictMode><App /></StrictMode>)`**: Κάνει "inject" (εισάγει) το βασικό component της εφαρμογής, το **`<App />`**, μέσα στο `div#root`.
    *   Το **`<StrictMode>`** είναι ένα εργαλείο για development που μας βοηθά να γράφουμε καλύτερο κώδικα, βγάζοντας προειδοποιήσεις για πιθανά προβλήματα.

### Βήμα 3: `App.tsx` - Ο Κεντρικός Διαχειριστής

Μόλις το `main.tsx` καλέσει το **`<App />`**, η React παραδίδει τη σκυτάλη στο αρχείο `src/App.tsx`.

*   Το `App` component λειτουργεί ως ο κεντρικός διαχειριστής της εφαρμογής.
*   Αποφασίζει ποια άλλα components θα εμφανιστούν στην οθόνη.
*   Στο project μας, το `App.tsx` απλώς καλεί το επόμενο component στην αλυσίδα, το **`<ViteIntro />`**, ολοκληρώνοντας τη διαδικασία εκκίνησης.

### Συνοπτικά:

1.  Το `main.tsx` λέει στη React: "Φόρτωσε το component **`App`**".
2.  Η React εκτείνει τη συνάρτηση `App()` μέσα στο αρχείο `App.tsx`.
3.  Η συνάρτηση `App` επιστρέφει το JSX: **`<ViteIntro />`**.
4.  Η React βλέπει ότι πρέπει να φορτώσει το component **`ViteIntro`** και συνεχίζει τη διαδικασία, ζωγραφίζοντας το περιεχόμενο του `ViteIntro.tsx` στην οθόνη.

## Class Components vs Functional Components

Στο React, υπάρχουν δύο τρόποι να γράψουμε ένα component: ως **Class Component** (ο παλιός τρόπος) ή ως **Functional Component** (ο σύγχρονος τρόπος).

**Για όλα τα νέα projects, χρησιμοποιούμε πάντα Functional Components.**

---

### Functional Components (Ο Σύγχρονος Τρόπος)

Είναι απλές συναρτήσεις JavaScript. Είναι ο προτεινόμενος τρόπος γιατί είναι πιο σύντομοι, πιο ευανάγνωστοι και, με τη χρήση των **Hooks** (π.χ. `useState`), μπορούν να διαχειριστούν state και άλλες πολύπλοκες λειτουργίες.

**Παράδειγμα:**
```jsx
import React from 'react';

function MyComponent() {
  return <h1>Hello from a Functional Component!</h1>;
}

export default MyComponent;
```

### Class Components (Ο Παλιός Τρόπος)

Είναι κλάσεις της JavaScript που κληρονομούν από το `React.Component`. Χρησιμοποιούν τη μέθοδο `render()` για να επιστρέψουν JSX. Θα τα συναντήσετε κυρίως σε παλαιότερα projects.

**Παράδειγμα:**
```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <h1>Hello from a Class Component!</h1>;
  }
}

export default MyComponent;
```

### Γιατί να με ενδιαφέρουν τα Class Components;

Παρόλο που δεν θα τα γράφετε συχνά, είναι χρήσιμο να τα αναγνωρίζετε για δύο λόγους:
1.  **Συντήρηση Παλαιού Κώδικα:** Αν δουλέψετε σε ένα project που ξεκίνησε πριν το 2019, πιθανότατα θα είναι γεμάτο με Class Components.
2.  **Error Boundaries:** Είναι μια προχωρημένη τεχνική για διαχείριση σφαλμάτων που, προς το παρόν, υλοποιείται μόνο με Class Components.

**Συμπέρασμα:** Επικεντρωθείτε στο να μάθετε καλά τα **Functional Components και τα Hooks**. Είναι το παρόν και το μέλλον του React.

## Δημιουργία Arrow Functional Component

Αυτός είναι ο πιο σύγχρονος και διαδεδομένος τρόπος για να γράψετε ένα React component. Ας δούμε πώς δημιουργήσαμε το `ArrowFunctionalComponent.tsx`.

**1. Δημιουργία Αρχείου:**
Δημιουργήσαμε ένα νέο αρχείο: `src/components/ArrowFunctionalComponent.tsx`.

**2. Γράφοντας τον Κώδικα:**
Αντί για `function MyComponent()`, χρησιμοποιούμε τη σύνταξη `const MyComponent = () =>`.

```typescript
// src/components/ArrowFunctionalComponent.tsx

import './ArrowFunctionalComponent.css';

const ArrowFunctionalComponent = () => {
    return (
        <h1 className="text-center text-xl font-bold mt-12">
            This is an Arrow Functional Component
        </h1>
    );
};

export default ArrowFunctionalComponent;
```

### Ανάλυση Κώδικα:

*   `const ArrowFunctionalComponent = ...`: Δηλώνουμε μια σταθερά με το όνομα του component μας.
*   `= () => { ... }`: Αυτή είναι η "arrow function". Το `()` παίρνει τα `props` (αν υπάρχουν) και το `{...}` περιέχει τη λογική του component.
*   `return (...)`: Επιστρέφει το JSX που θα εμφανιστεί.
*   `export default ArrowFunctionalComponent;`: Κάνει το component διαθέσιμο για να το χρησιμοποιήσουμε σε άλλα μέρη της εφαρμογής.

Αυτή η δομή είναι πιο λιτή και θεωρείται πλέον το standard στη React κοινότητα.

## Συντομεύσεις Emmet για Γρήγορο Γράψιμο

Για να γράψετε HTML/JSX πιο γρήγορα, μπορείτε να χρησιμοποιήσετε τις συντομεύσεις Emmet. Απλώς γράψτε τη συντόμευση και πατήστε `Tab` ή `Enter`.

*   **Δημιουργία Tag:**
    *   `div` → `<div></div>`
*   **Class:**
    *   `p.my-class` → `<p class="my-class"></p>`
*   **ID:**
    *   `div#app` → `<div id="app"></div>`
*   **Φώλιασμα (Nesting):**
    *   `div>p` → `<div><p></p></div>`
*   **Αδελφά Elements (Siblings):**
    *   `h1+p` → `<h1></h1><p></p>`
*   **Πολλαπλασιασμός:**
    *   `li*3` → `<li></li><li></li><li></li>`
*   **Περιεχόμενο:**
    *   `h2{My Title}` → `<h2>My Title</h2>`

**Παράδειγμα συνδυασμού:** `ul.list>li*3` μετατρέπεται σε:
```html
<ul class="list">
    <li></li>
    <li></li>
    <li></li>
</ul>
```

---

# Προχωρημένες Έννοιες Component

Καθώς γινόμαστε καλύτεροι, μπορούμε να εισάγουμε πιο σύνθετες έννοιες για να κάνουμε τα components μας πιο δυναμικά και επαναχρησιμοποιήσιμα.

## Τι είναι τα Props;

Τα **Props** (συντομογραφία για "Properties") είναι ο τρόπος για να περνάμε δεδομένα από ένα γονικό component σε ένα παιδικό.

*   **Σαν Παράμετροι Συνάρτησης:** Σκεφτείτε τα `props` σαν τις παραμέτρους που δίνουμε σε μια συνάρτηση για να επηρεάσουμε το αποτέλεσμά της.
*   **Ροή Δεδομένων:** Τα δεδομένα ρέουν πάντα από "πάνω προς τα κάτω" (γονέας -> παιδί).
*   **Μόνο για Ανάγνωση:** Ένα component δεν μπορεί να αλλάξει τα props που λαμβάνει. Μπορεί μόνο να τα διαβάσει.

**Παράδειγμα:**
```jsx
// Στο παιδικό component
function WelcomeMessage(props) {
  return <h1>Καλώς ήρθες, {props.name}!</h1>;
}

// Στο γονικό component
function App() {
  return <WelcomeMessage name="Μαρία" />;
}
```

## Το Ειδικό Prop: `children`

Το `children` είναι ένα ειδικό prop που μας επιτρέπει να περνάμε άλλα components ή JSX *μέσα* σε ένα component.

*   **Σαν Κουτί:** Σκεφτείτε ένα component σαν ένα κουτί. Ό,τι βάλετε μέσα στο κουτί είναι τα `children` του.
*   **Για Σύνθεση:** Είναι θεμελιώδες για τη δημιουργία επαναχρησιμοποιήσιμων components που "αγκαλιάζουν" άλλο περιεχόμενο, όπως κάρτες, παράθυρα διαλόγου ή layouts.

**Παράδειγμα:**
```jsx
// Το "κουτί"
function Card(props) {
  return <div className="card">{props.children}</div>;
}

// Πώς το χρησιμοποιούμε
function App() {
  return (
    <Card>
      {/* Αυτά είναι τα children του Card */}
      <h2>Τίτλος Κάρτας</h2>
      <p>Αυτό είναι το περιεχόμενο.</p>
    </Card>
  );
}
```

## Σύνθεση με Layout Components

Ένα **Layout Component** είναι ένα συνηθισμένο πρότυπο (pattern) όπου ένα component ορίζει τη γενική δομή μιας σελίδας (π.χ. header, footer) και χρησιμοποιεί το `props.children` για να εισάγει το μοναδικό περιεχόμενο της κάθε σελίδας.

*   **Αποφυγή Επανάληψης:** Μας βοηθά να μην επαναλαμβάνουμε τα ίδια στοιχεία (όπως το Header) σε κάθε σελίδα.
*   **Συνεπής Εμφάνιση:** Διασφαλίζει ότι όλες οι σελίδες μας έχουν μια συνεπή δομή.

**Παράδειγμα:**
```jsx
// Το Layout component
function PageLayout(props) {
  return (
    <>
      <header>Η Ιστοσελίδα μου</header>
      <main>
        {props.children} {/* Εδώ θα μπει το περιεχόμενο της σελίδας */}
      </main>
      <footer>© 2025</footer>
    </>
  );
}

// Πώς το χρησιμοποιούμε
function App() {
  return (
    <PageLayout>
      <h1>Αρχική Σελίδα</h1>
      <p>Καλώς ήρθατε στο site μας!</p>
    </PageLayout>
  );
}
```

---

# Διαχείριση Κατάστασης με το Hook `useState`

Μέχρι τώρα, τα components μας ήταν στατικά. Έπαιρναν `props` και εμφάνιζαν κάτι. Τι γίνεται όμως όταν ένα component χρειάζεται να "θυμάται" πληροφορίες που αλλάζουν με τον χρόνο (π.χ. την τιμή ενός μετρητή, το περιεχόμενο μιας φόρμας);

Εδώ έρχεται η έννοια του **State** (Κατάσταση).

*   **Τι είναι το State:** Είναι η εσωτερική "μνήμη" ενός component. Είναι δεδομένα που το component διαχειρίζεται μόνο του.
*   **Η Μαγεία του State:** Όταν η τιμή του state αλλάζει, η React αυτόματα ξανα-κάνει render το component για να εμφανίσει την αλλαγή.

Ο βασικός τρόπος για να προσθέσουμε state σε ένα Functional Component είναι το **Hook** που ονομάζεται `useState`.

### Πώς Δουλεύει το `useState`

**1. Εισαγωγή (Import):**
Πρώτα, πρέπει να το εισάγουμε από τη βιβλιοθήκη της React.
```javascript
import { useState } from 'react';
```

**2. Δήλωση του State:**
Μέσα στο component μας, καλούμε το `useState` δίνοντάς του μια αρχική τιμή.
```javascript
const [count, setCount] = useState(0);
```
Αυτό μας επιστρέφει έναν πίνακα με δύο στοιχεία:
*   `count`: Η τρέχουσα τιμή του state (ξεκινάει από την αρχική τιμή, δηλαδή `0`).
*   `setCount`: Η **συνάρτηση** που χρησιμοποιούμε για να αλλάξουμε την τιμή του `count`.

**3. Ενημέρωση του State:**
Για να αλλάξουμε το state, **πάντα καλούμε τη συνάρτηση** που μας έδωσε το `useState`.
```javascript
// ΣΩΣΤΟ
const increaseCount = () => {
    setCount(count + 1); // Καλούμε τη συνάρτηση με τη νέα τιμή
}

// ΛΑΘΟΣ!
const wrongIncrease = () => {
    count = count + 1; // Ποτέ δεν αλλάζουμε το state απευθείας!
}
```

**Παράδειγμα (Ο Μετρητής που έφτιαξες):**
```jsx
import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);
    const resetCount = () => setCount(0);

    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </>
    );
}
```
