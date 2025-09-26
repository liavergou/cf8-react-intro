import React from 'react';

// Ορίζουμε τους τύπους για τα props (αν υπάρχουν) και το state
type Props = {};
type State = {
    count: number;
};

class ClassComponentWithState extends React.Component<Props, State> {

    // 1. Αρχικοποιούμε το state μέσα στον constructor
    constructor(props: Props) {
        super(props);
        this.state = {count: 0}; // Η αρχική τιμή του μετρητή
    }

    // 2. Δημιουργούμε μια μέθοδο για να αλλάξουμε το state
    // Χρησιμοποιούμε arrow function για να δουλέψει σωστά το 'this'
    increaseCount = () => {
        // Ποτέ δεν αλλάζουμε το state απευθείας (π.χ. this.state.count++)!
        // Χρησιμοποιούμε πάντα τη μέθοδο this.setState()
        this.setState({ count: this.state.count + 1 });
    };

    // 3. Η μέθοδος render() είναι υποχρεωτική. Επιστρέφει το JSX.
    render() {
        return (
            <>
                <h1 className = "text-center my-12">Count is <strong>{this.state.count}</strong></h1>
                <div className="text-center">

                    <button
                        className="bg-cf-dark-gray text-white py-2 px-4"
                        onClick = {this.increaseCount} //το καλουμε με το this
                    >
                        Increase
                    </button>


                </div>

            </>
        );
    }
}

export default ClassComponentWithState;