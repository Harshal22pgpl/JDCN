import moment from "moment";


export const BASE_URL = 'https://lnct-backend.vercel.app/api/v1';

export const CREDINITAIL = {
  email: "",
  password: "",
};

export const NOTICEINITIAL = {
  title: "",
  file: "",
  description: "",
  endDate: "",
  collegeUuid:""
};

export const ERR_MSG_PREFIX = "The following fields are blank:";
export const ALERT_TIMEOUT = 3000;

export const NEWSINITAIL = {
  title: "",
  description: "",
  imageUrl: "",
  publishedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
  collegeUuid:""
};



export const SELECT_TYPE = "Select user type";
export const userTypes = [
  "ADMIN",
  "FACULTY",
  "PRINCIPLE",
  "STUDENT",
  "FRONT_DESK",
  "DEVELOPER",
];

export const EVENTS_INITIAL = {
  title: "",
  description: "",
  imageUrl: "",
  startDate: "2024-05-04T15:52:51.463Z",
  endDate: "2024-05-07T15:52:51.463Z",
  type: "",
  registrationRequired: false,
  collegeUuid:""
};

export const SEMINARINITIAL = {
  title: "",
  type: "",
  department: "",
  speakerName: "",
  venue: "",
  contactPerson: "",
  abstract: "",
  imageUrl: "",
  publishedDate: "2024-05-04T15:52:51.463Z"
};


export const JOB_APPLICATION={
  
    applicantName: "",
    email: "",
    phone: "",
    collegeName: "",
    isOpen: true,
    qualifications: "",
    experience: "",
    resumeLink: "",
    additionalInfo: "",
    jobUuid: ""
  
  
}

export const USER_INITIAL = {
  email: "",
  phone: "",
  password: "",
  firstName: "",
  lastName: "",
  isActive: false,
  type: "",
  isVerified: true,
  address: "",
  state: "",
  city: "",
  pinCode: "",
  profilePicture: "",
  isSuspicious: false,
  roles: [],
};


export const ADMIN ='ADMIN'