import injectToken from "@/app/actions";
import Dashboard from "@/app/components/Dashboard/AdminDashboard";
import { getAllNews } from "@/app/lib/services/news/news";
import { getEvent } from "@/app/lib/services/events/events"; 
import { getAllNotice } from "@/app/lib/services/notice/notice";
import { getAllSeminar } from "@/app/lib/services/seminar/seminar";
import { getUsers, loadProfile } from "@/app/lib/services/user/userServices";
import { getCollegeDetails } from "@/app/lib/services/colleges/collegeservices";
import { getAllAdmissions } from "@/app/lib/services/admission/index";


async function AdminDashboard(props) {
  const isFailed = await injectToken();
  const clientProps = {};
  const profie = await loadProfile();
  console.log(profie,'PROFILESSSSSSSS')
  clientProps.isFailed = isFailed;

  let college = await getCollegeDetails();
  console.log(college,'UUID Dashboard')
  let collegeUuid = college.uuid
  
  if (!isFailed) {

    if (profie?.userType === "ADMIN") {
      collegeUuid = "";
      clientProps.admissions = await getAllAdmissions();
    }
    clientProps.users = await getUsers({ limit: 5, page: 1 });
    clientProps.seminar = await getAllSeminar(collegeUuid);
    clientProps.news = await getAllNews(collegeUuid);
    clientProps.notice = await getAllNotice(collegeUuid);
    clientProps.event = await getEvent({ collegeUuid, limit: 5, page: 1 });

    clientProps.isFailed = false;
    clientProps.profie = profie;
  }

  return (
    <>
      <Dashboard clientProps={clientProps} />
    </>
  );
}

export default AdminDashboard;
