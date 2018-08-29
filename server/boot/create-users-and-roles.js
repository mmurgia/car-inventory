// module.exports = function(app) {
//   var User = app.models.user;
//   var Role = app.models.Role;
//   var RoleMapping = app.models.RoleMapping;
//
//   User.create([
//     {username: 'mmurgia', email: 'mmurgia@doe.com', password: 'password'},
//     {username: 'Jane', email: 'jane@doe.com', password: 'password'},
//     {username: 'Bob', email: 'bob@projects.com', password: 'password'}
//   ], function(err, users) {
//     if (err) throw err;
//
//     console.log('Created users:', users);
//
//     //create the admin role
//     Role.create({
//       name: 'admin'
//     }, function(err, role) {
//       if (err) throw err;
//
//       console.log('Created role:', role);
//
//       //make bob an admin
//       role.principals.create({
//         principalType: RoleMapping.USER,
//         principalId: users[0].id
//       }, function(err, admin) {
//         if (err) throw err;
//
//         console.log('Created admin:', admin);
//       });
//     });
//   });
// };
