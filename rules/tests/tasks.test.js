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
  test('should get its company tasks data', async () => {
    expect.assertions(1);

    const { normalUser, tasksUUID } = vars;

    const db = normalUser.firestore();
    const task = await getDoc(doc(db, `tarefas/${tasksUUID[0]}`));
    const taskData = task.data();

    expect(clearObject(taskData)).toEqual(clearObject(schemas.tarefas.tarefa));
  })


  test('should not write its company tasks data', async () => {
    expect.assertions(1);

    const { normalUser, tasksUUID } = vars;

    const db = normalUser.firestore();
    try {
      await setDoc(doc(db, `tarefas/${tasksUUID[0]}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })


  test('should not get other company tasks data', async () => {
    expect.assertions(1);

    const { normalUser, tasksUUID } = vars;

    const db = normalUser.firestore();
    try {
      await getDoc(doc(db, `tarefas/${tasksUUID[1]}`));
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })


  test('should not write other company tasks data', async () => {
    expect.assertions(1);

    const { normalUser, tasksUUID } = vars;

    const db = normalUser.firestore();
    try {
      await setDoc(doc(db, `tarefas/${tasksUUID[1]}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })
})


describe('Admin user', () => {
  test('should get its company tasks data', async () => {
    expect.assertions(1);

    const { adminUser, tasksUUID } = vars;

    const db = adminUser.firestore();
    const task = await getDoc(doc(db, `tarefas/${tasksUUID[0]}`));
    const taskData = task.data();

    expect(clearObject(taskData)).toEqual(clearObject(schemas.tarefas.tarefa));
  })


  test('should not write its company tasks data', async () => {
    expect.assertions(1);

    const { adminUser, tasksUUID } = vars;

    const db = adminUser.firestore();
    try {
      await setDoc(doc(db, `tarefas/${tasksUUID[0]}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })


  test('should not get other company tasks data', async () => {
    expect.assertions(1);

    const { adminUser, tasksUUID } = vars;

    const db = adminUser.firestore();
    try {
      await getDoc(doc(db, `tarefas/${tasksUUID[1]}`));
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })


  test('should not write other company tasks data', async () => {
    expect.assertions(1);

    const { adminUser, tasksUUID } = vars;

    const db = adminUser.firestore();
    try {
      await setDoc(doc(db, `tarefas/${tasksUUID[1]}`), {});
    } catch (error) {
      expect(error).toBeTruthy();
    }
  })
})