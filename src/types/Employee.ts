export default interface Emp {
  id: number;
  name: string;
  address: string;
  department: { id: number; dept: string };
  role: { id: number; position: string };
  manager: string;
  joining_date: string;
}
