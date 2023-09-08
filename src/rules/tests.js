import fs from "fs";
import { initializeTestEnvironment } from "@firebase/rules-unit-testing"
import { fakerPT_BR as faker } from '@faker-js/faker';
import { seedDB } from "./db.js";


export async function testsVars() {

  let testEnv = await initializeTestEnvironment({
    projectId: "escalafacil-3a421",
    firestore: {
      rules: fs.readFileSync("src/rules/firestore.rules", "utf8"),
      host: "127.0.0.1",
      port: 8080,
    },
  });


  await testEnv.clearFirestore();
  await seedDB();


  faker.seed(1);
  const adminUserUUID = faker.string.uuid();
  const adminUser = testEnv.authenticatedContext(adminUserUUID, {});

  faker.seed(2);
  const normalUserUUID = faker.string.uuid();
  const normalUser = testEnv.authenticatedContext(normalUserUUID, {});

  faker.seed(3);
  const userCompanyUUID = faker.string.uuid();

  faker.seed(4);
  const otherCompanyUUID = faker.string.uuid();

  const superUser = testEnv.authenticatedContext("superUser", {});


  return { superUser, adminUser, adminUserUUID, normalUser, normalUserUUID, userCompanyUUID, otherCompanyUUID };
}
