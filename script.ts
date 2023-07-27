{
  enum Roles {
    Admin,
    Moderator,
    User,
  }

  const JohnDoe: {
    id: string | number;
    firstName: string;
    lastName: string;
    role: Roles;
  }
  = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.Admin
  }


  const AmandaDoe: {
    id: string | number;
    firstName: string;
    lastName: string;
    role: Roles;
  }
  = {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.Moderator
  }


  const ThomasJefferson: {
    id: string | number;
    firstName: string;
    lastName: string;
    role: Roles;
  }
  = {
    id: 'rwe5345sfst3453543',
    firstName: 'John',
    lastName: 'Doe',
    role: Roles.User
  }


  const names: [string, string, string] = [JohnDoe.firstName, AmandaDoe.firstName, ThomasJefferson.firstName]
  const JohnDoeSummary: [string, string, Roles] = [JohnDoe.firstName, JohnDoe.lastName, JohnDoe.role]
}