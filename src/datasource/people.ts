import { RESTDataSource } from "apollo-datasource-rest";

export class starWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getAllPeople() {
    const response = await this.get("people");
    return Array.isArray(response.results)
      ? response.results.map((person: any) => this.personReducer(person))
      : [];
  }

  async getPeopleByPage({ pageNum }:{pageNum: any}) {
    const response = await this.get("people/", { page: pageNum });
    return Array.isArray(response.results)
      ? response.results.map((person: any) => this.personReducer(person))
      : [];
  }

  async getPeopleByName({ nameSearch }: { nameSearch:any }) {
    const response = await this.get("people/", { search: nameSearch });
    return Array.isArray(response.results)
      ? response.results.map((person: any) => this.personReducer(person))
      : [];
  }
  personReducer(person: { name: any; height: any; mass: any; gender: any; homeworld: any; }) {
    return {
      name: person.name,
      height: person.height,
      mass: person.mass,
      gender: person.gender,
      homeworld: person.homeworld,
    };
  }
}


