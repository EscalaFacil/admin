import { doc, getDoc, setDoc } from "firebase/firestore";
import { testsVars } from "src/tests";
import schemas from "schemas.json";
import { clearObject } from "src/operations";


let vars;


beforeEach(async () => {
  vars = await testsVars();
});


test('user should get its own data', async () => {
  expect.assertions(1);

  const { normalUser } = vars;

  const db = normalUser.firestore();
  const user = await getDoc(doc(db, `usuarios/${normalUser.authToken.user_id}`));
  const userData = user.data();

  expect(clearObject(userData)).toEqual(clearObject(schemas.usuarios.usuario));
});