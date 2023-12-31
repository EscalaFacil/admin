import fs from "fs";
import { initializeTestEnvironment } from "@firebase/rules-unit-testing"
import { fakerPT_BR as faker } from '@faker-js/faker';
import { seedDB } from "src/db.js";


export async function testsVars() {

  let testEnv = await initializeTestEnvironment({
    projectId: "escalafacil-3a421",
    firestore: {
      rules: fs.readFileSync("firestore.rules", "utf8"),
      host: "127.0.0.1",
      port: 8080,
    },
  });


  await testEnv.clearFirestore();
  await seedDB();


  faker.seed(1);
  const adminUserUUID = faker.string.uuid();
  const adminUser = testEnv.authenticatedContext(adminUserUUID, {});

  const normalUserUUID = faker.string.uuid();
  const normalUser = testEnv.authenticatedContext(normalUserUUID, {});

  const superUser = testEnv.authenticatedContext("superUser", {});

  faker.seed(2);
  const userCompanyUUID = faker.string.uuid();
  const otherCompanyUUID = faker.string.uuid();

  faker.seed(3)
  const tasksUUID = [];
  tasksUUID.push(faker.string.uuid());
  tasksUUID.push(faker.string.uuid());

  const permissionsUUID = [0, 1];


  return {
    superUser,
    adminUser,
    adminUserUUID,
    normalUser,
    normalUserUUID,
    userCompanyUUID,
    otherCompanyUUID,
    tasksUUID,
    permissionsUUID
  };
}
