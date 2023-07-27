{
    var Roles = void 0;
    (function (Roles) {
        Roles[Roles["Admin"] = 0] = "Admin";
        Roles[Roles["Moderator"] = 1] = "Moderator";
        Roles[Roles["User"] = 2] = "User";
    })(Roles || (Roles = {}));
    var JohnDoe = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.Admin
    };
    var AmandaDoe = {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.Moderator
    };
    var ThomasJefferson = {
        id: 'rwe5345sfst3453543',
        firstName: 'John',
        lastName: 'Doe',
        role: Roles.User
    };
    var names = [JohnDoe.firstName, AmandaDoe.firstName, ThomasJefferson.firstName];
    var JohnDoeSummary = [JohnDoe.firstName, JohnDoe.lastName, JohnDoe.role];
}
