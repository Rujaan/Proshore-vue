module.exports = () => {
  var casual = require("casual"); //https://github.com/boo1ean/casual

  var role = ["Manager", "Employee"];
  var department = [
    {
      id: "Department" + casual.integer((from = 0), (to = 999999)),
      dept: "General",
    },
    {
      id: "Department" + casual.integer((from = 0), (to = 999999)),
      dept: "Marketing",
    },
    {
      id: "Department" + casual.integer((from = 0), (to = 999999)),
      dept: "Finance",
    },
    {
      id: "Department" + casual.integer((from = 0), (to = 999999)),
      dept: "Sales",
    },
    {
      id: "Department" + casual.integer((from = 0), (to = 999999)),
      dept: "HR",
    },
  ];

  var manager = [
    {
      id: "Manager" + casual.integer((from = 0), (to = 999999)),
      position: "General",
    },
    {
      id: "Manager" + casual.integer((from = 0), (to = 999999)),
      position: "Functional",
    },
    {
      id: "Manager" + casual.integer((from = 0), (to = 999999)),
      position: "Front Line",
    },
  ];

  //data to export
  const data = { employee: [], manager: [], department: [] };

  for (let i = 0; i < 20; i++) {
    data.employee.push({
      id: casual.uuid,
      name: casual.full_name,
      Address: casual.address,
      Department_id: department[Math.floor(Math.random() * role.length)].id,
      Role: role[Math.floor(Math.random() * role.length)],
      Manager_id: manager[Math.floor(Math.random() * role.length)].id,
      Joining_date: casual.date((format = "YYYY-MM-DD")),
    });
    data.manager.push({
      Manager_id: manager[Math.floor(Math.random() * role.length)].id,
      Manager_position:
        manager[Math.floor(Math.random() * role.length)].position,
    });
    data.department.push({
      Department_id: department[Math.floor(Math.random() * role.length)].id,
      Department_dept: department[Math.floor(Math.random() * role.length)].dept,
    });
  }
  return data;
};
