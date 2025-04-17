import {colour_mix} from './functions.js';

export function Question1(){
    return <section>
    1. First colour: green Second colour: red colour_mix(green, red) -> yellow
      <h2>results</h2>
      <p>colour_mix("red", "red") == "{colour_mix("red", "red")}"</p>
      <p>colour_mix("red", "green") == "{colour_mix("red", "green")}"</p>
      <p>colour_mix("red", "blue") == "{colour_mix("red", "blue")}"</p>

    </section>;
}

export function Question2(){
  return <section>
  2. Test the function with three different sets of parameters.
    <h2>results</h2>
    <p>largest_product(1, 2, 3) == "{largest_product(1, 2, 3)}"</p>
    <p>largest_product(6, 1, 5) == "{largest_product(6, 1, 5)}"</p>
    <p>largest_product(8, 2, 6) == "{largest_product(8, 2, 6)}"</p>


  </section>;
}