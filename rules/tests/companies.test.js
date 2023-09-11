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
  test('should get its company data', async () => {
    expect.assertions(1);

    const { normalUser, userCompanyUUID } = vars;

    const db = normalUser.firestore();
    const company = await getDoc(doc(db, `empresas/${userCompanyUUID}`));
    const companyData = company.data();

    expect(clearObject(companyData)).toEqual(clearObject(schemas.empresas.empresa));
  })


  test('should not write its company data', async () => {
    expect.assertions(1);

    const { normalUser, userCompanyUUID } = vars;

    const db = normalUser.firestore();
    try {
      await setDoc(doc(db, `empresas/${userCompanyUUID}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })


  test('should not get other company data', async () => {
    expect.assertions(1);

    const { normalUser, otherCompanyUUID } = vars;

    const db = normalUser.firestore();
    try {
      await getDoc(doc(db, `empresas/${otherCompanyUUID}`));
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })


  test('should not write other company data', async () => {
    expect.assertions(1);

    const { normalUser, otherCompanyUUID } = vars;

    const db = normalUser.firestore();
    try {
      await setDoc(doc(db, `empresas/${otherCompanyUUID}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })
})


describe('Admin user', () => {
  test('should get its company data', async () => {
    expect.assertions(1);

    const { adminUser, userCompanyUUID } = vars;

    const db = adminUser.firestore();
    const company = await getDoc(doc(db, `empresas/${userCompanyUUID}`));
    const companyData = company.data();

    expect(clearObject(companyData)).toEqual(clearObject(schemas.empresas.empresa));
  })


  test('should not write its company data', async () => {
    expect.assertions(1);

    const { adminUser, userCompanyUUID } = vars;

    const db = adminUser.firestore();
    try {
      await setDoc(doc(db, `empresas/${userCompanyUUID}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })


  test('should not get other company data', async () => {
    expect.assertions(1);

    const { adminUser, otherCompanyUUID } = vars;

    const db = adminUser.firestore();
    try {
      await getDoc(doc(db, `empresas/${otherCompanyUUID}`));
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })


  test('should not write other company data', async () => {
    expect.assertions(1);

    const { adminUser, otherCompanyUUID } = vars;

    const db = adminUser.firestore();
    try {
      await setDoc(doc(db, `empresas/${otherCompanyUUID}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })
})