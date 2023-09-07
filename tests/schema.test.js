import { doc, getDoc, setDoc } from "firebase/firestore";
import { testsVars } from "../src/tests";
import schemas from "../schemas.json";
import { clearObject } from "../src/operations";


test('should validate user schema', async () => {

  const { superUser, normalUserUUID } = await testsVars();

  const db = superUser.firestore();

  const user = await getDoc(doc(db, `usuarios/${normalUserUUID}`))

  const userData = user.data();

  expect(clearObject(userData)).toEqual(clearObject(schemas.usuarios.usuario))
});

test('should validate company schema', async () => {

  const { superUser, userCompanyUUID } = await testsVars();

  const db = superUser.firestore();

  const company = await getDoc(doc(db, `empresas/${userCompanyUUID}`))

  const companyData = company.data();

  expect(clearObject(companyData)).toEqual(clearObject(schemas.empresas.empresa))
});