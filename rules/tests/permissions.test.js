import { doc, getDoc, setDoc } from "firebase/firestore";
import schemas from "schemas.json";
import { clearObject } from "src/operations";
import { testsVars } from "src/tests";


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
  test('should get permissions data', async () => {
    expect.assertions(1);

    const { normalUser, permissionsUUID } = vars;

    const db = normalUser.firestore();
    const permission = await getDoc(doc(db, `permissoes/${permissionsUUID[0]}`));
    const permissionData = permission.data();

    expect(clearObject(permissionData)).toEqual(clearObject(schemas.permissoes.permissao));
  })
  test('should no write to permissions data', async () => {
    expect.assertions(1);

    const { normalUser, permissionsUUID } = vars;

    const db = normalUser.firestore();
    try {
      await setDoc(doc(db, `permissoes/${permissionsUUID[0]}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })
})


describe('Admin user', () => {
  test('should get permissions data', async () => {
    expect.assertions(1);

    const { adminUser, permissionsUUID } = vars;

    const db = adminUser.firestore();
    const permission = await getDoc(doc(db, `permissoes/${permissionsUUID[0]}`));
    const permissionData = permission.data();

    expect(clearObject(permissionData)).toEqual(clearObject(schemas.permissoes.permissao));
  })
  test('should no write to permissions data', async () => {
    expect.assertions(1);

    const { adminUser, permissionsUUID } = vars;

    const db = adminUser.firestore();
    try {
      await setDoc(doc(db, `permissoes/${permissionsUUID[0]}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })
})