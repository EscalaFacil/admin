import { doc, getDoc, setDoc } from "firebase/firestore";
import { testsVars } from "src/tests";
import schemas from "schemas.json";
import { clearObject } from "src/operations";


/**
 * @type {{
    superUser: RulesTestContext;
    adminUser: RulesTestContext;
    adminUserUUID: string;
    normalUser: RulesTestContext;
    normalUserUUID: string;
    userCompanyUUID: string;
    otherCompanyUUID: string;
    tasksUUID: string[];
    permissionsUUID: number[];
}}
*/
let vars;


beforeEach(async () => {
  vars = await testsVars();
});


describe('Normal user', () => {
  test('should get its own data', async () => {
    expect.assertions(1);

    const { normalUser } = vars;

    const db = normalUser.firestore();
    const user = await getDoc(doc(db, `usuarios/${normalUser.authToken.user_id}`));
    const userData = user.data();

    expect(clearObject(userData)).toEqual(clearObject(schemas.usuarios.usuario));
  });


  test('should not write its own data', async () => {
    expect.assertions(1);

    const { normalUser } = vars;

    const db = normalUser.firestore();
    try {
      await setDoc(doc(db, `usuarios/${normalUser.authToken.user_id}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });


  test('should not read other user data', async () => {
    expect.assertions(1);

    const { normalUser, adminUser } = vars;

    const db = normalUser.firestore();
    try {
      await getDoc(doc(db, `usuarios/${adminUser.authToken.user_id}`));
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test('should not write other user data', async () => {
    expect.assertions(1);

    const { normalUser, adminUser } = vars;

    const db = normalUser.firestore();
    try {
      await setDoc(doc(db, `usuarios/${adminUser.authToken.user_id}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
})


describe('Admin user', () => {
  test('should get its own data', async () => {
    expect.assertions(1);

    const { adminUser } = vars;

    const db = adminUser.firestore();
    const user = await getDoc(doc(db, `usuarios/${adminUser.authToken.user_id}`));
    const userData = user.data();

    expect(clearObject(userData)).toEqual(clearObject(schemas.usuarios.usuario));
  });


  test('should not write its own data', async () => {
    expect.assertions(1);

    const { adminUser } = vars;

    const db = adminUser.firestore();
    try {
      await setDoc(doc(db, `usuarios/${adminUser.authToken.user_id}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });


  test('should not read other user data', async () => {
    expect.assertions(1);

    const { adminUser, normalUser } = vars;

    const db = adminUser.firestore();
    try {
      await getDoc(doc(db, `usuarios/${normalUser.authToken.user_id}`));
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  test('should not write other user data', async () => {
    expect.assertions(1);

    const { adminUser, normalUser } = vars;

    const db = adminUser.firestore();
    try {
      await setDoc(doc(db, `usuarios/${normalUser.authToken.user_id}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
})