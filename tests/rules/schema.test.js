import { doc, getDoc, setDoc } from "firebase/firestore";
import { testsVars } from "../../src/rules/tests";
import schemas from "../../schemas.json";
import { clearObject } from "../../src/rules/operations";


let vars;


beforeEach(async () => {
  vars = await testsVars();
});


test('should validate user schema', async () => {
  expect.assertions(1);

  const { superUser, normalUserUUID } = vars;

  const db = superUser.firestore();

  const user = await getDoc(doc(db, `usuarios/${normalUserUUID}`));

  const userData = user.data();

  expect(clearObject(userData)).toEqual(clearObject(schemas.usuarios.usuario));
});


it('should validate company schema', async () => {

  const { superUser, userCompanyUUID } = vars;

  const db = superUser.firestore();

  const company = await getDoc(doc(db, `empresas/${userCompanyUUID}`))

  const companyData = company.data();

  expect(clearObject(companyData)).toEqual(clearObject(schemas.empresas.empresa))
});