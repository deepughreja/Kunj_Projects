//images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";

interface ChatUserProps {
  id : number;
  img ?: any;
  name : string;
  designation : string;
  color ?: string;
  email : string;
  projects : number;
  tags : Array<string>
}

const users : Array<ChatUserProps> = [
  {
    id: 1,
    name: "David McHenry",
    designation: "HR Manager",
    color: "primary",
    email: "david@skote.com",
    projects: 125,
    tags: ["Role Management", "Reports"],
  },
  {
    id: 2,
    img: avatar2,
    name: "Frank Kirk",
    designation: "Class 1 Officer",
    email: "frank@skote.com",
    projects: 132,
    tags: ["Exam Management", "Dashboard", "FAQ"],
  },
  {
    id: 3,
    img: avatar3,
    name: "Rafael Morales",
    designation: "Marketing Manager",
    email: "Rafael@skote.com",
    projects: 1112,
    tags: ["FAQ", "Exam Management"],
  },
  {
    id: 4,
    name: "Mark Ellison",
    designation: "HR Manager",
    color: "success",
    email: "mark@skote.com",
    projects: 121,
    tags: ["FAQ", "Admin Apps"],
  },
  {
    id: 5,
    img: avatar4,
    name: "Minnie Walter",
    designation: "Class 1 Officer",
    email: "minnie@skote.com",
    projects: 145,
    tags: ["Exam Management", "Dashboard"],
  },
  {
    id: 6,
    img: avatar5,
    name: "Shirley Smith",
    designation: "HR Manager",
    email: "shirley@skote.com",
    projects: 136,
    tags: ["Role Management", "Admin Apps"],
  },
  {
    id: 7,
    name: "John Santiago",
    designation: "HR Manager",
    color: "info",
    email: "john@skote.com",
    projects: 125,
    tags: ["FAQ", "Reports"],
  },
  {
    id: 8,
    img: avatar7,
    name: "Colin Melton",
    designation: "Marketing Manager",
    color: "",
    email: "colin@skote.com",
    projects: 136,
    tags: ["FAQ", "Reports"],
  },
  {
    id: 9,
    name: "David McHenry",
    designation: "HR Manager",
    color: "primary",
    email: "david@skote.com",
    projects: 125,
    tags: ["Role Management", "Reports"],
  },
  {
    id: 10,
    img: avatar2,
    name: "Frank Kirk",
    designation: "Class 1 Officer",
    email: "frank@skote.com",
    projects: 132,
    tags: ["Exam Management", "Dashboard", "FAQ"],
  }
]
const userProfile : Object = {
  id: 1,
  name: "Cynthia Price",
  designation: "HR Manager",
  img: "avatar1",
  projectCount: 125,
  revenue: 1245,
  personalDetail:
    "Hi I'm Cynthia Price,has been the industry's standard dummy text To an English person, it will seem like simplified English, as a skeptical Cambridge.",
  phone: "(123) 123 1234",
  email: "cynthiaskote@gmail.com",
  location: "California, United States",
  experiences: [
    {
      id: 1,
      iconClass: "bx-server",
      link: "#",
      designation: "Back end Developer",
      timeDuration: "2016 - 19",
    },
    {
      id: 2,
      iconClass: "bx-code",
      link: "#",
      designation: "Front end Developer",
      timeDuration: "2013 - 16",
    },
    {
      id: 3,
      iconClass: "bx-edit",
      link: "#",
      designation: "UI /UX Designer",
      timeDuration: "2011 - 13",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Skote admin UI",
      startDate: "2 Sep, 2019",
      deadline: "20 Oct, 2019",
      budget: "$506",
    },
    {
      id: 2,
      name: "Skote admin Logo",
      startDate: "1 Sep, 2019",
      deadline: "2 Sep, 2019",
      budget: "$94",
    },
    {
      id: 3,
      name: "Redesign - Landing page",
      startDate: "21 Sep, 2019",
      deadline: "29 Sep, 2019",
      budget: "$156",
    },
    {
      id: 4,
      name: "App Landing UI",
      startDate: "29 Sep, 2019",
      deadline: "04 Oct, 2019",
      budget: "$122",
    },
    {
      id: 5,
      name: "Blog Template",
      startDate: "05 Oct, 2019",
      deadline: "16 Oct, 2019",
      budget: "$164",
    },
    {
      id: 6,
      name: "Redesign - Multipurpose Landing",
      startDate: "17 Oct, 2019",
      deadline: "05 Nov, 2019",
      budget: "$192",
    },
    {
      id: 7,
      name: "Logo Branding",
      startDate: "04 Nov, 2019",
      deadline: "05 Nov, 2019",
      budget: "$94",
    },
  ],
}
export { users, userProfile }