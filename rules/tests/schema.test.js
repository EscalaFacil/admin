import { doc, getDoc } from "firebase/firestore";
import { testsVars } from "src/tests";
import schemas from "schemas.json";
import { clearObject } from "src/operations";


let vars;


beforeEach(async () => {
  vars = await testsVars();
});


describe('Should validate schemas', () => {
  test('user schema', async () => {
    expect.assertions(1);

    const { superUser, normalUserUUID } = vars;

    const db = superUser.firestore();
    const user = await getDoc(doc(db, `usuarios/${normalUserUUID}`));
    const userData = user.data();

    expect(clearObject(userData)).toEqual(clearObject(schemas.usuarios.usuario));
  });


  test('company schema', async () => {
    expect.assertions(1);

    const { superUser, userCompanyUUID } = vars;

    const db = superUser.firestore();
    const company = await getDoc(doc(db, `empresas/${userCompanyUUID}`))
    const companyData = company.data();

    expect(clearObject(companyData)).toEqual(clearObject(schemas.empresas.empresa))
  });


  test('tasks schema', async () => {
    expect.assertions(1);

    const { superUser, tasksUUID } = vars;

    const db = superUser.firestore();
    const tasks = await getDoc(doc(db, `tarefas/${tasksUUID[0]}`));
    const tasksData = tasks.data();

    expect(clearObject(tasksData)).toEqual(clearObject(schemas.tarefas.tarefa))
  });


  test('permissions schema', async () => {
    expect.assertions(1);

    const { superUser, permissionsUUID } = vars;

    const db = superUser.firestore();
    const permissions = await getDoc(doc(db, `permissoes/${permissionsUUID[0]}`));
    const permissionsData = permissions.data();

    expect(clearObject(permissionsData)).toEqual(clearObject(schemas.permissoes.permissao))
  });
})