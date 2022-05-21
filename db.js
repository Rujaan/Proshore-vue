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
      id: i * 10 + 1,
      name: casual.full_name,
      address: casual.address,
      department: department[Math.floor(Math.random() * role.length)],
      role: role[Math.floor(Math.random() * role.length)],
      manager: manager[Math.floor(Math.random() * role.length)],
      joining_date: casual.date((format = "YYYY-MM-DD")),
    });
  }
  data.manager = manager;
  data.department = department;
  return data;
};
