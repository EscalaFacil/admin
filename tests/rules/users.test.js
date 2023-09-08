import { doc, getDoc, setDoc } from "firebase/firestore";
import { testsVars } from "../../src/rules/tests";


// User gets its own data
// const teste = await getDoc(doc(normalUser.firestore(), `${firestorePaths.users}${normalUser.authToken.user_id}`))
// console.log(teste.data())



function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


// User writes its own data

// User can't read other users data

// User can't write other users data

// User gets its own company data

// Usert writes its own company data

// User can't read other companies data

// User can't write other companies data