import admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { fakerPT_BR as faker } from '@faker-js/faker';


// #region Initialize Firebase Admin
const projectId = 'escalafacil-3a421';
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

const app = initializeApp({ projectId });
const db = getFirestore(app);
// #endregion

// #region Seed Fake Data following the schema
const usersUUID = [];

faker.seed(1);
usersUUID.push(faker.string.uuid());

faker.seed(2);
usersUUID.push(faker.string.uuid());

const companiesUUID = [];

faker.seed(3);
companiesUUID.push(faker.string.uuid());

faker.seed(4);
companiesUUID.push(faker.string.uuid());

// Seed Users
async function seedUsers() {
  try {
    for (const i of [0, 1]) {
      await db.collection('usuarios').doc(usersUUID[i]).set({
        "nome": faker.person.fullName(),
        "email": faker.internet.email(),
        "id_empresa": companiesUUID[0],
        "id_permissao": String(i)
      })
    }
  } catch (error) {
    console.error(error, 'users seed failed');
  }
}

// Seed Companies
async function seedCompanies() {
  try {
    for (const uuid of companiesUUID) {
      await db.collection('empresas').doc(uuid).set({
        "nome": faker.company.name(),
        "slug": "company_name_slug"
      })
    }
  } catch (error) {
    console.error(error, 'companies seed failed');
  }
}

// Seed Permissions
async function seedPermissions() {
  try {
    await db.collection('permissoes').doc('0').set({
      "nome": "admin",
      "descricao": faker.lorem.sentence(),
    })
    await db.collection('permissoes').doc('1').set({
      "nome": "normal",
      "descricao": faker.lorem.sentence(),
    })
  } catch (error) {
    console.error(error, 'permissions seed failed');
  }
}

// Seed Tasks
async function seedTasks() {
  try {
    await db.collection('tarefas').doc(faker.string.uuid()).set({
      "nome": "Tarefa 1",
      "descricao": faker.lorem.sentence(),
      "data_inicial": faker.date.recent(),
      "data_final": faker.date.future(),
      "usuarios": [
        usersUUID[1],
      ],
      "id_empresa": companiesUUID[0],
    })
    await db.collection('tarefas').doc(faker.string.uuid()).set({
      "nome": "Tarefa 1",
      "descricao": faker.lorem.sentence(),
      "data_inicial": faker.date.recent(),
      "data_final": faker.date.future(),
      "usuarios": [],
      "id_empresa": companiesUUID[1],
    })
  } catch (error) {
    console.error(error, 'tasks seed failed');
  }
}

export async function seedDB() {
  await Promise.all([
    seedUsers(),
    seedCompanies(),
    seedPermissions(),
    seedTasks(),
  ]);
}

// #endregion

