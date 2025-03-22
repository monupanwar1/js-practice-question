// // switch case
// function fetchRole(roleID) {
//   //   switch (roleID) {
//   //     case 1:
//   //       return 'Admin';
//   //     case 2:
//   //       return 'Moderator';
//   //     case 3:
//   //       return 'special user';
//   //     default:
//   //       return 'user';
//   //   }
//   const CreateRoleObj = {
//     1: 'Admin',
//     2: 'Moderator',
//     3: 'specialUser',
//   };
//   return CreateRoleObj[roleID] || ' user';
// };


// clean it
const fetchRole=(role_id)=>{

    const roleObj={
        1:"Admin",
        2:"Moderator",
        3:"specialUser"
    }

    return roleObj[role_id] || "user";

}
console.log(fetchRole(1));
console.log(fetchRole(2));
console.log(fetchRole(2));
console.log(fetchRole(4));

// cleaning this is code
